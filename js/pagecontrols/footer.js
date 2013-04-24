// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.pagecontrols.footer = $.klass(underpin.pagecontrols.base, {
	initialize : function(parameters){
		this.parameters = parameters;
		this.parameters.container.addClass('pagecontrolhighlight');
	},

	load : function(){
		$('<hr>', {'class' : 'grid_16'}).appendTo(this.parameters.container); 
		$('<div>', {'class' : 'grid_5'}).appendTo(this.parameters.container).html('&nbsp;');
		$('<div>', {'class' : 'grid_6', 'style' : 'text-align:center;font-size:10pt;color:#0C60AF;'}).appendTo(this.parameters.container).html('Black Cloud Concepts : Scott Gay 2013');
		$('<div>', {'class' : 'grid_5'}).appendTo(this.parameters.container).html('&nbsp;');
	},

	unload : function(){
		this.parameters.container.empty();
	}
});
