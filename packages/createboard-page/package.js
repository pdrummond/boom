Package.describe({
  name: 'boom:createboard-page',
  version: '0.0.1',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['meteor-platform', 'iron:router', 'semantic:ui', 'aldeed:autoform', 'boom:kernel']);
  api.addFiles([
    'client/createboard-page.html',
    'client/createboard-page.js'
    ], ['client']);

  api.export("createBoardPage");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('boom:createboard-page');
  api.addFiles('createboard-page-tests.js');
});
