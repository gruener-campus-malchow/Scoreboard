# jQuery Countdown Timer Plugin

This is a jQuery plugin that allows to display a ticking timer.

## Usage

You can bind the jQuery timer plugin to every element you want to. Specify a duration and a unit that should be shown
by the ticking timer. Supported units are hours <code>'h'</code>, minutes <code>'m'</code> and seconds <code>'s'</code>.

*HTML*

```html
<span id="my-timer"></span>
```

*JS*

```js
$('#my-timer').timer({duration: 7, unit: 'm'});
```

## Integration

The files `timer.css` and `timer.js` must be included in your project. Further [jQuery](http://jquery.com/) is needed
as dependency.

```html
<!-- CSS -->
<link rel="stylesheet" href="timer.css"/>

<!-- JS -->
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="timer.js"></script>
```

Choose a download possibility you like:

* [Download the latest release](https://github.com/murygina/jquery-timer-plugin/releases/tag/v0.2.0)
* Download the files `timer.css` and `timer.js` directly from the GitHub project page
* Clone the repository `git clone https://github.com/murygina/jquery-timer-plugin.git`
* Install with [Bower](http://bower.io/) `bower install jquery-timer-plugin`

## Development

1. Clone the repository `git clone https://github.com/murygina/jquery-timer-plugin.git`
2. Ensure you have installed [Grunt](http://gruntjs.com/), [Bower](http://bower.io/), [NodeJS](https://nodejs.org/), [NPM](https://www.npmjs.com/) properly
3. Run `npm install`
4. Run `bower install`
5. Run `grunt` to see the documentation / example page

