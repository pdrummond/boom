Package.describe({
  name: 'boom:cardstatus-widget',
  version: '0.0.1'  
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['meteor-platform', 'iron:router', 'semantic:ui', 'boom:kernel']);
  api.addFiles([
    'client/cardstatus-widget.html',
    'client/cardstatus-widget.js'
    ], ['client']);

  api.export(['cardStatusWidget']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('boom:cardstatus-widget');
  api.addFiles('cardstatus-widget-tests.js');
});
