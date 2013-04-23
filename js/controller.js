// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.controller = $.klass(underpin.base, {
	initialize : function(parameters){
		this.parameters = parameters;
	
		this.load();	
	},

	load : function(){
		new underpin.pagecontrols.header({
			'container' : this.parameters.divHeader
		});

		new underpin.pagecontrols.main({
			'container' : this.parameters.divMain
		});

		new underpin.pagecontrols.footer({
			'container' : this.parameters.divFooter
		});
	},

	unload : function(){

	}
});
