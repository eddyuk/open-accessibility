"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function ($) {
  var locale = {
    "he": {
      "zoom-out": "הקטן",
      "zoom-in": "הגדל",
      "invert": "היפוך צבעים",
      "bigger-mouse": "עכבר גדול",
      "brightness": "בהירות",
      "contrast": "ניגודיות",
      "grayscale": "גווני אפור",
      "reset": "ביטול שינויים"
    },
    "en": {
      "zoom-out": "Zoom Out",
      "zoom-in": "Zoom In",
      "invert": "Invert",
      "bigger-cursor": "Bigger Cursor",
      "brightness": "Brightness",
      "contrast": "Contrast",
      "grayscale": "Grayscale",
      "reset": "Undo Changes"
    }
  };
  var TEMPLATE = "<div class=\"open-accessibility-cursor-workaround\"></div>\n<div class=\"open-accessibility open-accessibility-collapsed\">\n    <div class=\"open-accessibility-container\">\n\n        <div class=\"open-accessibility-expand-button\">\n            <?xml version=\"1.0\" encoding=\"utf-8\"?>\n<svg viewBox=\"0 2 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    <circle cx=\"12\" cy=\"4\" r=\"2\"/>\n    <path d=\"M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z\"/>\n</svg>\n        </div>\n\n        <div class=\"open-accessibility-menu\">\n            <div class=\"open-accessibility-close-button\">\n                <?xml version=\"1.0\" encoding=\"utf-8\"?>\n<svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n    viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\" xml:space=\"preserve\">\n<path fill=\"#000000\" d=\"M22,20l5.9,5.9l-2,2L20,22l-5.9,5.9l-2-2L18,20l-5.9-5.9l2-2L20,18l5.9-5.9l2,2L22,20z\"/>\n</svg>\n                \n            </div>\n\n            <div class=\"open-accessibility-menu-button open-accessibility-zoom-out-button\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 151 106\"><title>zoom-out</title><g id=\"Exploded_Icons\" data-name=\"Exploded Icons\"><path id=\"_Compound_Path_\" data-name=\"&lt;Compound Path&gt;\" d=\"M83.14,50.55H81.38l-.62-.6a14.44,14.44,0,1,0-1.56,1.56l.6.62v1.75L90.91,65l3.31-3.31Zm-13.34,0a10,10,0,1,1,10-10A10,10,0,0,1,69.8,50.55Zm1.11-11.11H64.25v2.22H75.36V39.44Z\"/></g></svg>\n                <span data-lang=\"zoom-out\">\u05D4\u05E7\u05D8\u05DF</span>\n            </div>\n\n            <div class=\"open-accessibility-menu-button open-accessibility-zoom-in-button\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 151 106\"><title>zoom-in</title><g id=\"Exploded_Icons\" data-name=\"Exploded Icons\"><path id=\"_Compound_Path_\" data-name=\"&lt;Compound Path&gt;\" d=\"M84.53,50.55H82.77l-.62-.6a14.33,14.33,0,1,0-1.55,1.56l.6.62v1.75L92.31,65l3.31-3.31Zm-13.33,0a10,10,0,1,1,10-10A10,10,0,0,1,71.2,50.55Zm5.55-8.89H72.31v4.45H70.08V41.66H65.64V39.44h4.44V35h2.23v4.45h4.44Z\"/></g></svg>\n                <span data-lang=\"zoom-in\">\u05D4\u05D2\u05D3\u05DC</span>\n            </div>\n\n            <div class=\"open-accessibility-menu-button open-accessibility-invert-button\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 151 106\"><title>invert</title><g id=\"Exploded_Icons\" data-name=\"Exploded Icons\"><path id=\"_Compound_Path_\" data-name=\"&lt;Compound Path&gt;\" d=\"M86.65,37.45,75.54,26.34,64.42,37.45a15.71,15.71,0,1,0,22.23,0ZM75.54,60.35a11.78,11.78,0,0,1-8.33-20.11l8.33-8.35Z\"/></g></svg>                \n                <span data-lang=\"invert\">\u05D4\u05D9\u05E4\u05D5\u05DA \u05E6\u05D1\u05E2\u05D9\u05DD</span>\n            </div>\n\n            <div class=\"open-accessibility-menu-button open-accessibility-cursor-button\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 151 106\"><title>cursor</title><g id=\"Exploded_Icons\" data-name=\"Exploded Icons\"><path id=\"_Compound_Path_\" data-name=\"&lt;Compound Path&gt;\" d=\"M83,47.53l-.07-.07V46H81.52L81.45,46V44.55H80L80,44.48V43.06H78.55L78.48,43V41.58H77.06L77,41.51V40.09H75.57L75.5,40V38.6H74.08L74,38.53V37.11H72.59L72.52,37V35.62H71.11L71,35.55V34.14H69.62l-.07-.07V32.65H68.13l-.07-.07V31.16H66.57V56.45h3V55l.07-.07H71V53.55l.07-.07h1.41V52.06l.07-.07h1.35l.07.07V55h1.42l.07.07v2.9h1.42L77,58v1.42h3V58l.07-.07h1.42V55H80L80,54.9V52H78.55l-.07-.07V50.5h6v-3ZM78.48,49H77v3H78.4l.08.07V55h1.41L80,55v2.83l-.07.07H77.06L77,57.87V55H75.57l-.07-.07V52H74.08L74,51.92V50.5H72.52v1.42l-.07.07H71v1.42l-.07.07H69.55V54.9l-.07.07H68.06V34.14h1.42l.07.07v1.41H71l.07.07v1.42h1.41l.07.07V38.6h1.42l.07.07v1.42h1.42l.07.07v1.42h1.42l.07.07v1.41H78.4l.08.07v1.42h1.41l.07.07V46h1.42l.07.07v1.42h1.42l.07.07V49Z\"/></g></svg>\n                <span data-lang=\"bigger-cursor\">\u05E2\u05DB\u05D1\u05E8 \u05D2\u05D3\u05D5\u05DC</span>\n            </div>\n\n            <div class=\"open-accessibility-menu-button open-accessibility-brightness-button\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 151 106\"><title>brightness</title><g id=\"Exploded_Icons\" data-name=\"Exploded Icons\"><path id=\"_Compound_Path_\" data-name=\"&lt;Compound Path&gt;\" d=\"M88.29,50.51l5.22-5.21-5.22-5.22v-7.4H80.9l-5.22-5.21-5.22,5.21H63.07v7.4L57.85,45.3l5.22,5.21v7.4h7.39l5.22,5.22,5.22-5.22h7.39ZM75.68,54.75V35.84a9.46,9.46,0,1,1,0,18.91Z\"/></g></svg>                \n                <span data-lang=\"brightness\">\u05D1\u05D4\u05D9\u05E8\u05D5\u05EA</span>\n            </div>\n\n            <div class=\"open-accessibility-menu-button open-accessibility-contrast-button\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 151 106\"><title>contrast</title><g id=\"Exploded_Icons\" data-name=\"Exploded Icons\"><path id=\"_Compound_Path_\" data-name=\"&lt;Compound Path&gt;\" d=\"M71.85,28.87H62.73a3.66,3.66,0,0,0-3.65,3.65V58.07a3.66,3.66,0,0,0,3.65,3.65h9.12v3.65H75.5V25.22H71.85Zm0,27.37H62.73L71.85,45.3ZM88.27,28.87H79.15v3.65h9.12V56.24L79.15,45.3V61.72h9.12a3.66,3.66,0,0,0,3.65-3.65V32.52A3.66,3.66,0,0,0,88.27,28.87Z\"/></g></svg>\n                <span data-lang=\"contrast\">\u05E0\u05D9\u05D2\u05D5\u05D3\u05D9\u05D5\u05EA</span>\n            </div>\n\n            <div class=\"open-accessibility-menu-button open-accessibility-monochrome-button\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 151 106\"><title>monochrome</title><g id=\"Exploded_Icons\" data-name=\"Exploded Icons\"><path id=\"_Compound_Path_\" data-name=\"&lt;Compound Path&gt;\" d=\"M90.28,32.87H84.44l-3.28-3.65h-11l-3.29,3.65H61.08a3.66,3.66,0,0,0-3.65,3.65V58.43a3.66,3.66,0,0,0,3.65,3.65h29.2a3.66,3.66,0,0,0,3.65-3.65V36.52A3.66,3.66,0,0,0,90.28,32.87Zm0,25.56H75.68V56.6a9.13,9.13,0,0,1,0-18.25V36.52h14.6Zm-5.47-11a9,9,0,0,0-9.13-9.12v3.28a5.84,5.84,0,0,1,0,11.68V56.6A9,9,0,0,0,84.81,47.47Zm-15,0a5.77,5.77,0,0,0,5.84,5.84V41.63A5.77,5.77,0,0,0,69.84,47.47Z\"/></g></svg>\n                <span data-lang=\"grayscale\">\u05D2\u05D5\u05D5\u05E0\u05D9 \u05D0\u05E4\u05D5\u05E8</span>\n            </div>\n\n            <div class=\"open-accessibility-menu-button open-accessibility-reset-button\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 151 106\"><title>revert</title><g id=\"Exploded_Icons\" data-name=\"Exploded Icons\"><path id=\"_Compound_Path_\" data-name=\"&lt;Compound Path&gt;\" d=\"M75.26,38.68A17,17,0,0,0,64,42.91l-5.86-5.86V51.7H72.81l-5.89-5.89A13,13,0,0,1,87.63,51.7l3.86-1.27A17.12,17.12,0,0,0,75.26,38.68Z\"/></g></svg>\n                <span data-lang=\"reset\">\u05D1\u05D8\u05DC \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD</span>\n            </div>\n\n\n            <div class=\"open-accessibility-menu-footer\">\n                powered with \uD83D\uDC97 by <a href=\"https://github.com/jossef/open-accessibility\" target=\"_blank\">Open Accessibility</a>\n            </div>\n\n\n        </div>\n\n\n    </div>\n</div>";
  var LOCAL_STORAGE_OPTIONS_KEY = 'open-accessibility-config';
  var UNITS = ['px', 'cm', 'em', 'ex', 'in', 'mm', 'pc', 'pt', 'vh', 'vw', 'vmin'];
  function getUnit(fontSize) {
    fontSize = fontSize || '';
    return UNITS.filter(function (unit) {
      return fontSize.match(new RegExp(unit + '$', 'gi'));
    }).pop();
  }
  function isGoogleChrome() {
    var isChromium = window.chrome;
    var winNav = window.navigator;
    var vendorName = winNav.vendor;
    var isOpera = winNav.userAgent.indexOf("OPR") > -1;
    var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
    return isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false;
  }
  function isMobileBrowser() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var product = userAgent.substr(0, 4);
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(product);
  }
  function getUserOptions() {
    var data;
    try {
      data = localStorage.getItem(LOCAL_STORAGE_OPTIONS_KEY);
      data = JSON.parse(data);
    } catch (e) {}
    if (data && _typeof(data) === "object") {
      return data;
    } else {
      return {};
    }
  }
  function setUserOptions(options) {
    localStorage.setItem(LOCAL_STORAGE_OPTIONS_KEY, JSON.stringify(options));
  }
  function applyTextZoom(selector, zoom, targetElement) {
    // If targetElement is provided, limit the scope to elements within that target
    var elements = targetElement ? $(selector, targetElement).not('.open-accessibility *') : $(selector).not('.open-accessibility *'); // To avoid messing up the menu bar itself

    elements.each(function () {
      var element = $(this);
      var originalFontSize = element.attr('data-open-accessibility-text-original');
      if (!originalFontSize) {
        originalFontSize = element.css('font-size');
        element.attr('data-open-accessibility-text-original', originalFontSize);
      }
      var units = getUnit(originalFontSize) || '';
      var fontSize = parseFloat(originalFontSize) * zoom;
      element.css('font-size', fontSize + units);
    });
  }
  function translateTheme(lang) {
    var menu = $('.open-accessibility-menu');
    Object.keys(lang).forEach(function (key, index) {
      menu.find('[data-lang="' + key + '"]').text(lang[key]);
    });
  }
  function getLanguages(langs, map) {
    var res = {};
    langs.forEach(function (key) {
      var value = map && map[key] || locale[key];
      if ($.isPlainObject(value)) {
        res[key] = value;
      } else {
        console.error(key + 'language does not set!');
      }
    });
    return res;
  }
  function getIconClass(size) {
    var prefix = 'open-accessibility-size-';
    return prefix + size;
  }
  $.fn.openAccessibility = function (customOptions) {
    var element = this;
    customOptions = customOptions || {};
    var defaultOptions = {
      isMenuOpened: false,
      highlightedLinks: false,
      isMobileEnabled: true,
      grayscale: 0,
      brightness: 100,
      contrast: 100,
      maxZoomLevel: 3,
      minZoomLevel: 0.5,
      zoomStep: 0.2,
      zoom: 1,
      cursor: false,
      textSelector: '.open-accessibility-text',
      invert: false,
      localization: ['he'],
      iconSize: 'm',
      // supported sizes are s(mall), m(edium), l(arge)
      targetElement: null // Target element to apply accessibility features (defaults to element if null)
    };
    var userOptions = getUserOptions();
    var initialOptions = $.extend({}, defaultOptions, customOptions);
    var options = $.extend({}, initialOptions, userOptions, customOptions);
    if (!options.isMobileEnabled && isMobileBrowser()) {
      console.log('disabling accessibility plugin due to mobile browser');
      return;
    }

    // -------------

    element.prepend(TEMPLATE);
    var html = $('html');
    var body = $('body');
    // Get the target element (from options or default to the element the plugin was called on)
    var targetElement = customOptions.targetElement || element;
    var container = $(".open-accessibility");
    var menu = $(".open-accessibility-menu");
    var expandButton = $(".open-accessibility-expand-button");
    var closeButton = $(".open-accessibility-close-button");
    var invertButton = $(".open-accessibility-invert-button");
    var cursorButton = $(".open-accessibility-cursor-button");
    var zoomInButton = $(".open-accessibility-zoom-in-button");
    var zoomOutButton = $(".open-accessibility-zoom-out-button");
    var brightnessButton = $(".open-accessibility-brightness-button");
    var monochromeButton = $(".open-accessibility-monochrome-button");
    var contrastButton = $(".open-accessibility-contrast-button");
    var resetButton = $(".open-accessibility-reset-button");
    var cursorWorkaround = $(".open-accessibility-cursor-workaround");

    // Set icon size
    container.addClass(getIconClass(options.iconSize));

    // Set Langauges
    var languages = getLanguages(options.localization, options.localizationMap);
    translateTheme(languages[Object.keys(languages)[0]]);
    html.addClass('open-accessibility-zoom');

    // -------------
    // Brightness
    brightnessButton.click(function () {
      options.brightness += 50;
      if (options.brightness > 150) {
        options.brightness = 50;
      }
      apply();
    });

    // -------------
    // Contrast

    contrastButton.click(function () {
      options.contrast += 50;
      if (options.contrast > 150) {
        options.contrast = 50;
      }
      apply();
    });

    // -------------
    // Grayscale

    monochromeButton.click(function () {
      options.grayscale += 100;
      if (options.grayscale > 100) {
        options.grayscale = 0;
      }
      apply();
    });

    // -------------
    // Reset

    resetButton.click(function () {
      options = $.extend({}, initialOptions);
      options.isMenuOpened = false;
      apply();
    });

    // -------------
    // Zoom

    zoomInButton.click(function () {
      options.zoom = Math.min(options.maxZoomLevel, options.zoom + options.zoomStep);
      apply();
    });
    zoomOutButton.click(function () {
      options.zoom = Math.max(options.minZoomLevel, options.zoom - options.zoomStep);
      apply();
    });

    // -------------
    // Invert

    invertButton.click(function () {
      options.invert = !options.invert;
      apply();
    });

    // -------------
    // Cursor

    cursorButton.click(function () {
      options.cursor = !options.cursor;
      apply();
    });

    // -------------
    // Menu

    expandButton.click(function () {
      options.isMenuOpened = true;
      apply();
    });
    closeButton.click(function () {
      options.isMenuOpened = false;
      apply();
    });

    // Click outside of the menu -> close
    $(document).click(function (event) {
      if (!$(event.target).closest('.open-accessibility').length) {
        if (options.isMenuOpened) {
          options.isMenuOpened = false;
          apply();
        }
      }
    });
    expandButton.hide();
    menu.hide();
    if (customOptions.isMenuOpened) {
      options.isMenuOpened = true;
      menu.show();
      expandButton.hide();
    } else {
      options.isMenuOpened = false;
    }

    // -------------
    // Mouse cursor workaround

    cursorWorkaround.hide();
    var googleChrome = isGoogleChrome();
    if (!googleChrome) {
      $(document).on('mousemove', function (e) {
        if (!options.cursor) {
          return;
        }
        cursorWorkaround.css({
          left: e.pageX / options.zoom,
          top: e.pageY / options.zoom
        });
      });
    }

    // Store the target element in options for later use
    options.targetElement = targetElement;

    // Initialize
    applyTextZoom(options.textSelector, 1, options.targetElement);
    apply();
    function apply() {
      // ----------------

      if (options.isMenuOpened) {
        expandButton.fadeOut(300);
        menu.fadeIn(300);
        container.removeClass("open-accessibility-collapsed");
        container.addClass("open-accessibility-expanded");
      } else {
        expandButton.fadeIn(300);
        menu.fadeOut(300);
        container.removeClass("open-accessibility-expanded");
        container.addClass("open-accessibility-collapsed");
      }

      // ----------------
      // Filters

      var filters = [];
      if (options.invert) {
        filters.push('invert(1)');
      }
      filters.push('contrast(' + options.contrast + '%)');
      filters.push('brightness(' + options.brightness + '%)');
      filters.push('grayscale(' + options.grayscale + '%)');
      var filterValue = filters.join(' ');
      options.targetElement.css('filter', filterValue);
      options.targetElement.css('-ms-filter', filterValue);
      options.targetElement.css('-moz-filter', filterValue);
      options.targetElement.css('-webkit-filter', filterValue);
      options.targetElement.css('-o-filter', filterValue);

      // ----------
      // Zoom
      applyTextZoom(options.textSelector, options.zoom, options.targetElement);

      //$('.open-accessibility-zoom').css('transform', 'scale(' + options.zoom + ')');

      // ----------
      // Cursor

      if (options.cursor) {
        html.addClass('open-accessibility-cursor');
        if (!googleChrome) {
          cursorWorkaround.show();
        }
      } else {
        html.removeClass('open-accessibility-cursor');
        if (!googleChrome) {
          cursorWorkaround.hide();
        }
      }
      setUserOptions(options);
    }
  };
})(jQuery || $);