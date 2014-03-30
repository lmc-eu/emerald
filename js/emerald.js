/*
 * A workaround mainly for Android Browser emulating the vw units
 */

(function () {
  'use strict';
  /*jslint browser:true */

  /*
   * Legacy browsers (e.g. IE8) should be served the desktop version only
   * and therefore do not need to emulate mobile grid.
   */
  if (!Element.prototype.addEventListener) {
    return;
  }

  /*
   * Viewport units support test
   * Based on Modernizr: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css/vwunit.js
   */
  var supportsVw = (function () {
      var elem, width, compStyle, compWidth;
      elem = document.createElement("div");
      elem.style.width = '50vw';
      document.body.appendChild(elem);

      width = parseInt(window.innerWidth / 2, 10);
      compStyle = window.getComputedStyle ?
        window.getComputedStyle(elem, null) :
        elem.currentStyle;
      compWidth = parseInt(compStyle.width, 10);

      document.body.removeChild(elem);

      return width === compWidth;
    }()),

  /*
   * Define parameters and the emulating function
   */
    columnsCount = 8,
    columnWidth = 6,
    gutterWidth = 6,
    screenLap = 768,
    headStyle = document.createElement("style"),
    emulateEmerald = function () {
      var width, vw, style, i;
      width = parseInt(window.innerWidth, 10);

      // Do not continue if not on mobile
      if (width > screenLap) {
        headStyle.innerHTML = "";
        return;
      }

      vw = width / 100;
      style = '@media only screen and (max-width: ' +
      screenLap + 'px) {';

      // Set width for each column size
      for (i = 1; i <= columnsCount; i += 1) {
        style += '.e-' + i + '--palm {width: ' +
        ((columnWidth + gutterWidth) * i * vw) + 'px;}';

        style += '.e-push-' + i + '--palm {margin-left: ' +
        ((columnWidth + gutterWidth) * i * vw) + 'px;}';

        style += '.e-pull-' + i + '--palm {margin-right: ' +
        ((columnWidth + gutterWidth) * i * vw) + 'px;}';
      }

      style += '.grid {margin-right: ' +
      (-(gutterWidth / 2) * vw) + 'px;margin-left: ' +
      (-(gutterWidth / 2) * vw) + 'px;}';

      style += '.grid__item {padding-right: ' +
      ((gutterWidth / 2) * vw) + 'px;padding-left: ' +
      ((gutterWidth / 2) * vw) + 'px;}';

      style += '.wrapper {width: ' +
      ((columnWidth + gutterWidth) * columnsCount * vw) +
      'px;padding-right: ' + ((gutterWidth / 2) * vw) +
      'px;padding-left: ' + ((gutterWidth / 2) * vw) + 'px;}';

      style += '}';

      headStyle.innerHTML = style;
    };

  if (!supportsVw) {
    document.head.appendChild(headStyle);
    emulateEmerald();
    window.addEventListener('resize', emulateEmerald);
  }
}());
