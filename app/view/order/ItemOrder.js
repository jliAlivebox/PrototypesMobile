Ext.define('PrototypesMobile.view.order.ItemOrder', {
    extend: 'Ext.Container',
    xtype: 'itemorder',
    id: 'itemorder',
    config: {
        items: [
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'btnStatus',
                        style: 'background: blue; padding-top: 100%',
                        width: '5%'
                    },
                    {
                        xtype: 'container',
                        defaults: {
                            padding: '0 0 0 10'
                        },
                        items: [
                            {
                                xtype: 'label',
                                itemId: 'lblNumOrder',
                                html: '100565'
                            },
                            {
                                xtype: 'button',
                                itemId: 'btnOrderName',
                                left: 70,
                                style: 'color: black',
                                cls: 'transparent-button',
                                text: 'Order Name'
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                padding: '10 0 10 10',
                                items: [
                                    {
                                        xtype: 'label',
                                        itemId: 'lblAssign',
                                        padding: '0 10 0 0',
                                        html: 'Assign to Me'
                                    },
                                    {
                                        xtype: 'label',
                                        itemId: 'lblDate',
                                        html: '2 Feb - 3:45pm'
                                    }
                                ]
                            },
                            {
                                xtype: 'label',
                                itemId: 'lblContent',
                                html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                                    'sed do eiusmod tempor incididunt ut labore'
                            }
                        ]
                    }
                ]
            }
        ]
    }
});