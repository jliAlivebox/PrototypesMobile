Ext.define('PrototypesMobile.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    id: 'main',
    config: {
        layout: 'card',
        fullscreen:true,
        scrollable: true,
        items: [
            /*{
                xtype: 'login'
            },
            {
                xtype: 'help'
            },*/
            {
                xtype: 'menu'
            }
        ]
    }
});