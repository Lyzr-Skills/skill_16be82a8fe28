Ext.define('ZHYSoft.form.NewForm', {
    extend: 'ZHYSoft.form.AbstractForm',
    bodyPadding: 20,
    funcs: { //自訂計算函數
        //計算函數名: function(a, b){
        //    return a*b+1;
        //}
    },
    validators: { //自訂驗證函數
        //驗證函數名: function(value, field){
        //    if (value >= 100)
        //        return true; //驗證通過
        //
        //    return '錯誤資訊';
        //}
    },
    definition: {
        "components": {
            "formtitle1": {
                "ctype": "formtitle",
                "title": "辦公用品維護",
                "razortag": "PlantFormTitle",
                "uniqueId": "57f915c9-61c1-4570-8191-404464c71589"
            },
            "segmentbar1": {
                "ctype": "segmentbar",
                "title": "建立資訊",
                "uniqueId": "51f05b61-1980-41a5-ab88-416cb4de70a7"
            },
            "initiator1": {
                "ctype": "initiator",
                "persistence": true,
                "fieldLabel": "建立人",
                "lockBinding": true,
                "$bind": "CreateUser",
                "uniqueId": "d33367fe-a56b-4cb0-adce-3521a891dc0e"
            },
            "tablecell1": {
                "$items": [
                    "initiator1"
                ]
            },
            "starttime1": {
                "ctype": "starttime",
                "persistence": true,
                "fieldLabel": "建立時間",
                "lockBinding": true,
                "$bind": "CreateTime",
                "uniqueId": "a83e6f36-3f15-4c4d-a68e-10f195563274"
            },
            "tablecell2": {
                "$items": [
                    "starttime1"
                ]
            },
            "text1": {
                "ctype": "text",
                "fieldLabel": "修改人",
                "lockBinding": true,
                "$bind": "UpdateUser",
                "uniqueId": "63787179-c3c3-4e0d-ad36-d321e3d5dceb"
            },
            "tablecell4": {
                "$items": [
                    "text1"
                ]
            },
            "datetime1": {
                "ctype": "datetime",
                "fieldLabel": "修改時間",
                "type": "Ymd",
                "lockBinding": true,
                "$bind": "UpdateTime",
                "uniqueId": "27a9779c-768f-4a3c-8b1c-a647b1151527"
            },
            "tablecell5": {
                "$items": [
                    "datetime1"
                ]
            },
            "table1": {
                "ctype": "table",
                "columns": 2,
                "cellVerticalAlign": "middle",
                "$items": [
                    "tablecell1",
                    "tablecell2",
                    "tablecell4",
                    "tablecell5"
                ]
            },
            "segmentbar2": {
                "ctype": "segmentbar",
                "title": "辦公用品資訊",
                "uniqueId": "f8132951-936a-4191-955f-dde86225e540"
            },
            "sn1": {
                "ctype": "sn",
                "persistence": true,
                "lockBinding": true,
                "fieldLabel": "辦公用品編碼",
                "$bind": "SuppliesCode",
                "uniqueId": "50bf0268-b399-4e95-86ab-446b6ae8b7e1"
            },
            "tablecell6": {
                "$items": [
                    "sn1"
                ]
            },
            "text4": {
                "ctype": "text",
                "fieldLabel": "辦公用品名稱",
                "allowBlank": false,
                "lockBinding": true,
                "$bind": "SuppliesName",
                "uniqueId": "d9d94033-4db2-410a-addf-9bb6e96fd016"
            },
            "tablecell7": {
                "$items": [
                    "text4"
                ]
            },
            "text5": {
                "ctype": "text",
                "fieldLabel": "單位",
                "allowBlank": false,
                "lockBinding": true,
                "$bind": "Unit",
                "uniqueId": "8c433455-c206-47dd-8096-95f09e3d2ae4"
            },
            "tablecell9": {
                "$items": [
                    "text5"
                ]
            },
            "number1": {
                "ctype": "number",
                "fieldLabel": "成本單價",
                "allowBlank": false,
                "thousands": false,
                "digit": 2,
                "currency": null,
                "lockBinding": true,
                "$bind": "Price",
                "suffix": null,
                "uniqueId": "3938340e-bfb5-4ab9-8c29-8086737112a6"
            },
            "tablecell10": {
                "$items": [
                    "number1"
                ]
            },
            "text6": {
                "ctype": "text",
                "fieldLabel": "存放位置",
                "allowBlank": false,
                "lockBinding": true,
                "$bind": "Location",
                "uniqueId": "d40b890a-a3d0-4a05-9f96-593efe3bb587"
            },
            "tablecell11": {
                "colspan": 2,
                "$items": [
                    "text6"
                ]
            },
            "number2": {
                "ctype": "number",
                "fieldLabel": "庫存數量",
                "allowBlank": false,
                "thousands": false,
                "digit": 2,
                "currency": null,
                "lockBinding": true,
                "$bind": "Inventory",
                "suffix": null,
                "uniqueId": "83c8acf4-b9c7-440f-8558-11df2bf29884"
            },
            "tablecell13": {
                "$items": [
                    "number2"
                ]
            },
            "tablecell14": {
                "$items": []
            },
            "table2": {
                "ctype": "table",
                "columns": 2,
                "cellVerticalAlign": "middle",
                "$items": [
                    "tablecell6",
                    "tablecell7",
                    "tablecell9",
                    "tablecell10",
                    "tablecell11",
                    "tablecell13",
                    "tablecell14"
                ]
            }
        },
        "$items": [
            "formtitle1",
            "segmentbar1",
            "table1",
            "segmentbar2",
            "table2"
        ]
    },

    initComponent: function(){
        var me = this;

        me.callParent(arguments);
    }
});
