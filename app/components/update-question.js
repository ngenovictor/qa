import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
	updateFormVisible:false,
	actions:{
		showForm(){
			this.set('updateFormVisible', true);
		},
		save(question){
			var today = moment().format("dddd,MMMM Do YYYY(h:mm a)").toString();
			var params = {
				title: this.get('title'),
				query: this.get('query'),
				author: this.get('author'),
				notes: this.get('notes'),
				date_modified:today
			};
			this.sendAction('update', question, params);
			this.set('updateFormVisible', false);
		},
		cancel(){
			this.set('updateFormVisible', false);
		}
	}
});