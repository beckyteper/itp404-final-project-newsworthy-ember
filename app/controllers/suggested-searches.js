import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    linkToTopic: function(e) {
      e.preventDefault();

      var suggestedSearchTerm = this.get('searchTopic');

      console.log(suggestedSearchTerm);

      this.set('topic', null);

      this.transitionToRoute('news-search.results', suggestedSearchTerm);
    }
  }
});
