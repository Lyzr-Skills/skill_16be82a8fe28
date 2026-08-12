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
                "title": "會議室預定",
                "razortag": "PlantFormTitle",
                "uniqueId": "81ce4b28-5fb6-49ad-a141-759a10ecf9aa"
            },
            "segmentbar1": {
                "ctype": "segmentbar",
                "title": "申請資訊",
                "uniqueId": "6e79b14b-b314-4fda-b1fe-a0d7568990dd"
            },
            "sn1": {
                "ctype": "sn",
                "persistence": true,
                "lockBinding": true,
                "fieldLabel": "流水號碼",
                "$bind": "Number",
                "uniqueId": "7906db32-996d-4ccb-861c-839a493d8b42"
            },
            "tablecell1": {
                "$items": [
                    "sn1"
                ]
            },
            "dept1": {
                "ctype": "dept",
                "persistence": true,
                "fieldLabel": "申請部門",
                "showFullPath": false,
                "lockBinding": true,
                "$bind": "Department",
                "uniqueId": "841d8562-d125-421c-acf7-a7203221d510"
            },
            "tablecell2": {
                "$items": [
                    "dept1"
                ]
            },
            "initiator1": {
                "ctype": "initiator",
                "persistence": true,
                "fieldLabel": "申請人",
                "lockBinding": true,
                "$bind": "Applicant",
                "uniqueId": "d6fd5262-7df2-4956-ac7b-3353b9b18ea3"
            },
            "tablecell4": {
                "$items": [
                    "initiator1"
                ]
            },
            "starttime1": {
                "ctype": "starttime",
                "persistence": true,
                "fieldLabel": "申請時間",
                "lockBinding": true,
                "$bind": "ApplicationDate",
                "uniqueId": "da3f8926-b11f-4b39-9a58-0a2073eeddf1"
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
                "title": "會議資訊",
                "uniqueId": "cc3b2466-dfcb-46e7-b02b-accd3e6907b4"
            },
            "text1": {
                "ctype": "text",
                "fieldLabel": "會議主題",
                "allowBlank": false,
                "lockBinding": true,
                "$bind": "Subject",
                "uniqueId": "e46f1d07-9df9-4d02-b0d0-4ee7fe7d4a06"
            },
            "tablecell3": {
                "colspan": 2,
                "$items": [
                    "text1"
                ]
            },
            "databrowser1": {
                "ctype": "databrowser",
                "fieldLabel": "會議室",
                "allowBlank": false,
                "enableValueConvert": false,
                "lockBinding": true,
                "dlgConfig": {
                    "title": "行政綜合類/會議室資訊"
                },
                "$bind": "MeetingName",
                "dataBrowser": {
                    "ds": {
                        "type": "form",
                        "formId": "676700236894277",
                        "formTable": "BDS_Meeting_Manage",
                        "filter": {}
                    },
                    "valueField": "Name",
                    "viewConfig": {
                        "columns": [
                            {
                                "columnName": "MeetingCode",
                                "displayName": "編碼",
                                "align": "left",
                                "width": 160
                            },
                            {
                                "columnName": "Name",
                                "displayName": "名稱",
                                "align": "left",
                                "width": 140
                            },
                            {
                                "columnName": "Capacity",
                                "displayName": "可容納人數",
                                "align": "left",
                                "width": 140
                            },
                            {
                                "columnName": "Location",
                                "displayName": "位置",
                                "align": "left",
                                "width": 100
                            }
                        ]
                    },
                    "$map": {
                        "MeetingCode": "MeetingCode"
                    }
                },
                "uniqueId": "d8620bcd-9611-4ec7-8abf-93ded7512041"
            },
            "tablecell8": {
                "$items": [
                    "databrowser1"
                ]
            },
            "number1": {
                "ctype": "number",
                "fieldLabel": "可容納人數",
                "thousands": false,
                "digit": 0,
                "currency": null,
                "lockBinding": true,
                "$disable": "1",
                "$bind": "Capacity",
                "suffix": null,
                "uniqueId": "bf17b984-b376-4aff-8f1f-c4c2fa322730"
            },
            "text7": {
                "ctype": "text",
                "fieldLabel": "會議室編碼",
                "lockBinding": true,
                "$hidden": "1",
                "$bind": "MeetingCode",
                "uniqueId": "38a31158-2645-432f-b69e-43e4716df424"
            },
            "tablecell9": {
                "$items": [
                    "number1",
                    "text7"
                ]
            },
            "dataview1": {
                "ctype": "dataview",
                "title": "會議室預約情況",
                "gridSettingColumns": [
                    {
                        "text": "申請單號",
                        "dataIndex": "Number",
                        "align": "center",
                        "flex": 1
                    },
                    {
                        "text": "申請人",
                        "dataIndex": "Applicant",
                        "align": "center",
                        "flex": 1
                    },
                    {
                        "text": "申請時間",
                        "dataIndex": "ApplicationDate",
                        "align": "center",
                        "dataFormat": {
                            "type": "date",
                            "format": "Y-m-d H:i"
                        },
                        "flex": 1
                    },
                    {
                        "text": "會議主題",
                        "dataIndex": "Subject",
                        "align": "center",
                        "flex": 1
                    },
                    {
                        "text": "開始時間",
                        "dataIndex": "StartTime",
                        "align": "center",
                        "dataFormat": {
                            "type": "date",
                            "format": "Y-m-d H:i"
                        },
                        "flex": 1
                    },
                    {
                        "text": "結束時間",
                        "dataIndex": "EndTime",
                        "align": "center",
                        "dataFormat": {
                            "type": "date",
                            "format": "Y-m-d H:i"
                        },
                        "flex": 1
                    }
                ],
                "enablePaging": true,
                "pageSize": 10,
                "ds": {
                    "type": "esb",
                    "esbId": "678513662836805",
                    "filter": {
                        "MeetingCode": {
                            "op": "=",
                            "field": "MeetingCode"
                        }
                    }
                },
                "uniqueId": "cef44cf4-6a37-46b8-9aa3-18f1693fa7c9"
            },
            "tablecell11": {
                "colspan": 2,
                "$items": [
                    "dataview1"
                ]
            },
            "text2": {
                "ctype": "text",
                "fieldLabel": "位置",
                "lockBinding": true,
                "$disable": "1",
                "$bind": "Location",
                "uniqueId": "aca428b8-22f1-44ef-870f-c3167de8aa55"
            },
            "tablecell10": {
                "colspan": 2,
                "$items": [
                    "text2"
                ]
            },
            "datetime1": {
                "ctype": "datetime",
                "fieldLabel": "開始時間",
                "allowBlank": false,
                "type": "YmdHi",
                "lockBinding": true,
                "$bind": "StartTime",
                "uniqueId": "decd8e81-b321-43df-b354-5c3e688e69ee"
            },
            "tablecell12": {
                "$items": [
                    "datetime1"
                ]
            },
            "datetime2": {
                "ctype": "datetime",
                "fieldLabel": "結束時間",
                "allowBlank": false,
                "type": "YmdHi",
                "lockBinding": true,
                "$bind": "EndTime",
                "uniqueId": "186b7ca8-dfc1-4012-90df-6cfd379df758"
            },
            "tablecell13": {
                "$items": [
                    "datetime2"
                ]
            },
            "number2": {
                "ctype": "number",
                "fieldLabel": "參會人數",
                "allowBlank": false,
                "thousands": false,
                "digit": 0,
                "currency": null,
                "lockBinding": true,
                "$bind": "Participants",
                "suffix": null,
                "uniqueId": "9c15fac0-d870-4ef9-af85-0492b9c8c80d"
            },
            "tablecell6": {
                "$items": [
                    "number2"
                ]
            },
            "attachment1": {
                "ctype": "attachment",
                "maxLength": 200,
                "fieldLabel": "會議材料",
                "fileTypes": "*.*",
                "typesDesc": "所有檔",
                "fileSizeLimit": "10MB",
                "maxNum": 0,
                "lockBinding": true,
                "$bind": "Materials",
                "uniqueId": "0cf6c523-b429-48cf-a1e7-a58863139989"
            },
            "tablecell7": {
                "$items": [
                    "attachment1"
                ]
            },
            "textarea1": {
                "ctype": "textarea",
                "maxLength": 500,
                "fieldLabel": "會議內容",
                "grow": true,
                "growMin": 71,
                "growMax": 171,
                "lockBinding": true,
                "$bind": "Content",
                "uniqueId": "026bce0a-a5c2-495d-8907-9ef967973c82"
            },
            "tablecell14": {
                "colspan": 2,
                "$items": [
                    "textarea1"
                ]
            },
            "table2": {
                "ctype": "table",
                "columns": 2,
                "cellVerticalAlign": "middle",
                "$items": [
                    "tablecell3",
                    "tablecell8",
                    "tablecell9",
                    "tablecell11",
                    "tablecell10",
                    "tablecell12",
                    "tablecell13",
                    "tablecell6",
                    "tablecell7",
                    "tablecell14"
                ]
            },
            "user1": {
                "ctype": "user",
                "fieldLabel": "參會人",
                "lockBinding": true,
                "$map": {
                    "name": "Meeting_Application_Personnel.Name",
                    "mobile": "Meeting_Application_Personnel.Mobile"
                },
                "$bind": "Account",
                "width": 202,
                "uniqueId": "d9998268-2aed-4e9f-8dc7-141609654bbd"
            },
            "text6": {
                "ctype": "text",
                "fieldLabel": "姓名",
                "$columnHidden": "1",
                "lockBinding": true,
                "$disable": "1",
                "$bind": "Name",
                "width": 162,
                "uniqueId": "0187a608-1710-473c-8ab5-dc9102f97a79"
            },
            "text4": {
                "ctype": "text",
                "fieldLabel": "電話",
                "$disable": "1",
                "lockBinding": true,
                "$bind": "Mobile",
                "width": 302,
                "uniqueId": "8a84db9b-1a49-4f50-bfb1-f2e25f3fa4d7"
            },
            "grid1": {
                "ctype": "grid",
                "title": "參會人員",
                "export2Excel": false,
                "$tools": [],
                "$items": [
                    "user1",
                    "text6",
                    "text4"
                ],
                "lockBinding": true,
                "$bind": "Meeting_Application_Personnel",
                "uniqueId": "1f5d37bc-f7a6-4ae1-88a8-02e100af0810"
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
        var currentLanguage = ZHYSoft.sysCulture;
    	if(currentLanguage!="zh-hans"){
        	var dataBrowser = me.$$$databrowser1;//會議室開窗查詢
        	var columns = dataBrowser.dataBrowser.viewConfig.columns;
        	// 定義不同語言的列名映射
        	var columnTranslations = {
            	'zh-hant': {
                	'MeetingCode': '編碼',
                	'Name': '名稱',
                	'Capacity': '可容納人數',
                	'Location': '位置'
            	},
            	'en-us': {
                	'MeetingCode': 'Code',
                	'Name': 'Name',
                	'Capacity': 'Capacity People',
                	'Location': 'Location'
            	}
        	};

        	// 獲取當前語言的翻譯映射
        	var translations = columnTranslations[currentLanguage];
        	// 更新列顯示名稱
        	Ext.Array.each(columns, function(column) {
            	var originalName = column.columnName;
            	if (translations[originalName]) {
                	column.displayName = translations[originalName];
            	}
        	});

        	// 刷新databrowser的顯示配置
        	if (dataBrowser.dataBrowserGrid) {
            	var grid = dataBrowser.dataBrowserGrid;
            	if (grid.reconfigure) {
                	grid.reconfigure(grid.getStore(), columns);
            	}
        	}

        	// 更新對話方塊標題（如果需要）
        	if (dataBrowser.dlgConfig) {
            	var dialogTitles = {
                	'zh-hant': '行政綜合類/會議室資訊',
                	'en-us': 'Administrative Comprehensive Category/Meeting Room Information'
            	};
            	dataBrowser.dlgConfig.title = dialogTitles[currentLanguage];
        	}
    	}
    }
});
