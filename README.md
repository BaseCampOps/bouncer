### Easily make files draggable to the desktop

_Requires jQuery_

Set a data-download-url attribute on any element and if dragged out it will allow dragging the file to a folder or desktop

### How to Use

Just include the bouncer.js file and add a data-downloadurl attribute to the element you want to add drag abilities to.

Example:

`<a href="http://yourdomain.com/About.pdf" data-downloadurl="application/pdf:About.pdf:http://yourdomain.com/About.pdf">Drag me out</a>`

### What about when I can't drag out?

In your JS file after including the bouncer.js file

`Bouncer.cantDragOut = function() {alert("I don't support dragging out!")};`

This function will automatically be called if the browser does not support dragging out and a user attempts to drag an element
with a "data-downloadurl" attribute.

### Planned improvements

- Emit an event when a user attempt to drag out, but the browser doesn't support it. Allows more find grained control.
- Only emit the cantDragtOut event when the user drags the file *outside the browser window*

### Gotchas

- Only works for files *hosted on the same domain*
- *Works in Chrome*, but not Safari (maybe in FF. Not tested yet)
- *Requires jQuery* to automatically setup drag out handler on elements with the data-downloadurl attribute



### Credits

https://gist.github.com/gona/974987

http://www.thecssninja.com/javascript/gmail-dragout
