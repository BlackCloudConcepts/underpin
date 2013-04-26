// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.pagecontrols.sectiontwo = $.klass(underpin.pagecontrols.base, {
	initialize : function(parameters){
		this.parameters = parameters;
		this.parameters.container.addClass('pagecontrolhighlight');
	},

	load : function(){
		this.getContainer();
		$('<div>', {'class' : 'grid_4'}).appendTo(this.container).html('&nbsp;');
		new underpin.subpagecontrols.blue({
			'container' : this.container
		}).load();
		$('<div>', {'class' : 'grid_4'}).appendTo(this.container).html('&nbsp;');

		new underpin.subpagecontrols.red({
			'container' : this.container
		}).load();
		new underpin.subpagecontrols.yellow({
			'container' : this.container
		}).load();
		new underpin.subpagecontrols.orange({
			'container' : this.container
		}).load();

		$('<div>', {'class' : 'grid_4'}).appendTo(this.container).html('&nbsp;');
		new underpin.subpagecontrols.green({
			'container' : this.container
		}).load();
		$('<div>', {'class' : 'grid_4'}).appendTo(this.container).html('&nbsp;');

	},

	unload : function(){
		this.destroyControl();
	}
});
