Package.describe({
  name: 'boom:kanban-view',
  version: '0.0.1',  
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['meteor-platform', 
    'iron:router', 
    'momentjs:moment', 
    'semantic:ui',    
    'boom:kernel']);
  api.addFiles([
    'client/kanban-view.html',
    'client/kanban-view.js'
    ], ['client']);

  api.export(["kanbanView"]);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('boom:kanban-view');
  api.addFiles('kanban-view-tests.js');
});
