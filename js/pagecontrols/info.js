// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.pagecontrols.info = $.klass(underpin.pagecontrols.base, {
	initialize : function(parameters){
		this.parameters = parameters;
		this.getContainer();
		this.parameters.container.addClass('pagecontrolhighlight');
	},

	load : function(){

		this.require_template('info-template');

		var template = _.template($('#info-template').html());
                this.parameters.container.html(template);


	},

	unload : function(){
		this.parameters.container.empty();
	}
});
