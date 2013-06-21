Ext.define('PrototypesMobile.view.order.MyOrders', {
    extend: 'Ext.Container',
    xtype: 'myorders',
    id: 'myorders',
    fullscreen: true,
    config: {
        cls: 'main-container',
        items: [
            {
                xtype : 'toolbar',
                itemId: 'tbMyOrders',
                docked: 'top',
                title: 'My Active Orders',
                cls: 'show-mrg-toolbar',
                items: [
                    {
                        xtype: 'button',
                        text: 'Menu',
                        cls: 'show-mgr-toolbar-button toolbar-btn',
                        itemId: 'btnMenuBack'
                    }
                ]
            },
            {
                xtype: 'itemorder'
            },
            {
                xtype: 'itemorder',
                btnStatus: 'yellow'
            },
            {
                xtype: 'itemorder',
                btnStatus: 'red'
            }
        ]
    }
});