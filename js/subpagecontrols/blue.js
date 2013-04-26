// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.subpagecontrols.blue = $.klass(underpin.subpagecontrols.base, {
	initialize : function(parameters){
		this.parameters = parameters;
	},

	load : function(){
		this.getContainer();
		this.require_template('blue-template');

		var template = _.template($('#blue-template').html());
		this.container.html(template);

	},

	unload : function(){
		this.destroyControl();
	}
});
