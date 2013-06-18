Ext.define('PrototypesMobile.controller.MainController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mainView : 'main',
            loginView : 'login',
            helpView : 'help',
            btnLoginHelp: 'login [itemId=btnLoginHelp]',
            btnHelpBack: 'help [itemId=btnHelpBack]'
        },

        control: {
            login: {
                helpSelected: 'onHelpSelected'
            },
            help: {
                backSelected: 'onBackSelected'
            },
            btnLoginHelp: {
                tap: 'onHelpSelected'
            },
            btnHelpBack: {
                tap: 'onBackSelected'
            }
        }
    },

    launch: function() {
    },

    onHelpSelected: function() {
        this.getMainView().setActiveItem(1);
    },

    onBackSelected: function() {
        this.getMainView().setActiveItem(0);
    }
});