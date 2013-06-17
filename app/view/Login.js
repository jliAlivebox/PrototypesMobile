Ext.define('PrototypesMobile.view.Login', {
    extend: 'Ext.Container',
    xtype: 'login',
    requires: [    'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Password'
    ],
    scrollable: false,
    style: 'background: #383838',
    config: {
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'txtMail',
                        placeHolder: 'example@mail.com'
                    },
                    {
                        xtype: 'passwordfield',
                        name: 'txtPassword',
                        placeHolder: 'password'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                layout: 'float',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'txtCompany',
                        placeHolder: 'Company',
                        readOnly: true
                    },
                    {
                        xtype: 'button',
                        text: 'alivebox',
                        iconAlign: 'right',
                        icon: 'resources/icons/foward.png',
                        style: 'color: #2B36FC; text-align:right;'

                    }
                ]
            },
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'togglefield',
                        name: 'tfRememberMe',
                        label: 'remenber me',
                        labelWidth: '70%'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Log In',
                style: 'background: #F21C1C; color: white;'
            },
            {
                xtype: 'label',
                html: 'Need Help?',
                padding: '10 10 10 10',
                style: 'text-decoration:underline; color: gray; text-align:center;'
            }
        ]
    }
});
