# Tickr-ember

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd tickr-ember`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## App components

### Ember Simple Auth

We are using ember simple auth with ActiveModelAdapter in order to ease the comunication with our ruby on rails backend.

There is a Mixin that helps you to override the behaviour of the page transitions when the user is not logged in. The mixin is intended to be injected in pages where you need to be logged in, like this:

```js
import AuthenticatedUserRouteMixin from '../../mixins/authenticated-user-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedUserRouteMixin, {
//your code goes here.
});
```

### Components List

Currently we only have form components in the app:
 - login-form
 - ticket-form
 - ticket-message-form


