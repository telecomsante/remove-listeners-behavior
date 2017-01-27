# \<remove-listeners-behavior\>

This Polymer behavior automatically removes event listeners registered through it when the component is detached from the DOM.

This is done at the expense of using an alternate registration method to add an event listener: `this.addEventListener`.

## Quick example

```html
<link rel="import" href="../remove-listeners-behavior/remove-listeners-behavior.html">

<dom-module id="example-element">
  <template>
    <button id="button">click</button>
  </template>
  <script>
    HTMLImports.whenReady(function () {
      Polymer({
        is: 'example-element',
        behaviors: [TSPolymerBehaviors.RemoveListenersBehavior],
        attached() {
          this.addEventListener(this.$.button1, 'click', () => console.log('click1'));
          this.addEventListener(this.$.button2, 'click', () => console.log('click2'));
          this.addEventListener(this.$.button3, 'click', () => console.log('click3'));
        }
        // No need to remove the listeners in the detached callback as this is done by the behavior
      });
    });
  </script>
</dom-module>
```

## Documentation and demo

Documentation and demo are available on the project's [Github pages](https://telecomsante.github.io/remove-listeners-behavior/).

## License

The source code of this project is licensed under the terms of the [MIT License](LICENSE.md).
