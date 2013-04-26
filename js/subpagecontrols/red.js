// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.subpagecontrols.red = $.klass(underpin.subpagecontrols.base, {
	initialize : function(parameters){
		this.parameters = parameters;
		this.getContainer();
	},

	load : function(){
		this.require_template('red-template');

		var template = _.template($('#red-template').html());
		this.parameters.container.html(template);

	},

	unload : function(){
		this.parameters.container.empty();
	}
});
