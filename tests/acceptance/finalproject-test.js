import { test } from 'qunit';
import moduleForAcceptance from 'final-project-newsworthy/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | finalproject');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('user can get to results page from sugggested-searches page', function(assert) {
  visit('/suggested-searches');
  fillIn('input', 'Trump');
  click('button');
  andThen(function() {
    assert.equal(currentURL(), '/news-search/Trump');
  });
});

test('user can get to results page from news-search page', function(assert) {
  visit('/news-search');
  fillIn('input', 'China');
  click('button');
  andThen(function() {
    assert.equal(currentURL(), '/news-search/China');
  });
});

test('visiting /news-search/results returns a list of articles', function(assert) {
  visit('/news-search/China');
  andThen(function() {
    assert.equal(find('.article').length, 30);
  });
});
