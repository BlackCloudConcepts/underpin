// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.subpagecontrols.green = $.klass(underpin.subpagecontrols.base, {
	initialize : function(parameters){
		this.parameters = parameters;
		this.getContainer();
	},

	load : function(){
		this.require_template('green-template');
		
		var template = _.template($('#green-template').html());
		this.parameters.container.html(template);

	},

	unload : function(){
		this.parameters.container.empty();
	}
});
