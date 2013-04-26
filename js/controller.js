// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.controller = $.klass(underpin.base, {
	initialize : function(parameters){
		this.parameters = parameters;
	
		this.load();	
	},

	load : function(){
		var _this = this;

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
		this.pcSectionData = new underpin.pagecontrols.sectiondata({
			'container' : this.parameters.divMain
		});
		this.pcFooter = new underpin.pagecontrols.footer({
			'container' : this.parameters.divFooter
		});

		// load initial sections
		this.pcHeader.load();
//		this.pcMain.load();
		this.pcFooter.load();
		this.liveMain = this.pcMain;

		// backbone routes
		var Router = Backbone.Router.extend({
                	routes: {
				''		: 'sectionmain',
				'sectionmain'   : 'sectionmain',
				'sectionone'    : 'sectionone',
				'sectiontwo'    : 'sectiontwo',
				'sectioninfo'	: 'sectioninfo',
				'sectiondata'	: 'sectiondata'
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
		this.router.on('route:sectiondata', function(){
			_this.liveMain.unload();
			_this.pcSectionData.load();
			_this.liveMain = _this.pcSectionData;
		});
		Backbone.history.start();

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
			case 'sectiondata' : 
				this.router.navigate('sectiondata', {trigger:true});
				break;
		}
	},

	unload : function(){

	}
});
