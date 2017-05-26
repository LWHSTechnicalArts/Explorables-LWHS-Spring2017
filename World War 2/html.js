
  $(function(){
    var starsOdometer = new Odometer({ el: $('.odometer-github-stars .odometer')[0], theme: 'minimal', value: '0' });
    starsOdometer.render()

    var exampleOdometerValue = 123456;
    var exampleOdometer = new Odometer({ el: $('.odometer-example')[0], theme: 'car', value: exampleOdometerValue });
    exampleOdometer.render()

    setInterval(function(){
      exampleOdometer.update(exampleOdometerValue++);
    }, 3000);

    var i = 0;
    var update = function() {
      $.ajax("https://api.github.com/repos/HubSpot/odometer", {
        cache: false,
        success: function(data){
          if (data.watchers_count)
            starsOdometer.update(data.watchers_count);
        },
        complete: function(xhr){
          remaining = xhr.getResponseHeader('X-RateLimit-Remaining');

          setTimeout(update, 1000 * (4 + Math.pow(1.1, (60 - remaining))));
        }
      });
    };

    setInterval(function(){
      // Github's limits reset every hour
      i = 0;
    }, 3600*1000);

    setTimeout(update, 1000);
  });
