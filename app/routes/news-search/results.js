import Ember from 'ember';
var $ = Ember.$;

export default Ember.Route.extend({
  model: function(params) {
    var searchTerm = params.term;

    // var promise = $.ajax({
    //   type: 'get',
    //   url: 'http://itp-404-newsworthy.herokuapp.com/nytimes/' + searchTerm
    // });

    var promise2 = $.ajax({
      type: 'get',
      url: 'http://itp-404-newsworthy.herokuapp.com/cnn/' + searchTerm
    });

    var promise3 = $.ajax({
      type: 'get',
      url: 'http://itp-404-newsworthy.herokuapp.com/wallstreetjournal/' + searchTerm
    });

    var promise4 = $.ajax({
      type: 'get',
      url: 'http://itp-404-newsworthy.herokuapp.com/theguardian/' + searchTerm
    })

    return Ember.RSVP.hash({
      //NYTArticles: promise,
      CNNArticles: promise2,
      WSJArticles: promise3,
      GuardianArticles: promise4
    });
  }
});
