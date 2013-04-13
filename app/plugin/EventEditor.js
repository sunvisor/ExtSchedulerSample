Ext.define('SchTest.plugin.EventEditor', {
    extend: 'Sch.plugin.EventEditor',

    height: 220,
    width: 280,

    // 入力パネルのコンフィグ
    fieldsPanelConfig: {
        padding: 10,
        border: false,
        xtype: 'form',
        defaults: {
            anchor: '100%',
            labelWidth: 40
        },
        items: [{
            xtype: 'textfield',
            fieldLabel: '内容',
            name: 'Name'
        }, {
            xtype: 'textfield',
            fieldLabel: '場所',
            name: 'Location'
        }, {
            xtype: 'textarea',
            fieldLabel: 'メモ',
            name: 'Remark'
        }]
    },

    // 期間を設定する単位
    durationUnit: Sch.util.Date.MINUTE,

    // 期間のSpinerフィールドのコンフィグ
    durationConfig: {
        step: 10
    },

    // 期間の後に表示する文字
    durationText: '分',

    // ボタンに表示する文字
    saveText: '保存',
    deleteText: '削除',
    cancelText: '取消',

    // 時刻入力フィールド(timefield)のコンフィグ
    timeConfig: {
        increment: 10
    }

});
