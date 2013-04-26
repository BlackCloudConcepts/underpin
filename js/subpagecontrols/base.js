// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.subpagecontrols.base = $.klass(underpin.base, {
    // gets the main container for the page
    getContainer : function()
    {
	// this creates a container for each subpagecontrol
        this.parameters.container = $('<div>').appendTo(this.parameters.container);
    },

    destroyPage : function(){
        this.parameters.container.remove();
    },

    hidePage : function(){
        this.parameters.container.hide();
    },

    showPage : function(){
        this.parameters.container.show();
    }
});
