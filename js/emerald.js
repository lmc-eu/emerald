/*
 * A workaround mainly for Android Browser emulating the vw units
 */

/*
 * Viewport units support test
 * Based on Modernizr: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css/vwunit.js
 */
var supportsVw = function() {
    var $elem = $('<div />').appendTo('body').css('width', '50vw');

    var width = (parseInt(window.innerWidth,10) / 2),
        compStyle = parseInt((window.getComputedStyle ?
                    getComputedStyle($elem[0], null) :
                    $elem[0].currentStyle)['width'],10);

    $elem.remove();

    return width === compStyle;
}();

if (!supportsVw) {
    var columnsCount = 8
        columnWidth = 6,
        gutterWidth = 6,
        screenLap = 768,
        $style = $('<style />' ).appendTo('head'),
        emulateEmarald = function() {
            var width = parseInt(window.innerWidth,10);

            // Do not continue if not on mobile
            if (width > screenLap) {
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

            $style.html(style);
        };

    emulateEmarald();
    $(window).resize(emulateEmarald);
}
