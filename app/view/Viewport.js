Ext.define('SchTest.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Sch.panel.SchedulerGrid',
        'SchTest.plugin.EventEditor'
    ],

    layout: 'fit',

    initComponent: function() {
        var me = this, preset;
        
        // viewPresetの呼び出し
        preset = Sch.preset.Manager.getPreset('hourAndDay');

        // 時間粒度の設定
        preset.timeResolution = {
            unit: "MINUTE",
            increment: 10
        };

        // ヘッダーの表示形式
        preset.headerConfig.top.dateFormat = 'Y年m月d日(D)';

        // viewPresetの登録
        Sch.preset.Manager.registerPreset('myHourAndDay', preset);

        Ext.apply(me, {
            items: [{
                xtype: 'schedulergrid',
                title: 'Ext Scheduler Test',
                // EventEditorプラグイン
                plugins : [
                    Ext.create('SchTest.plugin.EventEditor')
                ],
                // カスタマイズしたviewPresetを設定
                viewPreset: 'myHourAndDay',

                startDate: new Date(2013, 3, 12, 12),
                endDate: new Date(2013, 3, 13, 6),

                resourceStore: 'Members',
                eventStore: 'Tasks',

                // 表示内容の設定
                eventBodyTemplate: '{StartDate:date("H:i")} <b>{Name}</b><br />{Location}',
                rowHeight : 40,

                columns: [{
                    text: '氏名',
                    width: 100,
                    dataIndex: 'Name',
                    sortable: true
                }, {
                    text: '役職',
                    width: 60,
                    dataIndex: 'Post',
                    sortable: true
                }]
            }]
        });
        me.callParent(arguments);
    }
});
