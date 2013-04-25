// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.pagecontrols.footer = $.klass(underpin.pagecontrols.base, {
	initialize : function(parameters){
		this.parameters = parameters;
		this.parameters.container.addClass('pagecontrolhighlight');
	},

	load : function(){

		var template = _.template($('#footer-template').html());
                this.parameters.container.html(template);

	},

	unload : function(){
		this.parameters.container.empty();
	}
});
