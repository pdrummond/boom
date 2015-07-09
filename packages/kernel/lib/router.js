Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',  
  notFoundTemplate: 'notFound',
});

Router.route('/board/:boardId/:viewTemplate', function() {
  var board = Boards.findOne(this.params.boardId);  
  Session.set("currentBoardId", this.params.boardId);
  Session.set("currentBoard", board);
  this.render(viewTemplate);
});