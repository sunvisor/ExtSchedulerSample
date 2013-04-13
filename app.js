Ext.Loader.setConfig({
    enabled : true,
    paths: {
        'Sch': './sch/js/Sch/'
    }
});

Ext.require('Sch.util.Date');

Ext.application({
    name: 'SchTest',
    
    autoCreateViewport: true,

    controllers: ['Main'],

    launch: function() {
        // Initialize
    }
});
