import Ember from 'ember';
import AuthenticatedUserRouteMixin from '../../mixins/authenticated-user-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedUserRouteMixin, {
  model() {
    return this.store.findAll('ticket');
  },

  session: service('session'),

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
