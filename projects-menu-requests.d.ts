/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   projects-menu-requests.html
 */

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../http-method-label/http-method-label.d.ts" />
/// <reference path="../legacyproject-related-requests/legacyproject-related-requests.d.ts" />
/// <reference path="../dom-reorderer/dom-reorderer.d.ts" />
/// <reference path="../paper-toast/paper-toast.d.ts" />
/// <reference path="../paper-progress/paper-progress.d.ts" />
/// <reference path="../paper-item/paper-icon-item.d.ts" />
/// <reference path="../paper-item/paper-item-body.d.ts" />
/// <reference path="../paper-ripple/paper-ripple.d.ts" />

declare namespace UiElements {

  /**
   * A list of requests related to a project in the ARC main menu.
   *
   * The element requires the `arc-models/project-model` element to be present
   * in the DOM to update items order.
   *
   * ### Example
   *
   * ```
   * <projects-menu-requests
   *  project-id="some-id"
   *  selected-request="id-of-selected"></projects-menu-requests>
   * ```
   *
   * ### Styling
   * `<saved-menu>` provides the following custom properties and mixins for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--projects-menu-requests` | Mixin applied to the element | `{}`
   * `--projects-menu-requests-background-color` | Background color of the menu | `#f7f7f7`
   * `--projects-menu-requests-selected-method-label-background-color` | Background color of the POST method label when the item is focused | `#fff`
   * `--projects-menu-requests-list-item` | Mixin applied to each list item | `{}`
   * `--projects-menu-requests-selected-item-background-color` | Background color of the selected list item | `#FF9800`
   * `--projects-menu-requests-selected-item-color` | Color of the selected list item | `#fff`
   * `--projects-menu-requests-name-label` | Mixin applied to the name label | `{}`
   * `--warning-primary-color` | Main color of the warning messages | `#FF7043`
   * `--warning-contrast-color` | Contrast color for the warning color | `#fff`
   * `--error-toast` | Mixin applied to the error toast | `{}`
   */
  class ProjectsMenuRequests extends Polymer.Element {

    /**
     * ID of the project.
     */
    projectId: string|null|undefined;

    /**
     * True if the element currently is querying the datastore for the data
     */
    querying: boolean|null|undefined;

    /**
     * List of requests
     */
    items: any[]|null|undefined;

    /**
     * List of data returned from the datastore. It is a list of IDs only
     */
    queryItems: any[]|null|undefined;

    /**
     * Computed value, true if the `items` property has values.
     */
    readonly hasItems: boolean|null|undefined;

    /**
     * Computed value. True if query ended and there's no results.
     */
    readonly dataUnavailable: boolean|null|undefined;

    /**
     * Currently selected request ID
     */
    selectedRequest: string|null|undefined;

    /**
     * Queries for the data when opened state or `projectId` changes
     */
    _queryData(projectId: any): void;

    /**
     * Computes class name for the HTML element representing a saved item.
     */
    _computeItemClass(_id: any, selectedRequest: any): any;

    /**
     * Computes value for the `hasItems` property.
     */
    _computeHasItems(length: any): any;

    /**
     * Computes value for the `dataUnavailable` property.
     */
    _computeDataUnavailable(hasItems: any, querying: any): any;

    /**
     * Items from model query changed and can be processed.
     */
    _queryItemsChanged(record: any): void;

    /**
     * Transforms the `id` into the basic request model.
     */
    _idToModel(item: any): any;

    /**
     * Called when the user clicks on an item in the UI
     */
    _openRequest(e: any): void;

    /**
     * Handler for the list reorder event. Updates items order in the datastore.
     */
    _onReorder(): void;

    /**
     * Updates requests in bulk opeartion.
     */
    _updateBulk(items: any): any;

    /**
     * Sends the `request-object-changed` custom event for each request on the list.
     *
     * @param item Request object.
     * @returns Promise resolved when the request object is updated.
     */
    _updateRequest(item: object|null): Promise<any>|null;
  }
}

interface HTMLElementTagNameMap {
  "projects-menu-requests": UiElements.ProjectsMenuRequests;
}