// work in progress - needs some refactoring and will drop JQuery i promise :)
$(function () {
    var instance = $(".hs__wrapper");
    $.each(instance, function (key, value) {
        var arrows = $(instance[key]).find(".arrow"),
            prevArrow = arrows.filter(".arrow-prev"),
            nextArrow = arrows.filter(".arrow-next"),
            box = $(instance[key]).find(".hs"),
            x = 0,
            mx = 0,
            maxScrollWidth =
            box[0].scrollWidth - box[0].clientWidth / 2 - box.width() / 2;

        $(arrows).on("click", function () {
            if ($(this).hasClass("arrow-next")) {
                x = box.width() / 2 + box.scrollLeft() - 10;
                box.animate({
                    scrollLeft: x
                });
            } else {
                x = box.width() / 2 - box.scrollLeft() - 10;
                box.animate({
                    scrollLeft: -x
                });
            }
        });

        $(box).on({
            mousemove: function (e) {
                var mx2 = e.pageX - this.offsetLeft;
                if (mx) this.scrollLeft = this.sx + mx - mx2;
            },
            mousedown: function (e) {
                this.sx = this.scrollLeft;
                mx = e.pageX - this.offsetLeft;
            },
            scroll: function () {
                toggleArrows();
            }
        });

        $(document).on("mouseup", function () {
            mx = 0;
        });

        function toggleArrows() {
            if (box.scrollLeft() > maxScrollWidth - 10) {
                // disable next button when right end has reached
                nextArrow.addClass("disabled");
            } else if (box.scrollLeft() < 10) {
                // disable prev button when left end has reached
                prevArrow.addClass("disabled");
            } else {
                // both are enabled
                nextArrow.removeClass("disabled");
                prevArrow.removeClass("disabled");
            }
        }
    });

    //Countdown
    function countdown(dateEnd) {
        var timer, days, hours, minutes, seconds;
      
        dateEnd = new Date(dateEnd);
        dateEnd = dateEnd.getTime();
      
        if ( isNaN(dateEnd) ) {
          return;
        }
      
        timer = setInterval(calculate, 1000);
      
        function calculate() {
          var dateStart = new Date();
          var dateStart = new Date(dateStart.getUTCFullYear(),
                                   dateStart.getUTCMonth(),
                                   dateStart.getUTCDate(),
                                   dateStart.getUTCHours(),
                                   dateStart.getUTCMinutes(),
                                   dateStart.getUTCSeconds());
          var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)
      
          if ( timeRemaining >= 0 ) {
            days    = parseInt(timeRemaining / 86400);
            timeRemaining   = (timeRemaining % 86400);
            hours   = parseInt(timeRemaining / 3600);
            timeRemaining   = (timeRemaining % 3600);
            minutes = parseInt(timeRemaining / 60);
            timeRemaining   = (timeRemaining % 60);
            seconds = parseInt(timeRemaining);
      
            document.getElementById("days").innerHTML    = parseInt(days, 10) + 'd';
            document.getElementById("hours").innerHTML   = ("0" + hours).slice(-2) + 'h';
            document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2) + 'm';
            document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2) + 's';
          } else {
            return;
          }
        }
      
        function display(days, hours, minutes, seconds) {}
      }
      
      
      
      countdown('03/25/2024 12:00:00 AM');
});