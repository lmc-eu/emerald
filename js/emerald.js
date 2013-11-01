/*
 * A workaround mainly for Android Browser emulating the vw units
 */

/*
 * Viewport units support test
 * Based on Modernizr: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css/vwunit.js
 */
var supportsVw = function() {
    var elem = document.createElement("div");
    elem.style.width = '50vw';
    document.body.appendChild(elem);

    var width = parseInt(window.innerWidth / 2,10),
        compStyle = parseInt((window.getComputedStyle ?
                    getComputedStyle(elem, null) :
                    elem.currentStyle)['width'],10);

    document.body.removeChild(elem);

    return width === compStyle;
}();

/* 
 * Define parameters and the emulating function
 */
var columnsCount = 8
    columnWidth = 6,
    gutterWidth = 6,
    screenLap = 768,
    headStyle = document.createElement("style"),
    emulateEmerald = function() {
        var width = parseInt(window.innerWidth,10);

        // Do not continue if not on mobile
        if (width > screenLap) {
            headStyle.innerHTML = "";
            return;
        }

        var vw = width / 100,
            style = '@media only screen and (max-width: ' +
                screenLap + 'px) {';

        // Set width for each column size
        for (var i = 1; i <= columnsCount; i++) {
            style += '.e-' + i + '--palm {width: ' +
                ((columnWidth + gutterWidth) * i * vw) + 'px;}';

            style += '.e-push-' + i + '--palm {margin-left: ' +
                ((columnWidth + gutterWidth) * i * vw) + 'px;}';

            style += '.e-pull-' + i + '--palm {margin-right: ' +
                ((columnWidth + gutterWidth) * i * vw) + 'px;}';
        }

        style += '.grid {margin-right: ' +
            (- (gutterWidth / 2) * vw) + 'px;margin-left: ' +
            (- (gutterWidth / 2) * vw) + 'px;}';

        style += '.grid__item {padding-right: ' +
            ((gutterWidth / 2) * vw) + 'px;padding-left: ' +
            ((gutterWidth / 2) * vw) + 'px;}';

        style += '.wrapper {width: ' +
            ((columnWidth + gutterWidth) * columnsCount * vw) +
            'px;padding-right: ' + ((gutterWidth / 2) * vw) +
            'px;padding-left: ' + ((gutterWidth / 2) * vw) + 'px;}';

        style += '}';

        console.log(style);

        headStyle.innerHTML = style;
    };

if (!supportsVw) {
    document.body.appendChild(headStyle);
    emulateEmerald();
    window.onresize = emulateEmerald;
}
