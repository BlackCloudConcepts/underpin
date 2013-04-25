// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.subpagecontrols.orange = $.klass(underpin.subpagecontrols.base, {
	initialize : function(parameters){
		this.parameters = parameters;
	},

	load : function(){

		var template = _.template($('#orange-template').html());
		$('<div>').html(template).appendTo(this.parameters.container);

	},

	unload : function(){
		this.parameters.container.empty();
	}
});
