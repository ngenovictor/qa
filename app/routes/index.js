import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.findAll('question');
	},
	actions:{
		createQuestion(params){
			var newQuery = this.store.createRecord('question', params);
			newQuery.save();
			this.transitionTo('index');
		}
	}
});
