// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.pagecontrols.sectiondata = $.klass(underpin.pagecontrols.base, {
	initialize : function(parameters){
		this.parameters = parameters;
		this.getContainer();
		this.parameters.container.addClass('pagecontrolhighlight');
	},

	load : function(){
		var _this = this;
		this.require_template('data-template');
		
		var request = {};
		request.action = "find";
		request.collection = "info";
		request.callback = function(data){
			var template = _.template($('#data-template').html(), {mydata: data.data});
                        _this.parameters.container.html(template);
		};
		request.failcallback = function(data){
			$('<div>', {'class' : 'grid_16 error'}).appendTo(_this.parameters.container).html('An error occurred');
			$('<div>', {'class' : 'grid_16 error'}).appendTo(_this.parameters.container).html(' - '+data.e1);
		};
		this.sendRequest(request, this.parameters.container);

	},

	unload : function(){
		this.parameters.container.empty();
	}
});
