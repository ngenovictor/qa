import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr(),
	query: DS.attr(),
	author: DS.attr(),
	date_created: DS.attr(),
	date_modified: DS.attr(),
	notes: DS.attr(),
	answers: DS.hasMany('answer', {async:true}) 
});

// title, question, author, date_created, date_modified, notes
