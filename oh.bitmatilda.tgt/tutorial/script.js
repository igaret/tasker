$('.btn-down').on('click', function(event) {
  if(this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      900
    );
  }
});


$('.btn-left').on('click', function(event) {
  if(this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate(
      {
        scrollLeft: $(hash).offset().left
      },
      900
    );
  }
});
