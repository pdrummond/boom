Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',  
  notFoundTemplate: 'notFound',
});

Router.route('/board/:boardId/:viewTemplate', function() {
  var board = Boards.findOne(this.params.boardId);  
  Session.set("currentBoardId", this.params.boardId);
  Session.set("currentBoard", board);
  Session.set("currentViewTemplate", this.params.viewTemplate);
  this.render("boardPage");
});

Router.route('/board/:boardId/:cardTemplate/:cardId', function() {
    var board = Boards.findOne(this.params.boardId);
  	Session.set("currentBoardId", this.params.boardId);
    Session.set("currentBoard", board);

    var cardTemplate = this.params.cardTemplate;
    Session.set("currentCardTemplate", cardTemplate);
  	var card = Boom.CardCollections[cardTemplate].findOne(this.params.cardId);
  	
    Session.set("currentCardId", this.params.cardId);
    Session.set("currentCard", card);
    this.render("cardDetailPage");
});

Router.route('/cards/create/:cardTemplate', function() {
    Session.set("currentCardTemplate", this.params.cardTemplate);
    this.render("createCardPage");
});

Router.route("/", 'boardListPage');