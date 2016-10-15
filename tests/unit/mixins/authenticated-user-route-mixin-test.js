import Ember from 'ember';
import AuthenticatedUserRouteMixinMixin from 'tickr-ember/mixins/authenticated-user-route-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | authenticated user route mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let AuthenticatedUserRouteMixinObject = Ember.Object.extend(AuthenticatedUserRouteMixinMixin);
  let subject = AuthenticatedUserRouteMixinObject.create();
  assert.ok(subject);
});
