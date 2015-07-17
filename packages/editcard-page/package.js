Package.describe({
  name: 'boom:editcard-page',
  version: '0.0.1',  
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['meteor-platform', 'iron:router', 'semantic:ui', 'aldeed:autoform', 'boom:kernel']);
  api.addFiles([
    'client/editcard-page.html',
    'client/editcard-page.js'
    ], ['client']);

  api.export("editCardPage");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('boom:ditcard-page');
  api.addFiles('editcard-page-tests.js');
});
