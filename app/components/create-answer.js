import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
	isCreateAnswerFormVisible:false,
	actions:{
		answer(){
			this.set('isCreateAnswerFormVisible',true);
		},
		submit(){
			var today = moment().format("dddd,MMMM Do YYYY(h:mm a)").toString();
			var params = {
				answer_content: this.get('answer_content'),
				author: this.get('author'),
				date_created:today,
				question:this.get('question')
			};
			this.sendAction('saveAnswer', params);
			this.set('isCreateAnswerFormVisible', false);
		}
	}
});