Ext.define('Mapros.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    // requires: [
    //     'Mapros.view.main.Main',
    //     'Mapros.view.main.MainController'
    // ],

    onLoginClick: function() {

        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true
        localStorage.setItem("LoggedIn", true);

        // Call method from another controller
        this.fireEvent('showLogOutButton');

        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.create({
            xtype: 'app-main'
        });

        location.reload();
    }
});
