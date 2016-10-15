import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    createTicket: function() {
      let { subject, content } = this.getProperties('subject', 'content')

      var store = this.get('store');
      var newTicket = store.createRecord('ticket', {
        subject: subject,
        content: content
      });

      newTicket.save();
    }
  }
});
