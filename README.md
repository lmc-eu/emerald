# Emerald

[lmc-eu.github.io/emerald/](http://lmc-eu.github.io/emerald/)

Emerald is a responsive grid system written in LESS

* Responsive
* OOCSS
* BEM sytax
* Nestable
* Mobile-first
* Tablet-come-from
* Block-element based
* (= no floats, clears or rows)
* Configurable

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

### Internet Explorer 8
The grid is done with IE8 in mind and tested in it. However IE8 does not support min/max-width CSS3 media queries and **Emerald does not deal with by itself**. Use [scottjehl/Respond](http://github.com/scottjehl/Respond) or special stylesheet loaded by a conditional comment.

## The name
Please note that the name *Emerald* does not refer to the gemstone of that name but to a [diamond cut](http://www.lumeradiamonds.com/diamond-education/emerald-cut-diamond) *"originally developed for the cutting of emeralds."*

Does it really matter? No.

## Credit

This grid system was inspired by:

* [csswizardry/csswizardry-grids](http://github.com/csswizardry/csswizardry-grids)
* [twbs/bootstrap](http://github.com/twbs/bootstrap)
* [yui/pure](http://github.com/yui/pure)
