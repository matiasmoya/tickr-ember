import Ember from 'ember';

export default Ember.Controller.extend({
  anyTickets: Ember.computed.alias('model.tickets.length', function() {
    return this.get('model.tickets.length') > 0;
  }),

  actions: {
    toggleTicketForm() {
      this.toggleProperty('displayTicketForm')
    }
  }
});
