Package.describe({
  name: 'boom:cardlabels-widget',
  version: '0.0.1'  
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['meteor-platform', 'iron:router', 'semantic:ui', 'boom:kernel']);
  api.addFiles([
    'client/cardlabels-widget.html',
    'client/cardlabels-widget.js'
    ], ['client']);

  api.export(['cardLabelsWidget']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('boom:cardlabels-widget');
  api.addFiles('cardlabels-widget-tests.js');
});
