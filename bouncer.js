var Bouncer = {};
Bouncer.cantDragOut = function(){};
Bouncer.canDragOut = function(){};

(function($){
  $(document).on('dragstart', '[data-downloadurl]', function (e) {
    if (!!window.FileReader) {
      var elementBeingDragged = $(this);
      var dataTransfer = e.originalEvent.dataTransfer;
      if (this.dataset && this.dataset.downloadurl) {
        dataTransfer.setData('DownloadURL', this.dataset.downloadurl);
      }
      if (dataTransfer.items && dataTransfer.items.length > 0) {
        Bouncer.canDragOut();
      } else {
        Bouncer.cantDragOut();
      }
    };
  });
})(jQuery);
