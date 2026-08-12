Ext.define('ZHYSoft.form.NewForm', {
    extend: 'ZHYSoft.form.AbstractForm',
    bodyPadding: 20,
    funcs: { //自訂計算函數
        GetCurrentLanguage:function(){
            var language= globalThis.localStorage.language;
            if(language)
            	return language;
            else
                return ZHYSoft.sysCulture;
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
                "title": "用印申請",
                "razortag": "PlantFormTitle",
                "uniqueId": "234f0c3f-a65d-49a6-bf06-6c6c83779ef5"
            },
            "segmentbar1": {
                "ctype": "segmentbar",
                "title": "申請資訊",
                "uniqueId": "4cc74969-d26f-4842-81e0-d7eb79c3559c"
            },
            "sn1": {
                "ctype": "sn",
                "persistence": true,
                "fieldLabel": "流水號",
                "lockBinding": true,
                "$bind": "SerialNumber",
                "uniqueId": "dae2bb1f-2937-4f25-8ce0-ed03d2c53745"
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
                "uniqueId": "9224d2b5-033d-4350-a2ff-df9ca176cb93"
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
                "uniqueId": "f2f00b89-3d5d-426c-ae67-0636d13fa10b"
            },
            "tablecell4": {
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
                "uniqueId": "911e0f47-0fd0-4138-a720-ca7f2b07ff97"
            },
            "tablecell5": {
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
                    "tablecell4",
                    "tablecell5"
                ]
            },
            "segmentbar2": {
                "ctype": "segmentbar",
                "title": "用印信息",
                "uniqueId": "dc5e46e9-73e7-4e1a-be4a-2f0742dddc3d"
            },
            "combobox1": {
                "ctype": "combobox",
                "fieldLabel": "文件類別",
                "emptyText": "--請選擇--",
                "allowBlank": false,
                "use": "ds",
                "ds": {
                    "type": "esb",
                    "esbId": "710722934849605",
                    "filter": {
                        "CurrentLanguage": {
                            "op": "=",
                            "field": "CurrentLanguage"
                        },
                        "DataType": {
                            "op": "=",
                            "value": "文件類別"
                        }
                    }
                },
                "options": [],
                "lockBinding": true,
                "valueField": "DataCode",
                "displayField": "DataName",
                "$bind": "FileType",
                "uniqueId": "3162cc69-8162-4c8f-92bb-f2f47e0aa351"
            },
            "tablecell6": {
                "$items": [
                    "combobox1"
                ]
            },
            "text1": {
                "ctype": "text",
                "fieldLabel": "檔案名稱",
                "allowBlank": false,
                "lockBinding": true,
                "$bind": "FileName",
                "uniqueId": "46662e23-6147-4c0e-9442-fb8c292af1b8"
            },
            "tablecell7": {
                "$items": [
                    "text1"
                ]
            },
            "combobox2": {
                "ctype": "combobox",
                "fieldLabel": "印鑑類別",
                "emptyText": "--請選擇--",
                "allowBlank": false,
                "use": "ds",
                "ds": {
                    "type": "esb",
                    "esbId": "710728057614405",
                    "filter": {
                        "CurrentLanguage": {
                            "op": "=",
                            "field": "CurrentLanguage"
                        }
                    }
                },
                "options": [],
                "lockBinding": true,
                "valueField": "SealCode",
                "displayField": "SealName",
                "$map": {
                    "SealName": "SealName",
                    "SealAdmin": "SealAdmin"
                },
                "$bind": "SealCode",
                "uniqueId": "7bc25500-8404-4a29-89c9-ce4bc31857ae"
            },
            "text2": {
                "ctype": "text",
                "fieldLabel": "SealName",
                "lockBinding": true,
                "$hidden": "1",
                "$bind": "SealName",
                "uniqueId": "80cfb0ed-e4af-440c-a656-e1d4e6e01124"
            },
            "text3": {
                "ctype": "text",
                "fieldLabel": "印鑑負責人",
                "lockBinding": true,
                "$hidden": "1",
                "$bind": "SealAdmin",
                "uniqueId": "1fa49e15-9e70-4f7b-a84f-e7c96040c475"
            },
            "tablecell9": {
                "$items": [
                    "combobox2",
                    "text2",
                    "text3"
                ]
            },
            "radiogroup1": {
                "ctype": "radiogroup",
                "fieldLabel": "用印方式",
                "allowBlank": false,
                "items": [
                    {
                        "boxLabel": "蓋章",
                        "inputValue": "蓋章",
                        "checked": true,
                        "uniqueId": "5955ab07-6a38-43ec-94b2-396b5de9a979"
                    },
                    {
                        "boxLabel": "借用帶出",
                        "inputValue": "借用帶出",
                        "checked": false,
                        "uniqueId": "77b754e9-6cd4-4f0a-a058-b3f90d9df565"
                    }
                ],
                "columns": "auto",
                "lockBinding": true,
                "$bind": "SealMethod",
                "uniqueId": "c46e29cd-9632-40f7-a296-79f860429e18"
            },
            "text4": {
                "ctype": "text",
                "fieldLabel": "當前語言",
                "lockBinding": true,
                "$hidden": "1",
                "$express": "GetCurrentLanguage()",
                "$bind": "CurrentLanguage",
                "uniqueId": "46e3d9af-b8f3-4a4f-9405-85f30385430e"
            },
            "tablecell10": {
                "$items": [
                    "radiogroup1",
                    "text4"
                ]
            },
            "datetime1": {
                "ctype": "datetime",
                "fieldLabel": "預計使用時間",
                "allowBlank": false,
                "type": "Ymd",
                "lockBinding": true,
                "$bind": "EstimatedTime",
                "uniqueId": "d85b90b6-c785-49ed-ae86-f2aa6767fab3"
            },
            "tablecell11": {
                "$items": [
                    "datetime1"
                ]
            },
            "number1": {
                "ctype": "number",
                "fieldLabel": "用印份數",
                "allowBlank": false,
                "thousands": false,
                "digit": 0,
                "currency": null,
                "lockBinding": true,
                "suffix": null,
                "$bind": "SealNumber",
                "uniqueId": "2a5f5e96-6b34-451c-a91b-2c88b6aa408a"
            },
            "tablecell12": {
                "$items": [
                    "number1"
                ]
            },
            "textarea1": {
                "ctype": "textarea",
                "maxLength": 500,
                "fieldLabel": "用印事由",
                "allowBlank": false,
                "grow": true,
                "growMin": 71,
                "growMax": 171,
                "lockBinding": true,
                "$bind": "SealReason",
                "uniqueId": "039a616c-1a40-45ae-b71f-6649e521f480"
            },
            "tablecell13": {
                "$items": [
                    "textarea1"
                ],
                "colspan": 2
            },
            "attachment1": {
                "ctype": "attachment",
                "maxLength": 200,
                "fieldLabel": "蓋章文件",
                "fileTypes": "*.*",
                "typesDesc": "所有檔",
                "fileSizeLimit": "10MB",
                "maxNum": 0,
                "lockBinding": true,
                "$bind": "SealFile",
                "uniqueId": "c19f1622-4b16-40ee-a1a9-bd4a06e0d4db"
            },
            "tablecell3": {
                "colspan": 2,
                "$items": [
                    "attachment1"
                ]
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
                    "tablecell12",
                    "tablecell13",
                    "tablecell3"
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
        //me.$$$text4.setValue(ZHYSoft.sysCulture);
    }
});
