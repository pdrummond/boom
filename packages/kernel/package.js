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
    'lib/collections/card-collection.js',
    'lib/collections/board-collection.js',
    'lib/collections/board-template-collection.js',
  	'lib/router.js', 
    'lib/api/api.js',
    'lib/api/config-api.js',
    'lib/api/router-api.js'
  ]);

  api.addFiles([
    'client/main.html', 
    'client/helpers/card-template-helpers.js',
    'client/templates/layout.html',
    'client/templates/not-found.html',
    'client/templates/layout.js'
  ], 'client');

  api.export(['Boom', 'Boards', 'Cards', 'BoardTemplates']);

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('boom:kernel');
  api.addFiles('kernel-tests.js');
});
