// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.subpagecontrols.orange = $.klass(underpin.subpagecontrols.base, {
	initialize : function(parameters){
		this.parameters = parameters;
	},

	load : function(){
		this.getContainer();
		this.require_template('orange-template');

		var template = _.template($('#orange-template').html());
		this.container.html(template);

	},

	unload : function(){
		this.destroyControl();
	}
});
