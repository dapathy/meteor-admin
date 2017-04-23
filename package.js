Package.describe({
  name: "tjdfalcon:admin",
  summary: "A customized version of yogiben:admin",
  version: "1.0.11",
  git: "https://github.com/tjdfalcon/meteor-admin"
});

Npm.depends({
    'simpl-schema':'0.2.3',
	'datatables.net-bs':'1.10.15'
});

Package.onUse(function(api){

  both = ['client','server']

  api.versionsFrom('METEOR@1.3');

  api.use(
    ['iron:router@1.0.9',
    'coffeescript',
    'underscore',
    'reactive-var',
    'check',
	'ecmascript',
    'aldeed:collection2-core@2.0.0',
    'aldeed:autoform@6.0.0',
    'aldeed:template-extension@4.0.0',
    'alanning:roles@1.2.13',
    'raix:handlebar-helpers@0.2.5',
    'reywood:publish-composite@1.4.2',
    'momentjs:moment@2.10.6',
    'aldeed:tabular@2.1.1',
    'meteorhacks:unblock@1.1.0',
    'zimme:active-route@2.3.2',
    'tjdfalcon:admin-lte@0.0.3'
    ],
    both);

  api.use(['less@1.0.0 || 2.5.0','session','jquery','templating'],'client')

  api.use(['email'],'server')

  api.addFiles([
    'lib/both/AdminDashboard.coffee',
    'lib/both/router.coffee',
    'lib/both/utils.coffee',
    'lib/both/startup.coffee',
    'lib/both/collections.coffee'
    ], both);

  api.addFiles([
    'lib/client/html/admin_templates.html',
    'lib/client/html/admin_widgets.html',
    'lib/client/html/admin_layouts.html',
    'lib/client/html/admin_sidebar.html',
    'lib/client/html/admin_header.html',
    'lib/client/css/admin-custom.less',
    'lib/client/js/admin_layout.js',
    'lib/client/js/helpers.coffee',
    'lib/client/js/templates.coffee',
    'lib/client/js/events.coffee',
    'lib/client/js/slim_scroll.js',
    'lib/client/js/autoForm.coffee'
    ], 'client');

  api.addFiles([
    'lib/server/publish.coffee',
    'lib/server/methods.coffee'
    ], 'server');

  api.export('AdminDashboard',both)
});
