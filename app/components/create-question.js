import Ember from 'ember';

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
			var params = {
				title: this.get('title'),
				content: this.get('content')
			};
			this.sendAction('createQ', params);
		}
	}
});
