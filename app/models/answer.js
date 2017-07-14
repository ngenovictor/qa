import DS from 'ember-data';

export default DS.Model.extend({
	answer_content: DS.attr(),
	author: DS.attr(),
	date_created: DS.attr(),
	question: DS.belongsTo('question',{async:true})

});
