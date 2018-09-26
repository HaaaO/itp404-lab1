import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  model(params) {
   let url = `https://www.reddit.com/r/javascript.json`;
   return $.getJSON(url);
 }
});
