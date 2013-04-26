// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.pagecontrols.footer = $.klass(underpin.pagecontrols.base, {
	initialize : function(parameters){
		this.parameters = parameters;
		this.getContainer();
		this.parameters.container.addClass('pagecontrolhighlight');
	},

	load : function(){
		this.require_template('footer-template');

		var template = _.template($('#footer-template').html());
                this.parameters.container.html(template);

	},

	unload : function(){
		this.parameters.container.empty();
	}
});
