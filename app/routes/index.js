import Ember from 'ember';

var questions = [
	{"title":"stuff"}
]

export default Ember.Route.extend({
	model(){
		return this.store.findAll('question');
		// return questions;
	},
	actions:{
		createQuestion(params){
			var newQuery = this.store.createRecord('question', params);
			newQuery.save();
			this.transitionTo('index');
		}
	}
});
