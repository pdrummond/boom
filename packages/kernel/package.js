Package.describe({
  name: 'boom:kernel',
  version: '0.0.1',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['meteor-platform', 'iron:router', 'semantic:ui']);
  api.addFiles([
  	'lib/router.js', 
  	'lib/collections/board-collection.js'
  ]);

  api.addFiles([
    'client/main.html', 
    'client/templates/layout.html',
    'client/templates/layout.js'
  ], 'client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('boom:kernel');
  api.addFiles('kernel-tests.js');
});
