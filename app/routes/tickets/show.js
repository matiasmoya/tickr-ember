import Ember from 'ember';
import AuthenticatedUserRouteMixin from '../../mixins/authenticated-user-route-mixin';

export default Ember.Route.extend(AuthenticatedUserRouteMixin, {
  model(params) {
    return this.store.findRecord('ticket', params.ticket_id);
  }
});
