/* global chance */
const DataGenerator = {};
const methods = ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'HEAD'];
const methodsSize = methods.length - 1;

let LAST_TIME = Date.now();

DataGenerator.createProjectObject = function() {
  const project = {
    _id: chance.string({length: 12}),
    name: chance.sentence({words: 2}),
    order: 0,
    description: chance.paragraph()
  };
  return project;
};

DataGenerator.genRequestObject = function(projectData) {
  const methodIndex = chance.integer({min: 0, max: methodsSize});
  const url = chance.url();
  const name = chance.sentence({words: 2});
  LAST_TIME -= chance.integer({min: 1.8e+6, max: 8.64e+7});
  const method = methods[methodIndex];
  let id = encodeURIComponent(name) + '/' + encodeURIComponent(url) + '/' + method;
  if (projectData) {
    id += '/' + projectData;
  }
  const obj = {
    _id: id,
    method: method,
    url: url,
    headers: 'x-test: true',
    created: LAST_TIME,
    updated: LAST_TIME,
    name: name
  };
  if (projectData) {
    obj.projectOrder = chance.integer({min: 0, max: 10});
    obj.legacyProject = projectData;
  }
  return obj;
};

DataGenerator.generateRequests = function(projects, size) {
  size = size || 25;
  const result = [];
  const projectsSize = projects.length - 1;
  for (let i = 0; i < size; i++) {
    const projectsIndex = chance.integer({min: 0, max: projectsSize});
    const projectData = projects[projectsIndex];
    result.push(DataGenerator.genRequestObject(projectData._id));
  }
  return result;
};

DataGenerator.generateProjects = function(size) {
  size = size || 5;
  const result = [];
  for (let i = 0; i < size; i++) {
    result.push(DataGenerator.createProjectObject());
  }
  return result;
};

DataGenerator.generateData = function(size) {
  const projects = DataGenerator.generateProjects();
  const requests = DataGenerator.generateRequests(projects, size);
  /* global PouchDB */
  const savedDb = new PouchDB('saved-requests');
  const projectsDb = new PouchDB('legacy-projects');
  return projectsDb.bulkDocs(projects)
  .then(() => savedDb.bulkDocs(requests));
};

DataGenerator.destroyData = function() {
  const savedDb = new PouchDB('saved-requests');
  const projectsDb = new PouchDB('legacy-projects');
  return savedDb.destroy().then(() => projectsDb.destroy());
};
