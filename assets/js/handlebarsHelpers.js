// Create a new YUI instance and populate it with the required modules.
YUI().use('handlebars', function (Y) {
  // Handlebars is available and ready for use. Add implementation code here.
  Y.Handlebars.registerHelper('log', function (logThis) {
    return console.log(logThis);
  });
  Y.Handlebars.registerHelper('backbone', function (name, attribute) {
    var url = ["//backbonejs.org/#", name].join('');
    !attribute || url += ["-", attribute].join('');
    return '<a href="'+url+'" target="_blank">Backbone.'+name+'</a>'
  });
});