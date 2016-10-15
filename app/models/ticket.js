import DS from 'ember-data';

export default DS.Model.extend({
  ticketMessages: DS.hasMany('ticket-message'),
  state: DS.attr(),
  subject: DS.attr(),
  content: DS.attr()
});
