// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.subpagecontrols.green = $.klass(underpin.subpagecontrols.base, {
	initialize : function(parameters){
		this.parameters = parameters;
	},

	load : function(){
		
		var template = _.template($('#green-template').html());
		$('<div>').html(template).appendTo(this.parameters.container);

	},

	unload : function(){
		this.parameters.container.empty();
	}
});
