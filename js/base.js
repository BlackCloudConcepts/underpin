// License: (MIT) Copyright (C) 2013 Scott Gay
if (underpin == null){
	var underpin = {
		'pagecontrols' : {},
		'subpagecontrols' : {}
	};
}

underpin.base = $.klass({
	sendRequest : function(request, loadingContainer){
		// the structure of this api call can obviously change based on your needs.  
		// - action and collection might change to apiName and method for example
		// - change your apiURL
		// - adjust the jsonp call as necessary

		// http://www.ajaxload.info/ is a good resource for generating your own loading gif
		var ajaxLoader = undefined;
		if (loadingContainer != undefined)
			ajaxLoader = $('<img>', {'src' : '/images/ajax-loader.gif'}).appendTo(loadingContainer);

		var action = request.action;
		var collection = request.collection;
		var callback = request.callback;
		var failcallback = request.failcallback;

		var apiURL = "http://96.126.120.64:8126";

		$.ajax({
			type: "POST",
			url: apiURL+"?random=" + this.getRandomNumber(),
			data: "action=" + action + "&collection=" + collection,
			dataType: "jsonp",
			success: function(data, status){
				if (ajaxLoader != undefined)
					ajaxLoader.remove();
				if (callback != undefined)
					callback(data);
			},
			error: function(data, e1, e2)
			{
				if (ajaxLoader != undefined)
					ajaxLoader.remove();
				var errorInfo = { 'data' : data, 'e1' : e1, 'e2' : e2 };
				if (failcallback != undefined)
					failcallback(errorInfo);
			}
		});
	},

	getRandomNumber : function(){
		var randomnumber=Math.floor(Math.random()*10000);
                return randomnumber;
	},

	require_template : function(templateName) {
	    var template = $('#template_' + templateName);
	    if (template.length === 0) {
		var tmpl_dir = '/templates';
		var tmpl_url = tmpl_dir + '/' + templateName + '.html';
		var tmpl_string = '';

		$.ajax({
		    url: tmpl_url,
		    method: 'GET',
		    async: false,
		    contentType: 'text',
		    success: function (data) {
			tmpl_string = data;
		    }
		});

		$('head').append('<script id="'+ templateName + '" type="text/template">' + tmpl_string + '<\/script>');
	    }
	}


});
