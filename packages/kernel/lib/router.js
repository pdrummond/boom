Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',  
  notFoundTemplate: 'notFound',
});

Router.route('/board/create/:boardTemplate', function() {
    Session.set("currentBoardTemplate", this.params.boardTemplate);
    this.render("createBoardPage");
});

Router.route('/board/:boardTemplate/:boardId/:boardViewId', function() {
  var boardTemplate = this.params.boardTemplate;
  Session.set("currentBoardTemplate", boardTemplate);
  var board = Boom.BoardCollections[boardTemplate].findOne(this.params.boardId);
  Session.set("currentBoardId", this.params.boardId);
  Session.set("currentBoard", board);
  Session.set("currentBoardViewId", this.params.boardViewId);
  Session.set("currentBoardView", RouteHelpers.getCurrentBoardView());
  this.render("boardPage");
});

Router.route('/board/:boardTemplate/:boardId/card/:cardTemplate/:cardId/detail/', function() {    
    var boardTemplate = this.params.boardTemplate;
    var board = Boom.BoardCollections[boardTemplate].findOne(this.params.boardId);
    Session.set("currentBoardId", this.params.boardId);
    Session.set("currentBoard", board);

    var cardTemplate = this.params.cardTemplate;
    Session.set("currentCardTemplate", cardTemplate);
  	var card = Boom.CardCollections[cardTemplate].findOne(this.params.cardId);
  	
    Session.set("currentCardId", this.params.cardId);
    Session.set("currentCard", card);


    this.render("cardDetailPage");
});

Router.route('/cards/:cardTemplate/create', function() {
    Session.set("currentCardTemplate", this.params.cardTemplate);
    this.render("createCardPage");
});

Router.route('/cards/:cardTemplate/edit/:cardId', function() {
    Session.set("currentCardTemplate", this.params.cardTemplate);
     var cardTemplate = this.params.cardTemplate;
    Session.set("currentCardTemplate", cardTemplate);
    var card = Boom.CardCollections[cardTemplate].findOne(this.params.cardId);
    Session.set("currentCardId", this.params.cardId);
    Session.set("currentCard", card);
    this.render("editCardPage");
});

RouteHelpers = {
  getCurrentBoardView: function() {
  var views = Boom.BoardTemplates[Session.get("currentBoardTemplate")].views;
    var currentView = _.find(views, function(view) { return view._id == Session.get("currentBoardViewId")});
    return currentView;
  }
}



Router.route("/", 'boardListPage');