import DS from 'ember-data';

export default DS.Model.extend({
  state: DS.attr(),
  subject: DS.attr(),
  content: DS.attr()
});
