import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin, {
  beforeModel() {
    this._super(...arguments);
  },

  session: service('session'),

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
