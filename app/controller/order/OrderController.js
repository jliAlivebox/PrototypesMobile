Ext.define('PrototypesMobile.controller.order.OrderController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mainView : 'main',
            btnMenuBack: 'myorders [itemId=btnMenuBack]'
        },

        control: {
            btnMenuBack: {
                tap: 'onBackMenu'
            }
        }
    },

    launch: function() {
    },

    onBackMenu: function(){
        debugger;
        this.getMainView().setActiveItem(2);
    }

});