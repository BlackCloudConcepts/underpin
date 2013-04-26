// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.subpagecontrols.green = $.klass(underpin.subpagecontrols.base, {
	initialize : function(parameters){
		this.parameters = parameters;
	},

	load : function(){
		this.getContainer();
		this.require_template('green-template');
		
		var template = _.template($('#green-template').html());
		this.container.html(template);

	},

	unload : function(){
		this.destroyControl();
	}
});
