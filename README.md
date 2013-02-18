### Easily make files draggable to the desktop

Set a data-download-url attribute on any element and if dragged out it will allow dragging the file to a folder or desktop

### How to Use

Just include the bouncer.js file and add a data-downloadurl attribute to the element you want to add drag abilities to.

Example:

`<a href="http://yourdomain.com/About.pdf" data-downloadurl="application/pdf:About.pdf:http://yourdomain.com/About.pdf">Drag me out</a>`

### Gotchas

- Only works for files *hosted on the same domain*
- *Works in Chrome*, but not Safari (maybe in FF. Not tested yet)
- *Requires jQuery* to automatically attack event to elements with the data-downloadurl attribute



### Credits

https://gist.github.com/gona/974987

http://www.thecssninja.com/javascript/gmail-dragout