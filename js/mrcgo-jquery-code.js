// jQuery code for interactions within static prototype
$(function () {
  $("#dialog-message").dialog({
    modal: true,
    buttons: {
      Ok: function () {
        $(this).dialog("close");
      }
    }
  });
});
// START LOGIN MODAL
$(function () {
  // this initializes the dialog (and uses some common options)
  $("#loginModal").dialog({
    autoOpen: false,
    width: '100%', // overcomes width:'auto' and maxWidth bug
    maxWidth: 500,
    height: 'auto',
    modal: true,
    fluid: true, //new option
    resizable: false,
    draggable: false
  });
  // LOGIN LINK ONCLICK HANDLER 
  $(".login-icon").click(function () {
    $("#loginModal").dialog("open");
    return false;
  });
  // SHOPING CART LINK ONCLICK HANDLER 
  $(".shopping-cart-icon").click(function () {
    $("#loginModal").dialog("open");
    return false;
  });
  // LOGIN LINK ONCLICK HANDLER (MOBILE)
  $(".mobile-login-link").click(function () {
    $("#loginModal").dialog("open");
    return false;
  });
});
// END LOGIN MODAL

// START LOGIN REDIRECT EXPERINCE
$('#login-button-cta').click(function (e) {
  e.preventDefault(); //will stop the link href to call the blog page

  setTimeout(function () {
    window.location.href = "./logged-in/index.html"; //will redirect to your blog page (an ex: blog.html)
  }, 2000); //will call the function after 2 secs.

});
// END LOGIN REDIRECT EXPERINCE

// START LOADING EXPERIENCE / SPINNER
setTimeout(function () {
  $(".loading-screen-container").hide()
}, 3000);
// END LOADING EXPERIENCE / SPINNER

// START FOOTER VIDEO MODAL
$(function () {
  // this initializes the dialog (and uses some common options)
  $("#footerVideoModal").dialog({
    autoOpen: false,
    //width: 600,
    width: '100%', // overcomes width:'auto' and maxWidth bug
    maxWidth: 800,
    height: '400',
    modal: true,
    fluid: true, //new option
    resizable: false,
    draggable: false
  });
  // SHOPING CART LINK ONCLICK HANDLER 
  $("#play-footer-video-modal").click(function () {
    $("#footerVideoModal").dialog("open");
    return false;
  });
});
// END FOOTER VIDEO MODAL

// START JS TO MAKE MODAL FLUID/RESPOSIVE
// on window resize run function
$(window).resize(function () {
  fluidDialog();
});

// catch dialog if opened within a viewport smaller than the dialog width
$(document).on("dialogopen", ".ui-dialog", function (event, ui) {
  fluidDialog();
});

function fluidDialog() {
  var $visible = $(".ui-dialog:visible");
  // each open dialog
  $visible.each(function () {
    var $this = $(this);
    var dialog = $this.find(".ui-dialog-content").data("ui-dialog");
    // if fluid option == true
    if (dialog.options.fluid) {
      var wWidth = $(window).width();
      // check window width against dialog width
      if (wWidth < (parseInt(dialog.options.maxWidth) + 50)) {
        // keep dialog from filling entire screen
        $this.css("max-width", "90%");
      } else {
        // fix maxWidth bug
        $this.css("max-width", dialog.options.maxWidth + "px");
      }
      //reposition dialog
      dialog.option("position", dialog.options.position);
    }
  });
}
// END JS TO MAKE MODAL FLUID/RESPOSIVE

// START MOBILE MENU ACCORDION FOR SUB-MENU ITEMS
$('.dropdown-menu').click(function (e) {
  e.stopPropagation(); // will stop the accordion from closing the menu
});
$(function () {
  $("#products-sub-item-accordion").accordion({
    collapsible: true,
    active: false,
    icons: false,
    heightStyle: "content"
  });
});
// END MOBILE MENU ACCORDION FOR SUB-MENU ITEMS

// START JS FOR SEARCH EXPAND/COLLAPSE COMPONENT
$(".search-header").click(function () {

  $header = $(this);
  //getting the next element
  $content = $header.next();
  $content.slideToggle(100, function () {
  });

});
// Toggle mobile search icon on click - Changes from magnifying glass to X icon to close
$("button#top-search-icon-mobile").click(function (e) {
  $('.search-header i.fa-solid.fa-magnifying-glass').not(this).toggleClass("fa-xmark");
  e.preventDefault();
})
// Close search widget on overlay click - Change icon back to magnifying glass
$("div.search-content:after").click(function (e) {
  $('.search-header i.fa-solid.fa-xmark').not(this).toggleClass("fa-magnifying-glass");
  e.preventDefault();
})
// END JS FOR SEARCH EXPAND/COLLAPSE COMPONENT

// START JS FOR AUTOCOMPLTE & SPOTLIGHT SEARCH
$(function () {
  var availableTags = [
    "Valves, Actuators & Accessories",
    "Fittings",
    "Flanges",
    "Gas Products and Polyethylene Pipe",
    "CInstrumentation & Measurement",
    "Steam Traps & Strainers",
    "General Supplies",
    "Gate Valves",
    "Globe Valves",
    "Check Valves",
    "Ball Valves",
    "Butterfly Valves",
    "Plug Valves",
    "Diaphragm Valves",
    "Solenoid Valves",
    "Relief Valves",
    "Motor Valves",
    "Diaphragms",
    "Manual Operators",
    "Packing Accessories",
    "Parts And Accessories",
    "Electrical Actuators"
  ];
  $(".mrcgo-search").autocomplete({
    source: availableTags
  });
});
// END JS FOR AUTOCOMPLTE & SPOTLIGHT SEARCH


