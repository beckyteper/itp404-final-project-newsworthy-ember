import Ember from 'ember';
var $ = Ember.$;

export default Ember.Route.extend({
  model: function(params) {
    var searchTerm = params.term;

    var promise = $.ajax({
      type: 'get',
      url: 'http://localhost:3000/nytimes/' + searchTerm
    });

    var promise2 = $.ajax({
      type: 'get',
      url: 'http://localhost:3000/cnn/' + searchTerm
    });

    var promise3 = $.ajax({
      type: 'get',
      url: 'http://localhost:3000/wallstreetjournal/' + searchTerm
    });

    return Ember.RSVP.hash({
      NYTArticles: promise,
      CNNArticles: promise2,
      WSJArticles: promise3
    });
  }
});
