[].forEach.call(document.getElementsByClassName("iframe-lightbox-link"), function (el) {
    el.lightbox = new IframeLightbox(el);
  });

