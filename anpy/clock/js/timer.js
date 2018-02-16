var tick = function ($el, duration) {
  'use strict';

  $el.attr('data-duration', duration);
  $el.find('.duration').html(duration);

  if (duration > 60) {
    $el.addClass('full');
  }

  if (duration < -60) {
    $el.addClass('full negative');
  }

};

(function ($) {
  'use strict';

  $.fn.timer = function (options) {

    var settings = $.extend({

      duration: 60,
      unit: 's'
    }, options);

    var updateEverySecond = 1000;
    var updateEveryMinute = 60 * 1000;

    return this.each(function () {

      var duration = settings.duration;
      var unit = settings.unit;

      var updateInterval;

      if (unit === 'm') {
        updateInterval = updateEveryMinute;
      } else if (unit === 's') {
        updateInterval = updateEverySecond;
      } else if (unit === 'h') {
        // if provided e.g. 2 hours convert it to 120 minutes
        unit = 'm';
        duration = duration * 60;
        updateInterval = updateEveryMinute;
      } else {
        throw 'The provided unit "' + unit + '" is unsupported! Supported units are "s", "m" and "h".';
      }

      var $$ = $(this);

      $$.html('<div class="timer-bg"><span class="duration"></span><small class="unit"></small></div>' +
        '<div class="timer-half-container right"><div class="timer-half right"></div></div>' +
        '<div class="timer-half-container left"><div class="timer-half left"></div></div>');

      $$.addClass('timer');
      $$.find('.unit').html(unit);

      // start ticking
      tick($$, duration);

      /* global setInterval */
      setInterval(function () {
        tick($$, duration);
        duration--;
      }, updateInterval);

    });

  };
}(jQuery));

