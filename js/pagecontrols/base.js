// License: (MIT) Copyright (C) 2013 Scott Gay
underpin.pagecontrols.base = $.klass({
    // gets the main container for the page
    getContainer : function()
    {
        this.container = new Element('div', {'style' : 'width:950px;'}).inject($('main'));
    },

    destroyPage : function(){
        this.container.destroy();
//        clearMessages();
    },

    hidePage : function(){
        this.container.hide();
//        clearMessages();
    },

    showPage : function(){
        this.container.show();
    }
});
