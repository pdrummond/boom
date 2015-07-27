Package.describe({
  name: 'boom:storytasks-widget',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
   api.use(['meteor-platform', 'iron:router', 'semantic:ui', 'boom:kernel']);
  api.addFiles([
    'client/storytasks-widget.html',
    'client/storytasks-widget.js'
    ], ['client']);

  api.export(['storyTasksWidget']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('boom:storytasks-widget');
  api.addFiles('storytasks-widget-tests.js');
});
