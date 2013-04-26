// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.pagecontrols.main = $.klass(underpin.pagecontrols.base, {
	initialize : function(parameters){
		this.parameters = parameters;
		this.parameters.container.addClass('pagecontrolhighlight');
	},

	load : function(){
		this.getContainer();
		new underpin.subpagecontrols.blue({
			'container' : this.container
		}).load();
		new underpin.subpagecontrols.green({
			'container' : this.container
		}).load();
		new underpin.subpagecontrols.red({
			'container' : this.container
		}).load();
		new underpin.subpagecontrols.yellow({
			'container' : this.container
		}).load();
		new underpin.subpagecontrols.orange({
			'container' : this.container
		}).load();
	},

	unload : function(){
		this.destroyControl();
	}
});
