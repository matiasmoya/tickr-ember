import Ember from 'ember';
import AuthenticatedUserRouteMixin from '../../mixins/authenticated-user-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedUserRouteMixin, {
  session: service('session'),

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
