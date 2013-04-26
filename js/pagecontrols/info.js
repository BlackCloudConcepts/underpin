// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.pagecontrols.info = $.klass(underpin.pagecontrols.base, {
	initialize : function(parameters){
		this.parameters = parameters;
		this.parameters.container.addClass('pagecontrolhighlight');
	},

	load : function(){
		this.getContainer();
		this.require_template('info-template');

		var template = _.template($('#info-template').html());
                this.container.html(template);


	},

	unload : function(){
		this.destroyControl();
	}
});
