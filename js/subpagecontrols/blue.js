// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.subpagecontrols.blue = $.klass(underpin.subpagecontrols.base, {
	initialize : function(parameters){
		this.parameters = parameters;
	},

	load : function(){
		$('<div>', {'class' : 'grid_8 blue'}).appendTo(this.parameters.container).html('&nbsp;').addClass('subpagecontrolhighlight');
	},

	unload : function(){
		this.parameters.container.empty();
	}
});
