Ext.define('PrototypesMobile.view.Menu', {
    extend: 'Ext.Container',
    xtype: 'menu',
    id: 'menu',
    fullscreen: true,
    config: {
        cls: 'main-container',
        items: [
            {
                xtype: 'label',
                html: 'Menu label'
            }
        ]
    }
});