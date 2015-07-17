Package.describe({
  name: 'boom:kernel',
  version: '0.0.1',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['meteor-platform', 'iron:router', 'semantic:ui', 'fabienb4:autoform-semantic-ui']);
  api.addFiles([
    'kernel.js',    
    'lib/router.js', 
    'lib/api/api.js',
    'lib/api/boards-api.js',
    'lib/api/config-api.js',
    'lib/api/router-api.js',
    'lib/methods/board-methods.js',
    'lib/methods/card-methods.js'
    ]);

  api.addFiles([    
    'client/main.html', 
    'client/stylesheets/default.css',
    'client/helpers/datetime-helpers.js',
    'client/helpers/card-helpers.js',
    'client/helpers/board-helpers.js',
    'client/templates/layout.html',
    'client/templates/not-found.html',
    'client/templates/layout.js'
    ], 'client');

  api.export(['Boom', 'Boards', 'Cards', 'BoardTemplates', 'formatTime']);

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('boom:kernel');
  api.addFiles('kernel-tests.js');
});
