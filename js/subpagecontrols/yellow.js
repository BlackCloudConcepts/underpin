// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.subpagecontrols.yellow = $.klass(underpin.subpagecontrols.base, {
	initialize : function(parameters){
		this.parameters = parameters;
	},

	load : function(){
		this.getContainer();
		this.require_template('yellow-template');

		var template = _.template($('#yellow-template').html());
		this.container.html(template);

	},

	unload : function(){
		this.destroyControl();
	}
});
