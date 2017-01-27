/* global window */
(() => {
	window.TSPolymerBehaviors = window.TSPolymerBehaviors || {};

	/**
	 * `TSPolymerBehaviors.RemoveListenersBehavior` allows an element to remove all its listeners automatically when the `detached` callback is executed.
	 *
	 * Polymer components that consume this behavior has to use the `addEventListener` method to add new listeners in order for them to be removed on `detached`.
	 *
	 * @demo demo/index.html
	 * @polymerBehavior TSPolymerBehaviors.RemoveListenersBehavior
	 */
	window.TSPolymerBehaviors.RemoveListenersBehavior = {
		ready() {
			this._tsRegisteredEventListeners = [];
		},

		detached() {
			this._tsRegisteredEventListeners.forEach(({target, type, listener}) => target.removeEventListener(type, listener));
			this._tsRegisteredEventListeners = [];
		},

		/**
		 * Adds a new listener on a target element.
		 *
		 * @param {Element} target The listener will be added to this element.
		 * @param {String} type The type of event to listen to.
		 * @param {Function} listener The listener to be added (and automatically removed on DOM detach).
		 */
		addEventListener(target, type, listener) {
			target.addEventListener(type, listener);
			this._tsRegisteredEventListeners.push({target, type, listener});
		}
	};
})();
