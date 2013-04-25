// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.controller = $.klass(underpin.base, {
	initialize : function(parameters){
		this.parameters = parameters;
	
		this.load();	
	},

	load : function(){
		var _this = this;

		// load external templates
		this.require_template('header-template');
		this.require_template('footer-template');
		this.require_template('info-template');
		this.require_template('green-template');
		this.require_template('blue-template');
		this.require_template('yellow-template');
		this.require_template('red-template');
		this.require_template('orange-template');

		// define sections
		this.pcHeader = new underpin.pagecontrols.header({
			'container' : this.parameters.divHeader,
			'switchMain' : function(page){ _this.switchMain(page); }
		});
		this.pcMain = new underpin.pagecontrols.main({
			'container' : this.parameters.divMain
		});
		this.pcSectionOne = new underpin.pagecontrols.sectionone({
			'container' : this.parameters.divMain
		});
		this.pcSectionTwo = new underpin.pagecontrols.sectiontwo({
			'container' : this.parameters.divMain
		});
		this.pcInfo = new underpin.pagecontrols.info({
			'container' : this.parameters.divMain
		});
		this.pcFooter = new underpin.pagecontrols.footer({
			'container' : this.parameters.divFooter
		});

		// load initial sections
		this.pcHeader.load();
		this.pcMain.load();
		this.pcFooter.load();
		this.liveMain = this.pcMain;

		// backbone routes
		var Router = Backbone.Router.extend({
                	routes: {
				'sectionmain'   : 'sectionmain',
				'sectionone'    : 'sectionone',
				'sectiontwo'    : 'sectiontwo',
				'sectioninfo'	: 'sectioninfo'
			}
		});
		this.router = new Router();
	        this.router.on('route:sectionmain', function(){ 
			_this.liveMain.unload();
                       	_this.pcMain.load();
                        _this.liveMain = _this.pcMain;
		});
		this.router.on('route:sectionone', function(){ 
			_this.liveMain.unload();
                       	_this.pcSectionOne.load();
                        _this.liveMain = _this.pcSectionOne;
		});
		this.router.on('route:sectiontwo', function(){ 
			_this.liveMain.unload();
                       	_this.pcSectionTwo.load();
                        _this.liveMain = _this.pcSectionTwo;
		});
		this.router.on('route:sectioninfo', function(){ 
			_this.liveMain.unload();
                       	_this.pcInfo.load();
                        _this.liveMain = _this.pcInfo;
		});
		Backbone.history.start();

	},

	require_template : function(templateName) {
	    var template = $('#template_' + templateName);
	    if (template.length === 0) {
		var tmpl_dir = '/templates';
		var tmpl_url = tmpl_dir + '/' + templateName + '.html';
		var tmpl_string = '';

		$.ajax({
		    url: tmpl_url,
		    method: 'GET',
		    async: false,
		    contentType: 'text',
		    success: function (data) {
			tmpl_string = data;
		    }
		});

		$('head').append('<script id="'+ templateName + '" type="text/template">' + tmpl_string + '<\/script>');
	    }
	},

	switchMain : function(page){
		switch (page) {
			case 'main' :
				this.router.navigate('sectionmain', {trigger:true});
				break;
			case 'sectionone' :
				this.router.navigate('sectionone', {trigger:true});
				break;
			case 'sectiontwo' :
				this.router.navigate('sectiontwo', {trigger:true});
				break;
			case 'info' : 
				this.router.navigate('sectioninfo', {trigger:true});
				break;
		}
	},

	unload : function(){

	}
});
