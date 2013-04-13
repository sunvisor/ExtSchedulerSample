Ext.define('SchTest.store.Tasks', {
    extend: 'Sch.data.EventStore',
    model: 'SchTest.model.Task',
    data: [{
        ResourceId: 2,
        StartDate:  '2013-04-12 13:00',
        EndDate:    '2013-04-12 15:00',
        Name: '打合せ'
    }, {
        ResourceId: 1,
        StartDate:  '2013-04-12 19:00',
        EndDate:    '2013-04-12 21:00',
        Name: 'Sencha UG',
        Location: 'メビック扇町'
    }, {
        ResourceId: 2,
        StartDate:  '2013-04-12 19:00',
        EndDate:    '2013-04-12 21:00',
        Name: 'Sencha UG',
        Location: 'メビック扇町'
    }]
});
