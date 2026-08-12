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
                "title": "會議室維護",
                "razortag": "PlantFormTitle",
                "uniqueId": "2cf4c3e3-5c81-4b8f-9ef9-20b3614037c7"
            },
            "segmentbar1": {
                "ctype": "segmentbar",
                "title": "建立資訊",
                "uniqueId": "c3e51b01-01e0-4c1c-94e7-5f0db7c1e7f5"
            },
            "initiator1": {
                "ctype": "initiator",
                "fieldLabel": "建立人",
                "persistence": true,
                "lockBinding": true,
                "$bind": "CreateUser",
                "uniqueId": "3c921269-f59d-4741-b95a-352a9d1dc013"
            },
            "tablecell1": {
                "$items": [
                    "initiator1"
                ]
            },
            "starttime1": {
                "ctype": "starttime",
                "fieldLabel": "建立時間",
                "persistence": true,
                "lockBinding": true,
                "$bind": "CreateTime",
                "uniqueId": "c248b6eb-a64f-42fa-8506-1015d56e5bbe"
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
                "$disable": "1",
                "$bind": "UpdateUser",
                "uniqueId": "c541e021-00fd-4abe-b460-9042e31d47d0"
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
                "uniqueId": "a992214a-d1a4-4394-8df7-197553637aab"
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
                "title": "會議室信息",
                "uniqueId": "5875e887-f692-484f-a853-ebc1e5e83158"
            },
            "sn1": {
                "ctype": "sn",
                "persistence": true,
                "lockBinding": true,
                "fieldLabel": "會議室編碼",
                "$bind": "MeetingCode",
                "uniqueId": "3625cbb4-4b61-41de-ae38-de09b0d73d1b"
            },
            "tablecell6": {
                "$items": [
                    "sn1"
                ]
            },
            "imageattachment1": {
                "ctype": "imageattachment",
                "maxLength": 200,
                "fieldLabel": "照片",
                "lockBinding": true,
                "maxNum": 0,
                "mobileImageSource": [
                    "photograph",
                    "album"
                ],
                "$bind": "Photo",
                "uniqueId": "a380d5c3-80a6-415d-a5c5-6a04e3f44ac2"
            },
            "tablecell7": {
                "$items": [
                    "imageattachment1"
                ],
                "rowspan": 3
            },
            "text2": {
                "ctype": "text",
                "fieldLabel": "會議室名稱",
                "allowBlank": false,
                "lockBinding": true,
                "$bind": "Name",
                "uniqueId": "4180ab6f-31a9-42d7-8823-c06daed23407"
            },
            "tablecell3": {
                "$items": [
                    "text2"
                ]
            },
            "number1": {
                "ctype": "number",
                "fieldLabel": "可容納人數",
                "allowBlank": false,
                "thousands": false,
                "digit": 0,
                "currency": null,
                "lockBinding": true,
                "suffix": null,
                "$bind": "Capacity",
                "uniqueId": "ab9da3ac-b29e-4ee5-8f4b-ce1aaf9a1ded"
            },
            "tablecell10": {
                "$items": [
                    "number1"
                ]
            },
            "text3": {
                "ctype": "text",
                "fieldLabel": "位置",
                "allowBlank": false,
                "lockBinding": true,
                "$bind": "Location",
                "uniqueId": "fdcf4847-aee3-456f-ace5-9eb24ba95ef8"
            },
            "tablecell9": {
                "colspan": 2,
                "$items": [
                    "text3"
                ]
            },
            "text4": {
                "ctype": "text",
                "fieldLabel": "描述",
                "lockBinding": true,
                "$bind": "Descriptions",
                "uniqueId": "f136ed11-37f7-444a-a4e9-7fe60dae570a"
            },
            "tablecell11": {
                "colspan": 2,
                "$items": [
                    "text4"
                ]
            },
            "checkboxgroup1": {
                "ctype": "checkboxgroup",
                "maxLength": 200,
                "fieldLabel": "會議室設備",
                "items": [
                    {
                        "boxLabel": "電視",
                        "inputValue": "電視",
                        "checked": true,
                        "uniqueId": "90885570-559c-4dc3-a954-92503c31a115"
                    },
                    {
                        "boxLabel": "電話",
                        "inputValue": "電話",
                        "checked": false,
                        "uniqueId": "a5b1a032-7e18-4c96-94de-587cb86719b5"
                    },
                    {
                        "boxLabel": "白板",
                        "inputValue": "白板",
                        "checked": false,
                        "uniqueId": "ff204b0d-64fc-4754-8432-48570ba45067"
                    },
                    {
                        "boxLabel": "投影",
                        "inputValue": "投影",
                        "checked": false,
                        "uniqueId": "44f982da-0ead-4564-a8d2-b8d8b9822f88"
                    },
                    {
                        "boxLabel": "視訊設備",
                        "inputValue": "視訊設備",
                        "checked": false,
                        "uniqueId": "f067280b-1325-48ac-ba4e-4ad91dbf73b5"
                    }
                ],
                "columns": "auto",
                "lockBinding": true,
                "$bind": "Equipment",
                "uniqueId": "638f0188-1c5b-40ea-b29f-fa6fa09f2cfb"
            },
            "tablecell13": {
                "colspan": 2,
                "$items": [
                    "checkboxgroup1"
                ]
            },
            "tablecell15": {
                "$items": []
            },
            "tablecell16": {
                "$items": []
            },
            "table2": {
                "ctype": "table",
                "columns": 2,
                "cellVerticalAlign": "middle",
                "$items": [
                    "tablecell6",
                    "tablecell7",
                    "tablecell3",
                    "tablecell10",
                    "tablecell9",
                    "tablecell11",
                    "tablecell13",
                    "tablecell15",
                    "tablecell16"
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
