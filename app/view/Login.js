Ext.define('PrototypesMobile.view.Login', {
    extend: 'Ext.Container',
    xtype: 'login',
    id: 'login',
    requires: [    'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Password',
        'Ext.field.Toggle',
        'Ext.Label',
        'Ext.Img'
    ],
    scrollable: false,
    config: {
        cls: 'main-container',
        items: [
            {
                xtype: 'container',
                items: [
                    {
                        xtype: 'img',
                        src: 'resources/icons/header.png',
                        cls: 'login-show-mgr-logo'
                    },
                    {
                        xtype: 'label',
                        cls: 'login-show-mgr-logo-background'
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'body-container',
                height: '500px',
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
                                xtype: 'label',
                                name: 'lblCompany',
                                item: 'lblCompany',
                                right: 30,
                                top: 12,
                                cls: 'login-company-label',
                                html: 'Alivebox'
                            },
                            {
                                xtype: 'button',
                                iconAlign: 'right',
                                right: 0,
                                text: ' ',
                                cls: 'login-company-button',
                                icon: 'resources/icons/foward.png'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        items: [
                            {
                                xtype: 'textfield',
                                name: 'txtMail',
                                placeHolder: 'remember me',
                                readOnly: true
                            },
                            {
                                xtype: 'togglefield',
                                name: 'tfRememberMe',
                                padding: '0 10 0 0',
                                top: 3,
                                cls: 'login-remember-me-toggle'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        text: 'Log In',
                        cls: 'show-mgr-button'
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'footer-container',
                items: [
                    {
                        xtype: 'button',
                        text: 'Need Help?',
                        cls: 'login-need-help-button',
                        itemId: 'btnLoginHelp'
                    }
                ]
            }
        ]
    },

    onHelpSelected: function(){
        this.fireEvent('helpSelected', this);
    }
});
