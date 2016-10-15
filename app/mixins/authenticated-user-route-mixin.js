import Ember from 'ember';

const { inject: { service }, assert, computed } = Ember;

export default Ember.Mixin.create({
  session: service('session'),

  authenticationRoute: computed(function() {
    return 'login';
  }),

  beforeModel(transition) {
    if (!this.get('session.isAuthenticated')) {
      let authenticationRoute = this.get('authenticationRoute');
      assert('check your routes, there is an infinite loop', this.get('routeName') !== authenticationRoute);

      this.set('session.attemptedTransition', transition);
      return this.transitionTo(authenticationRoute);
    } else {
      return this._super(...arguments);
    }
  }
});
