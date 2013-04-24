// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.pagecontrols.base = $.klass({
    // gets the main container for the page
    getContainer : function()
    {
        this.parameters.container = new Element('div', {'style' : 'width:950px;'}).inject($('main'));
    },

    destroyPage : function(){
        this.parameters.container.destroy();
    },

    hidePage : function(){
        this.parameters.container.hide();
    },

    showPage : function(){
        this.parameters.container.show();
    }
});
