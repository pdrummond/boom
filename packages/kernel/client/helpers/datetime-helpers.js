UI.registerHelper('formatTime', function(context, options) {
  if(context) {
    return moment(context).format('ddd, hh:mmA');
  }
});
