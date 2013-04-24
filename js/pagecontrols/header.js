// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.pagecontrols.header = $.klass(underpin.pagecontrols.base, {
	initialize : function(parameters){
		this.parameters = parameters;
		this.parameters.container.addClass('pagecontrolhighlight');
	},

	load : function(){
		var _this = this;
		// header dom creation
		$('<h1>', {'class' : 'grid_16'}).appendTo(this.parameters.container).html('Underpin Javascript Structured Framework - Demo');
		$('<h3>', {'class' : 'grid_16'}).appendTo(this.parameters.container).html('License: (MIT) <br/>&copy; 2013 Scott Gay');
		$('<a>', {'class' : 'grid_16', 'href' : 'https://github.com/BlackCloudConcepts/underpin', 'target' : '_blank'}).appendTo(this.parameters.container).html('Underpin Javascript Structured Framework @ GitHub');
		$('<div>', {'style' : 'height:10px;width:10px;'}).appendTo(this.parameters.container);
		$('<hr>', {'class' : 'grid_16'}).appendTo(this.parameters.container);

		// nav dom creation
		$('<div>', {'class' : 'grid_2', 'style' : 'font-size:10pt;font-weight:bold;'}).appendTo(this.parameters.container).html('Go To:');
		var lnkMain = $('<div>', {'class' : 'grid_2 navlink'}).appendTo(this.parameters.container).html('Main Page');
		var lnkSectionOne = $('<div>', {'class' : 'grid_2 navlink'}).appendTo(this.parameters.container).html('Section One');
		var lnkSectionTwo = $('<div>', {'class' : 'grid_2 navlink'}).appendTo(this.parameters.container).html('Section Two');
		var lnkInfo = $('<div>', {'class' : 'grid_3 navlink'}).appendTo(this.parameters.container).html('What Is Going On Here?');
		$('<hr>', {'class' : 'grid_16'}).appendTo(this.parameters.container);

		lnkMain.bind('click', function(){ _this.parameters.switchMain('main'); });
		lnkSectionOne.bind('click', function(){ _this.parameters.switchMain('sectionone'); });
		lnkSectionTwo.bind('click', function(){ _this.parameters.switchMain('sectiontwo'); });
		lnkInfo.bind('click', function(){ _this.parameters.switchMain('info'); });
	},

	unload : function(){
		this.parameters.container.empty();
	}
});
