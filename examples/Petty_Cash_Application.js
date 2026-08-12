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
                "title": "零用金報銷申請單",
                "razortag": "PlantFormTitle",
                "uniqueId": "a35f0c3f-c12d-49a6-bf06-6c6c83779ef5"
            },
            "segmentbar1": {
                "ctype": "segmentbar",
                "title": "起草人資訊",
                "uniqueId": "f824c169-d26f-4842-81e0-d7eb79c3559c"
            },
            "sn1": {
                "ctype": "sn",
                "persistence": true,
                "fieldLabel": "流水號碼",
                "lockBinding": true,
                "$bind": "SerialNumber",
                "uniqueId": "dae2bb1f-827c-4f25-8ce0-ed03d2c53745"
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
                "uniqueId": "9224d2b5-12a4-4390-a2ff-df9ca176cb93"
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
                "uniqueId": "f2f00b89-f52d-426c-ae67-0636d13fa10b"
            },
            "tablecell3": {
                "$items": [
                    "initiator1"
                ]
            },
            "starttime1": {
                "ctype": "starttime",
                "fieldLabel": "申請時間",
                "persistence": true,
                "lockBinding": true,
                "$bind": "ApplicationDate",
                "uniqueId": "911e0f47-e23a-4138-a720-ca7f2b07ff97"
            },
            "tablecell4": {
                "$items": [
                    "starttime1"
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
                    "tablecell4"
                ],
                "uniqueId": "7bb255a0-5a3d-4c3d-b2a6-48530ba45067"
            },
            "segmentbar2": {
                "ctype": "segmentbar",
                "title": "報銷資訊與審核",
                "uniqueId": "bd453eb3-97c6-470b-9a8f-058ef1b25e57"
            },
            "text_reason": {
                "ctype": "text",
                "fieldLabel": "申請事由",
                "allowBlank": false,
                "lockBinding": true,
                "$bind": "Reason",
                "uniqueId": "d6281238-a159-47a7-ac3c-a71a11ccd70c"
            },
            "tablecell_reason": {
                "colspan": 2,
                "$items": [
                    "text_reason"
                ]
            },
            "number_amount": {
                "ctype": "number",
                "fieldLabel": "申請金額",
                "allowBlank": false,
                "thousands": true,
                "digit": 0,
                "currency": null,
                "lockBinding": true,
                "$bind": "Amount",
                "uniqueId": "ad014af7-7f16-4d25-a5d3-4f8babef2aa7"
            },
            "tablecell_amount": {
                "$items": [
                    "number_amount"
                ]
            },
            "tablecell_empty": {
                "$items": []
            },
            "textarea_remarks": {
                "ctype": "textarea",
                "maxLength": 500,
                "fieldLabel": "備註",
                "allowBlank": true,
                "grow": true,
                "growMin": 71,
                "growMax": 171,
                "lockBinding": true,
                "$bind": "Remarks",
                "uniqueId": "039a616c-1a40-45ae-b71f-6649e521f480"
            },
            "tablecell_remarks": {
                "colspan": 2,
                "$items": [
                    "textarea_remarks"
                ]
            },
            "user_admin": {
                "ctype": "user",
                "fieldLabel": "零用金負責人",
                "allowBlank": false,
                "lockBinding": true,
                "$map": {
                    "name": "PettyCashAdminName"
                },
                "$bind": "PettyCashAdmin",
                "uniqueId": "c46e29cd-9632-40f7-a296-79f860429e18"
            },
            "text_admin_name": {
                "ctype": "text",
                "fieldLabel": "負責人姓名",
                "lockBinding": true,
                "$hidden": "1",
                "$bind": "PettyCashAdminName",
                "uniqueId": "46e3d9af-b8f3-4a4f-9405-85f30385430e"
            },
            "tablecell_admin": {
                "$items": [
                    "user_admin",
                    "text_admin_name"
                ]
            },
            "datetime_disb": {
                "ctype": "datetime",
                "fieldLabel": "零用金核發日",
                "allowBlank": false,
                "type": "Ymd",
                "lockBinding": true,
                "$bind": "DisbursementDate",
                "uniqueId": "d85b90b6-c785-49ed-ae86-f2aa6767fab3"
            },
            "tablecell_disb": {
                "$items": [
                    "datetime_disb"
                ]
            },
            "table2": {
                "ctype": "table",
                "columns": 2,
                "cellVerticalAlign": "middle",
                "$items": [
                    "tablecell_reason",
                    "tablecell_amount",
                    "tablecell_empty",
                    "tablecell_remarks",
                    "tablecell_admin",
                    "tablecell_disb"
                ],
                "uniqueId": "c19f1622-4b16-40ee-a1a9-bd4a06e0d4db"
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
