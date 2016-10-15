import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  beforeModel() {
    this._super(...arguments);

    if (this.get('session.isAuthenticated')) {
      this.replaceWith('tickets');
    }
    else {
      this.replaceWith('login');
    }
  }
});
