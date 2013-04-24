// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.pagecontrols.sectionone = $.klass(underpin.pagecontrols.base, {
	initialize : function(parameters){
		this.parameters = parameters;
		this.parameters.container.addClass('pagecontrolhighlight');
	},

	load : function(){
		new underpin.subpagecontrols.red({
			'container' : this.parameters.container
		}).load();
		new underpin.subpagecontrols.yellow({
			'container' : this.parameters.container
		}).load();
		new underpin.subpagecontrols.orange({
			'container' : this.parameters.container
		}).load();
		new underpin.subpagecontrols.blue({
			'container' : this.parameters.container
		}).load();
		new underpin.subpagecontrols.green({
			'container' : this.parameters.container
		}).load();
	},

	unload : function(){
		this.parameters.container.empty();
	}
});
