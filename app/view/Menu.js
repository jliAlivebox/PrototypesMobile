Ext.define('PrototypesMobile.view.Menu', {
    extend: 'Ext.Container',
    xtype: 'menu',
    id: 'menu',
    fullscreen: true,
    config: {
        cls: 'main-container',
        items: [
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'label',
                        html: 'Welcome,',
                        cls: 'show-mgr-label show-mgr-help-label bold-thick'
                    },
                    {
                        xtype: 'label',
                        itemId: 'lblUserId',
                        padding: '0 0 0 10',
                        html: 'Nathan',
                        cls: 'show-mgr-label show-mgr-help-label bold-thick'
                    }
                ]
            },
            {
                xtype: 'container',
                defaults: {
                  style: 'margin-top: 10px'
                },
                items: [
                    {
                        xtype: 'button',
                        text: 'Clock Out',
                        cls: 'show-mgr-button'

                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        width: '100%',
                        height: '20%',
                        items: [
                            {
                                xtype: 'button',
                                text: 'Active',
                                height: '96px',
                                flex: 1,
                                padding: '50 0 0 0',
                                cls: 'show-mgr-button'
                            },
                            {
                                xtype: 'button',
                                text: 'Queue',
                                height: '96px',
                                flex: 1,
                                style: 'margin-left: 10px',
                                padding: '50 0 0 0',
                                cls: 'show-mgr-button'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        text: 'View Order History',
                        cls: 'show-mgr-button'
                    },
                    {
                        xtype: 'button',
                        text: 'View Upcoming Shifts',
                        cls: 'show-mgr-button'
                    },
                    {
                        xtype: 'button',
                        text: 'Request Time Away',
                        cls: 'show-mgr-button'
                    },
                    {
                        xtype: 'button',
                        text: 'Settings',
                        cls: 'show-mgr-button'
                    }

                ]
            }
        ]
    }
});