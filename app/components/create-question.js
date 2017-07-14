import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
	isCreateFormShow:false,
	actions:{
		createQFormShow(){
			this.set('isCreateFormShow', true);
		},
		cancel(){
			this.set('isCreateFormShow', false);
		},
		submit(){
			var today = moment().format("dddd,MMMM Do YYYY(h:mm a)").toString();

			var params = {
				title: this.get('title'),
				query: this.get('query'),
				author: this.get('author'),
				notes: this.get('notes'),
				date_created: today,
				date_modified: today
			};
			this.sendAction('createQ', params);
			this.set('title','');
			this.set('query','');
			this.set('author','');
			this.set('isCreateFormShow', false);
		}
	}
});
