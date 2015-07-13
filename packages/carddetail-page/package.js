Package.describe({
  name: 'boom:carddetail-page',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['meteor-platform', 'iron:router', 'semantic:ui']);
  api.addFiles([
    'client/carddetail-page.html',
    'client/carddetail-page.js'
    ], ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('boom:carddetail-page');
  api.addFiles('carddetail-page-tests.js');
});
