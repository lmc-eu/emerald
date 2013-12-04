# Emerald v1.0.0-rc1

[lmc-eu.github.io/emerald/](http://lmc-eu.github.io/emerald/)

Emerald is a pragmatic responsive grid system in LESS 

* Responsive
* OOCSS
* BEM sytax
* Nestable
* Mobile-first
* Tablet-come-from
* Block-element based
* (= no floats, clears or rows)
* Configurable
* 1.2 kB (minified and gzipped)

## Warning
**This project is not yet ready for a (general) production use!**

In compliance with [SemVer](http://semver.org/), `v0.x.y` is for initial development. *"Anything may change at any time."*.
Expect more generalization and documentation in `v1.0.0`.

## How to use
Install via *Bower*

`$ bower install emerald`

Either include source *LESS* files into your project (recommended) or use compiled minified *CSS*.

## Browser support

Emerald grid system is tested in the latest versions of the major browsers on the major desktop and mobile platforms.

### Support for `vw` units
Android browser does not support `vw` units. Load `emerald.js` at the
bootom of the page:

```html
<script src="js/emerald.js"></script>
```

### Internet Explorer 8
Legacy browser are supported by [grunt-legacssy](https://github.com/robinpokorny/grunt-legacssy). Load the grid using:

```css
<!--[if lte IE 8]>     <link rel="stylesheet" href="css/emerald-legacy.min.css"> <![endif]-->
<!--[if gt IE 8]><!--> <link rel="stylesheet" href="css/emerald.min.css"> <!--<![endif]-->
```

## The name
Please note that the name *Emerald* does not refer to the gemstone of that name but to a [diamond cut](http://www.lumeradiamonds.com/diamond-education/emerald-cut-diamond) *"originally developed for the cutting of emeralds."*

Does it really matter? No.

## Credit

This grid system was inspired by:

* [csswizardry/csswizardry-grids](http://github.com/csswizardry/csswizardry-grids)
* [twbs/bootstrap](http://github.com/twbs/bootstrap)
* [yui/pure](http://github.com/yui/pure)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/lmc-eu/emerald/trend.png)](https://bitdeli.com/free "Bitdeli Badge") [![Dependency Status](https://gemnasium.com/lmc-eu/emerald.png)](https://gemnasium.com/lmc-eu/emerald)

