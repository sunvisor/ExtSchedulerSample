Ext.define('SchTest.store.Members', {
    extend: 'Sch.data.ResourceStore',
    model: 'SchTest.model.Member',

    data: [
        {Id: 1, Name: '小堤', Post: '社長'},
        {Id: 2, Name: '中村', Post: '宴会部長'}
    ]
});
