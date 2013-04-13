Ext.onReady(function() {

    var resourceStore = Ext.create('Sch.data.ResourceStore', {
        data: [
            {Id: 1, Name: '小堤'},
            {Id: 2, Name: '中村'}
        ]
    });

    var eventStore = Ext.create('Sch.data.EventStore', {
        data: [
            {
                ResourceId      : 1,
                Name            : 'Some task', 
                StartDate       : '2013-05-22 10:00',
                EndDate         : '2013-05-22 12:00'
            },
            {
                ResourceId      : 2,
                Name            : 'Some other task', 
                StartDate       : '2013-05-22 13:00',
                EndDate         : '2013-05-22 16:00'
            }
        ]
    });

    Ext.create('Sch.panel.SchedulerGrid', {
        width       : 600,
        height      : 200,

        startDate   : new Date(2013, 4, 22, 8),
        endDate     : new Date(2013, 4, 22, 18),
        viewPreset  : 'hourAndDay',

        columns     : [
            { header : 'Staff', width : 130, dataIndex : 'Name'}
        ],

        resourceStore   : resourceStore,
        eventStore      : eventStore,
        renderTo: Ext.getBody()
    });
});
