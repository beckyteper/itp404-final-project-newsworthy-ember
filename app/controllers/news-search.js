import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    searchArticles: function(e) {
      e.preventDefault();

      var searchTerm = this.get('topic');

      console.log(searchTerm);

      this.set('topic', null);

      this.transitionToRoute('news-search.results', searchTerm);
    }
  }
});
