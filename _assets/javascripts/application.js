//= require jquery.min
//= require bootstrap.min
//= require jquery.slides.min

$(function() {
  // detach navbar on scrollling downnnn
  $(window).scroll(function () {
    if($(this).scrollTop() > 0) {
      $('.navbar').addClass('detach');
    } else if ($(this).scrollTop() === 0) {
      $('.navbar').removeClass('detach');
    }
  });
  // highlight current page
  var currentPage = $("body").data("current-page");
  if (currentPage) {
      $("a[data-page-id='" + currentPage + "']").addClass("active");
  }

  // Parse all emails and make them clickable again
  $('a.contact').each(function(i, link) {
    link = $(link);
    var text         = link.text(),
        textReversed = [],
        i;

    for (i=text.length; i--;) {
      textReversed.push(text[i]);
    }

    link.attr('href', 'mailto:' + textReversed.join(''));
  });


  // Disable tel: links on browsers, because they simply break
  $('a.tel').on('click', function(event) {
    if (!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
      event.preventDefault();
    }
  });
});
