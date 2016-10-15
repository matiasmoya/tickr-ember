import DS from 'ember-data';

export default DS.Model.extend({
  ticket: DS.belongsTo('ticket'),
  content: DS.attr(),
  from: DS.attr()
});
