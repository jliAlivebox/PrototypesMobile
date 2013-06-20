Ext.define('PrototypesMobile.controller.MainController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mainView : 'main',
            loginView : 'login',
            helpView : 'help',
            btnLoginHelp: 'login [itemId=btnLoginHelp]',
            btnHelpBack: 'help [itemId=btnHelpBack]',
            btnLogIn: 'login [itemId=btnLogIn]'
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
            },
            btnLogIn: {
                tap: 'onLogIn'
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
    },

    onLogIn: function() {
        this.getMainView().setActiveItem(2);
    }
});