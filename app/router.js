import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('availablehounds');
	this.route('prisonhounds');
	this.route('donate');
	this.route('adoption');
	this.route('about');
	this.route('adopted');
	this.route('events');
	this.route('shop');
});

export default Router;
