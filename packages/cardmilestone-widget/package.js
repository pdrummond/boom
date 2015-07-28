Package.describe({
  name: 'boom:cardmilestone-widget',
  version: '0.0.1'  
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles([
    'client/cardmilestone-widget.html',
    'client/cardmilestone-widget.js'
    ], ['client']);

  api.export(['cardMilestoneWidget']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('boom:cardmilestone-widget');
  api.addFiles('cardmilestone-widget-tests.js');
});
