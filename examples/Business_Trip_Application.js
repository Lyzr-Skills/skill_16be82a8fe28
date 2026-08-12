Ext.define('ZHYSoft.form.NewForm', {
    extend: 'ZHYSoft.form.AbstractForm',
    bodyPadding: 20,
    funcs: { //自訂計算函數
    },
    validators: { //自訂驗證函數
    },
    definition: {
        "components": {
            "formtitle1": {
                "ctype": "formtitle",
                "title": "出差申請單",
                "razortag": "PlantFormTitle",
                "uniqueId": "e35f0c3f-c12d-49a6-bf06-6c6c83779ef5"
            },
            "segmentbar1": {
                "ctype": "segmentbar",
                "title": "基本申請資訊",
                "uniqueId": "0824c169-d26f-4842-81e0-d7eb79c3559c"
            },
            "sn1": {
                "ctype": "sn",
                "persistence": true,
                "fieldLabel": "流水號碼",
                "lockBinding": true,
                "$bind": "SerialNumber",
                "uniqueId": "eae2bb1f-827c-4f25-8ce0-ed03d2c53745"
            },
            "tablecell1": {
                "$items": [
                    "sn1"
                ]
            },
            "dept1": {
                "ctype": "dept",
                "fieldLabel": "申請部門",
                "showFullPath": false,
                "persistence": true,
                "lockBinding": true,
                "$bind": "Department",
                "uniqueId": "a224d2b5-12a4-4390-a2ff-df9ca176cb93"
            },
            "tablecell2": {
                "$items": [
                    "dept1"
                ]
            },
            "initiator1": {
                "ctype": "initiator",
                "fieldLabel": "申請人",
                "persistence": true,
                "lockBinding": true,
                "$bind": "Applicant",
                "uniqueId": "02f00b89-f52d-426c-ae67-0636d13fa10b"
            },
            "tablecell3": {
                "$items": [
                    "initiator1"
                ]
            },
            "text_position": {
                "ctype": "text",
                "fieldLabel": "職位",
                "lockBinding": true,
                "$express": "GetUserPosition()",
                "$bind": "Position",
                "uniqueId": "211e0f47-e23a-4138-a720-ca7f2b07ff97"
            },
            "tablecell_position": {
                "$items": [
                    "text_position"
                ]
            },
            "table1": {
                "ctype": "table",
                "columns": 2,
                "cellVerticalAlign": "middle",
                "$items": [
                    "tablecell1",
                    "tablecell2",
                    "tablecell3",
                    "tablecell_position"
                ],
                "uniqueId": "8bb255a0-5a3d-4c3d-b2a6-48530ba45067"
            },
            "segmentbar2": {
                "ctype": "segmentbar",
                "title": "出差預算與行程明細",
                "uniqueId": "0d453eb3-97c6-470b-9a8f-058ef1b25e57"
            },
            "number_budget": {
                "ctype": "number",
                "fieldLabel": "出差預算",
                "allowBlank": true,
                "thousands": true,
                "digit": 0,
                "currency": null,
                "lockBinding": true,
                "$bind": "Budget",
                "uniqueId": "bd281238-a159-47a7-ac3c-a71a11ccd70c"
            },
            "tablecell_budget": {
                "$items": [
                    "number_budget"
                ]
            },
            "tablecell_empty": {
                "$items": []
            },
            "table2": {
                "ctype": "table",
                "columns": 2,
                "cellVerticalAlign": "middle",
                "$items": [
                    "tablecell_budget",
                    "tablecell_empty"
                ],
                "uniqueId": "219f1622-4b16-40ee-a1a9-bd4a06e0d4db"
            },
            "datetime_date": {
                "ctype": "datetime",
                "fieldLabel": "出差日期",
                "allowBlank": false,
                "type": "Ymd",
                "lockBinding": true,
                "$bind": "TripDate",
                "uniqueId": "cd014af7-7f16-4d25-a5d3-4f8babef2aa7"
            },
            "text_destination": {
                "ctype": "text",
                "fieldLabel": "出差地點",
                "allowBlank": false,
                "lockBinding": true,
                "$bind": "Destination",
                "uniqueId": "b39a616c-1a40-45ae-b71f-6649e521f480"
            },
            "text_purpose": {
                "ctype": "text",
                "fieldLabel": "出差事由",
                "allowBlank": false,
                "lockBinding": true,
                "$bind": "Purpose",
                "uniqueId": "a46e29cd-9632-40f7-a296-79f860429e18"
            },
            "grid1": {
                "ctype": "grid",
                "title": "行程明細",
                "export2Excel": false,
                "$tools": [],
                "$items": [
                    "datetime_date",
                    "text_destination",
                    "text_purpose"
                ],
                "lockBinding": true,
                "$bind": "BusinessTripDetails",
                "uniqueId": "26e3d9af-b8f3-4a4f-9405-85f30385430e"
            }
        },
        "$items": [
            "formtitle1",
            "segmentbar1",
            "table1",
            "segmentbar2",
            "table2",
            "grid1"
        ]
    },

    initComponent: function(){
        var me = this;
        me.callParent(arguments);
    }
});
