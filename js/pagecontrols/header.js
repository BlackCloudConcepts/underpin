// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.pagecontrols.header = $.klass(underpin.pagecontrols.base, {
	initialize : function(parameters){
		this.parameters = parameters;
		this.parameters.container.addClass('highlightborder');
		this.load();	
	},

	load : function(){
		$('<h1>', {'class' : 'grid_16'}).appendTo(this.parameters.container).html('Underpin Javascript Structured Framework - Demo');
		$('<h3>', {'class' : 'grid_16'}).appendTo(this.parameters.container).html('License: (MIT) <br/>&copy; 2013 Scott Gay');
		$('<a>', {'class' : 'grid_16', 'href' : 'https://github.com/BlackCloudConcepts/underpin', 'target' : '_blank'}).appendTo(this.parameters.container).html('Underpin Javascript Structured Framework @ GitHub');
		$('<div>', {'style' : 'height:10px;width:10px;'}).appendTo(this.parameters.container);
		$('<hr>', {'class' : 'grid_16'}).appendTo(this.parameters.container);
	},

	unload : function(){
		this.parameters.container.destroy();
	}
});
