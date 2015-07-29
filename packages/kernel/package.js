Package.describe({
  name: 'boom:kernel',
  version: '0.0.1',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['meteor-platform', 'iron:router', 'momentjs:moment', 'semantic:ui', 
    'fabienb4:autoform-semantic-ui', 'stevezhu:lodash', 'konecty:mongo-counter', 
    'useraccounts:semantic-ui', 'accounts-google', 'jparker:gravatar', 'anti:fake']);

  api.addFiles([
    'kernel.js',    
    'lib/router.js', 
    'lib/api/api.js',
    'lib/api/boards-api.js',
    'lib/api/config-api.js',
    'lib/api/router-api.js',    
    'lib/methods/board-methods.js',
    'lib/methods/card-methods.js',
    'lib/helpers/schema-helpers.js',
    'lib/collections/channel-collection.js',
    'lib/collections/message-collection.js',
    'lib/collections/milestone-collection.js',
    'lib/collections/filter-collection.js',
    'lib/collections/counter-collection.js',
    ]);

  api.addFiles([    
    'client/main.html', 
    'client/stylesheets/default.css',
    'client/helpers/user-helpers.js',
    'client/helpers/datetime-helpers.js',
    'client/helpers/card-helpers.js',
    'client/helpers/board-helpers.js',
    'client/helpers/content-helpers.js',    
    'client/templates/layout.html',
    'client/templates/not-found.html',
    'client/templates/access-denied.html',
    'client/templates/layout.js'
    ], 'client');

  api.addFiles('server/fixtures.js', 'server');

  api.export(['lodash', 'Boom', 'Boards', 'Cards', 'Channels', 'Messages', 
    'Milestones', 'Filters', 'Counters', 'BoardTemplates', 'formatTime', 
    'currentUserImageUrl', 'userImageUrl', 'accessDenied', 'signIn']);

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('boom:kernel');
  api.addFiles('kernel-tests.js');
});
