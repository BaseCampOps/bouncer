$(document).on('dragstart', '[data-downloadurl]', function (e) {
  console.log('Started dragging');
  if (!!window.FileReader) {
    var elementBeingDragged = $(this);
    console.log('Dataset', this.dataset.downloadurl);
    console.log('Event', e);
    if (this.dataset) {
      e.originalEvent.dataTransfer.setData('DownloadURL', this.dataset.downloadurl);
    }
  };
});
