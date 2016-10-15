import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    createTicketMessage: function() {
      let { content, ticket } = this.getProperties('content', 'ticket')

      var store = this.get('store');
      var newMessage = store.createRecord('ticket-message', {
        ticket: ticket,
        content: content
      });

      newMessage.save();
    }
  }
});
