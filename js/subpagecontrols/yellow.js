// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.subpagecontrols.yellow = $.klass(underpin.subpagecontrols.base, {
	initialize : function(parameters){
		this.parameters = parameters;
	},

	load : function(){
		$('<div>', {'class' : 'grid_6 yellow'}).appendTo(this.parameters.container).html('&nbsp;').addClass('subpagecontrolhighlight');
	},

	unload : function(){
		this.parameters.container.empty();
	}
});
