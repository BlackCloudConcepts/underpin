// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.pagecontrols.footer = $.klass(underpin.pagecontrols.base, {
	initialize : function(parameters){
		this.parameters = parameters;
		this.parameters.container.addClass('highlightborder');
		this.load();	
	},

	load : function(){
		$('<div>', {'class' : 'grid_16'}).appendTo(this.parameters.container).html('Footer Section');
	},

	unload : function(){
		this.parameters.container.destroy();
	}
});
