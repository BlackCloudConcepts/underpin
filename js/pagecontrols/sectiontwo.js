// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.pagecontrols.sectiontwo = $.klass(underpin.pagecontrols.base, {
	initialize : function(parameters){
		this.parameters = parameters;
		this.parameters.container.addClass('pagecontrolhighlight');
	},

	load : function(){
		$('<div>', {'class' : 'grid_4'}).appendTo(this.parameters.container).html('&nbsp;');
		new underpin.subpagecontrols.blue({
			'container' : this.parameters.container
		}).load();
		$('<div>', {'class' : 'grid_4'}).appendTo(this.parameters.container).html('&nbsp;');

		new underpin.subpagecontrols.red({
			'container' : this.parameters.container
		}).load();
		new underpin.subpagecontrols.yellow({
			'container' : this.parameters.container
		}).load();
		new underpin.subpagecontrols.orange({
			'container' : this.parameters.container
		}).load();

		$('<div>', {'class' : 'grid_4'}).appendTo(this.parameters.container).html('&nbsp;');
		new underpin.subpagecontrols.green({
			'container' : this.parameters.container
		}).load();
		$('<div>', {'class' : 'grid_4'}).appendTo(this.parameters.container).html('&nbsp;');

	},

	unload : function(){
		this.parameters.container.empty();
	}
});
