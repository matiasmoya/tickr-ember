import DS from 'ember-data';

export default DS.Model.extend({
  state: DS.attr(),
  subject: DS.attr(),
  description: DS.attr()
});
