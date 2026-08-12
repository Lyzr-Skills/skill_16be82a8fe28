Ext.define('ZHYSoft.form.NewForm', {
    extend: 'ZHYSoft.form.AbstractForm',
    bodyPadding: 20,
    funcs: { //自訂計算函數
        //計算函數名: function(a, b){
        //    return a*b+1;
        //}
           VerifyDeviceType:function(value)
        {
            if(value.indexOf('其他')!=-1)
            {
                return false
            }
            else{return true;}

        }
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
                "title": "會議室申請",
                "razortag": "PlantFormTitle",
                "uniqueId": "c011e42a-d41d-416e-a7c1-440713dd8b26"
            },
            "segmentbar1": {
                "ctype": "segmentbar",
                "title": "申請人信息",
                "uniqueId": "b435663e-b78c-48c7-b227-bd0b93225fd9"
            },
            "sn2": {
                "ctype": "sn",
                "fieldLabel": "流水號碼",
                "persistence": true,
                "lockBinding": true,
                "$bind": "SN",
                "uniqueId": "c9584f70-c419-4fc4-b9b3-450fc3c74290"
            },
            "hboxcell1": {
                "flex": 1,
                "$items": [
                    "sn2"
                ]
            },
            "initiator1": {
                "ctype": "initiator",
                "persistence": true,
                "lockBinding": true,
                "fieldLabel": "建立人",
                "$bind": "CreateName",
                "uniqueId": "26ef93f0-cec2-4b2b-ab81-7e3b72d1d1ee"
            },
            "hboxcell5": {
                "flex": 1,
                "$items": [
                    "initiator1"
                ]
            },
            "dept1": {
                "ctype": "dept",
                "persistence": true,
                "lockBinding": true,
                "fieldLabel": "所屬部門",
                "showFullPath": false,
                "$bind": "Dept",
                "uniqueId": "53ad3113-c063-4f17-96cb-1637e4e75216"
            },
            "hboxcell2": {
                "flex": 1,
                "$items": [
                    "dept1"
                ]
            },
            "starttime1": {
                "ctype": "starttime",
                "persistence": true,
                "lockBinding": true,
                "fieldLabel": "申請日期",
                "$bind": "CreateTime",
                "uniqueId": "a3b95531-c18d-4754-a316-b5092b2e8ba0"
            },
            "hboxcell10": {
                "flex": 1,
                "$items": [
                    "starttime1"
                ]
            },
            "hbox1": {
                "ctype": "hbox",
                "layout": {
                    "align": "stretch"
                },
                "$items": [
                    "hboxcell1",
                    "hboxcell5",
                    "hboxcell2",
                    "hboxcell10"
                ]
            },
            "segmentbar2": {
                "ctype": "segmentbar",
                "title": "基本資訊",
                "uniqueId": "1389150a-b6ff-4e46-9404-32868d9f8fcc"
            },
            "combobox1": {
                "ctype": "combobox",
                "fieldLabel": "申請會議室",
                "lockBinding": true,
                "emptyText": "--請選擇--",
                "use": "options",
                "ds": {},
                "options": [
                    {
                        "text": "會議室一",
                        "value": "會議室一",
                        "checked": true,
                        "uniqueId": "26550b01-b06a-43f5-875c-9d4358661757"
                    },
                    {
                        "text": "會議室二",
                        "value": "會議室二",
                        "uniqueId": "50c75f0b-a372-4b32-9cce-7c6d0313a411"
                    },
                    {
                        "text": "會議室三",
                        "value": "會議室三",
                        "uniqueId": "6ba6c5d2-7649-4b18-aa58-f650dc7c3454"
                    }
                ],
                "itemsSearch": true,
                "$bind": "MeetApp",
                "uniqueId": "d4f62ed5-9384-4877-a9a5-ebec0545d1d0"
            },
            "hboxcell3": {
                "flex": 1,
                "$items": [
                    "combobox1"
                ]
            },
            "text5": {
                "ctype": "text",
                "fieldLabel": "會議主題",
                "lockBinding": true,
                "allowBlank": false,
                "$bind": "MeetTheme",
                "uniqueId": "1c9b2bb3-6653-48b4-8dea-bc04adfc0710"
            },
            "hboxcell6": {
                "flex": 1,
                "$items": [
                    "text5"
                ]
            },
            "text3": {
                "ctype": "text",
                "fieldLabel": "參加人數",
                "lockBinding": true,
                "allowBlank": false,
                "$bind": "ParticipantsNum",
                "uniqueId": "3c080160-44de-4cc1-9088-938314b00d00"
            },
            "hboxcell4": {
                "flex": 1,
                "$items": [
                    "text3"
                ]
            },
            "hbox2": {
                "ctype": "hbox",
                "layout": {
                    "align": "stretch"
                },
                "$items": [
                    "hboxcell3",
                    "hboxcell6",
                    "hboxcell4"
                ]
            },
            "datetime1": {
                "ctype": "datetime",
                "fieldLabel": "使用開始時間",
                "lockBinding": true,
                "type": "YmdHi",
                "allowBlank": false,
                "$bind": "StartDate",
                "uniqueId": "d43c6955-9ba1-46f2-b942-9bb18bcd8e0e"
            },
            "tablecell1": {
                "$items": [
                    "datetime1"
                ]
            },
            "datetime2": {
                "ctype": "datetime",
                "fieldLabel": "使用結束時間",
                "lockBinding": true,
                "type": "YmdHi",
                "allowBlank": false,
                "$bind": "EndDate",
                "uniqueId": "a9a5452a-0624-4b67-9176-f55da9b2dae6"
            },
            "tablecell2": {
                "$items": [
                    "datetime2"
                ]
            },
            "tablecell3": {
                "$items": []
            },
            "checkboxgroup1": {
                "ctype": "checkboxgroup",
                "maxLength": 200,
                "fieldLabel": "設備要求",
                "lockBinding": true,
                "items": [
                    {
                        "boxLabel": "投影機/螢幕",
                        "inputValue": "投影機/螢幕",
                        "checked": true,
                        "uniqueId": "4945a94e-25cd-493b-8f85-45878268a645"
                    },
                    {
                        "boxLabel": "白板/馬克筆",
                        "inputValue": "白板/馬克筆",
                        "checked": false,
                        "uniqueId": "39d3341c-a617-4b48-9f94-20ac29ad6e68"
                    },
                    {
                        "boxLabel": "視訊設備",
                        "inputValue": "視訊設備",
                        "checked": false,
                        "uniqueId": "2ec761aa-7dd2-4d41-a700-1cd2ed82ca5f"
                    },
                    {
                        "boxLabel": "音箱設備",
                        "inputValue": "音箱設備",
                        "checked": false,
                        "uniqueId": "38f9f05a-383a-48ad-9d1f-decda8a94501"
                    },
                    {
                        "boxLabel": "其他",
                        "inputValue": "其他",
                        "checked": false,
                        "uniqueId": "25c78e91-2d4a-4c67-861a-b623a9065989"
                    }
                ],
                "columns": 3,
                "$bind": "MeetDevice",
                "uniqueId": "cca8def6-b256-456f-abd5-52f877d73ef3"
            },
            "tablecell4": {
                "$items": [
                    "checkboxgroup1"
                ]
            },
            "text1": {
                "ctype": "text",
                "fieldLabel": "其他設備要求",
                "allowBlank": false,
                "$hidden": "VerifyDeviceType(MeetDevice)",
                "$disable": "VerifyDeviceType(MeetDevice)",
                "lockBinding": true,
                "$bind": "OtherDevice",
                "uniqueId": "8239b0cd-02e7-4076-a070-7d0a82791228"
            },
            "tablecell5": {
                "$items": [
                    "text1"
                ]
            },
            "tablecell6": {
                "$items": []
            },
            "table1": {
                "ctype": "table",
                "columns": 3,
                "cellVerticalAlign": "middle",
                "$items": [
                    "tablecell1",
                    "tablecell2",
                    "tablecell3",
                    "tablecell4",
                    "tablecell5",
                    "tablecell6"
                ]
            },
            "textarea2": {
                "ctype": "textarea",
                "maxLength": 500,
                "fieldLabel": "會議內容",
                "lockBinding": true,
                "allowBlank": false,
                "grow": true,
                "growMin": 71,
                "growMax": 171,
                "$bind": "MeetContent",
                "uniqueId": "32aebbc0-ce3a-4fb4-8ea7-0ab70440c88a"
            },
            "textarea1": {
                "ctype": "textarea",
                "maxLength": 500,
                "fieldLabel": "其他要求",
                "lockBinding": true,
                "grow": true,
                "growMin": 71,
                "growMax": 171,
                "$bind": "OtherRemarks",
                "uniqueId": "b27f5aab-d8f3-41d0-a616-89ca0d0b4f81"
            },
            "hboxcell11": {
                "flex": 1,
                "$items": [
                    "textarea1"
                ]
            },
            "hbox4": {
                "ctype": "hbox",
                "layout": {
                    "align": "stretch"
                },
                "$items": [
                    "hboxcell11"
                ]
            },
            "segmentbar3": {
                "ctype": "segmentbar",
                "title": "隱藏欄位",
                "$hidden": "1",
                "uniqueId": "d51dc873-fa14-42c8-8de4-9701a39e1a9d"
            }
        },
        "$items": [
            "formtitle1",
            "segmentbar1",
            "hbox1",
            "segmentbar2",
            "hbox2",
            "table1",
            "textarea2",
            "hbox4",
            "segmentbar3"
        ]
    },

    initComponent: function(){
        var me = this;

        me.callParent(arguments);
    }
});
x
