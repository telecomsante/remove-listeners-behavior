/* global window */
(() => {
	window.TSPolymerBehaviors = window.TSPolymerBehaviors || {};

	/**
	 * `TSPolymerBehaviors.RemoveListenersBehavior` allows an element to remove all of its listeners automatically when the `detached` callback is executed.
	 *
	 * Polymer components that consume this behavior have to use their own `registerEventListener` method to add new listeners in order for them to be removed by the behavior's `detached` callback.
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
		 * Registers a new auto-removed listener on a target element.
		 *
		 * @param {Element} target The listener will be added to this element.
		 * @param {String} type The type of event to listen to.
		 * @param {Function} listener The listener to be added (and automatically removed on DOM detach).
		 */
		registerEventListener(target, type, listener) {
			target.addEventListener(type, listener);
			this._tsRegisteredEventListeners.push({target, type, listener});
		}
	};
})();
