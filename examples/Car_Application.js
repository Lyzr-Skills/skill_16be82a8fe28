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
                "title": "用車申請",
                "razortag": "PlantFormTitle",
                "uniqueId": "064988d3-f41a-444f-b043-a51e70877d71"
            },
            "segmentbar1": {
                "ctype": "segmentbar",
                "title": "申請資訊",
                "uniqueId": "16dc31e8-594e-4fe4-936a-8410d4b18ad0"
            },
            "sn1": {
                "ctype": "sn",
                "persistence": true,
                "fieldLabel": "流水號",
                "lockBinding": true,
                "$bind": "Number",
                "uniqueId": "6f1680a7-1464-4243-9ac4-a3d76993ce8c"
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
                "$bind": "ApplicantDepartment",
                "uniqueId": "710ab5d8-1ba4-4dfe-91d0-3ebf417c5289"
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
                "uniqueId": "1a4b8867-decb-4318-bc8b-d5f3ef5f0d15"
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
                "uniqueId": "5643af14-1b99-414d-9149-d4e9c2e1c401"
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
                "title": "用車信息",
                "uniqueId": "bd453eb3-97c6-470b-9a8f-058ef1b25e57"
            },
            "text1": {
                "ctype": "text",
                "fieldLabel": "用車原因",
                "allowBlank": false,
                "lockBinding": true,
                "$bind": "Reason",
                "uniqueId": "d6281238-a159-47a7-ac3c-a71a11ccd70c"
            },
            "tablecell6": {
                "$items": [
                    "text1"
                ]
            },
            "ou1": {
                "ctype": "ou",
                "fieldLabel": "用車部門",
                "allowBlank": false,
                "showFullPath": true,
                "lockBinding": true,
                "$bind": "Department",
                "uniqueId": "28d15503-82a6-4afa-bc57-a56e81ffed30"
            },
            "tablecell7": {
                "$items": [
                    "ou1"
                ]
            },
            "databrowser1": {
                "ctype": "databrowser",
                "fieldLabel": "車牌號",
                "allowBlank": false,
                "enableValueConvert": false,
                "lockBinding": true,
                "dlgConfig": {
                    "title": "行政綜合類/車輛資訊",
                    "width": 1100
                },
                "$bind": "Plate",
                "dataBrowser": {
                    "ds": {
                        "type": "form",
                        "formId": "676285069979717",
                        "formTable": "BDS_Car_Manage",
                        "orderBy": "",
                        "filter": {
                            "IsSealed": {
                                "op": "=",
                                "value": 0
                            }
                        }
                    },
                    "valueField": "Plate",
                    "viewConfig": {
                        "columns": [
                            {
                                "columnName": "Plate",
                                "displayName": "車牌號",
                                "align": "left",
                                "width": 180
                            },
                            {
                                "columnName": "Organization",
                                "displayName": "所屬機構",
                                "align": "left",
                                "width": 140
                            },
                            {
                                "columnName": "Type",
                                "displayName": "車輛類型",
                                "align": "left",
                                "width": 140
                            },
                            {
                                "columnName": "Cost",
                                "displayName": "費用",
                                "align": "left",
                                "width": 80
                            },
                            {
                                "columnName": "Model",
                                "displayName": "廠牌型號",
                                "align": "left",
                                "width": 140
                            },
                            {
                                "columnName": "Price",
                                "displayName": "購買價格",
                                "align": "left",
                                "width": 140
                            },
                            {
                                "columnName": "PurchaseDate",
                                "displayName": "購置日期",
                                "align": "left",
                                "width": 140
                            }
                        ]
                    },
                    "$map": {
                        "CarAdmin": "CarAdmin",
                        "CarAdminName": "CarAdminName"
                    }
                },
                "uniqueId": "74cc8951-315f-4ef5-8fed-feb04b75bcf1"
            },
            "text4": {
                "ctype": "text",
                "fieldLabel": "車輛負責人",
                "lockBinding": true,
                "$hidden": "1",
                "$disable": "1",
                "$bind": "CarAdmin",
                "uniqueId": "258a84f1-4f6c-4c03-8e4b-bbc7dace0578"
            },
            "tablecell9": {
                "$items": [
                    "databrowser1",
                    "text4"
                ]
            },
            "text5": {
                "ctype": "text",
                "fieldLabel": "車輛負責人",
                "lockBinding": true,
                "$disable": "1",
                "$bind": "CarAdminName",
                "uniqueId": "c0cf8773-6157-43dd-837e-ea3194351b52"
            },
            "tablecell10": {
                "$items": [
                    "text5"
                ]
            },
            "datetime1": {
                "ctype": "datetime",
                "fieldLabel": "開始日期",
                "allowBlank": false,
                "type": "YmdHi",
                "lockBinding": true,
                "$bind": "StartTime",
                "uniqueId": "52d7a65e-dd69-4b7e-9338-52f200e011fb"
            },
            "tablecell11": {
                "$items": [
                    "datetime1"
                ]
            },
            "datetime2": {
                "ctype": "datetime",
                "fieldLabel": "結束日期",
                "allowBlank": false,
                "type": "YmdHi",
                "lockBinding": true,
                "$bind": "EndTime",
                "uniqueId": "15d79290-65f9-48bc-99e8-9de146788640"
            },
            "tablecell12": {
                "$items": [
                    "datetime2"
                ]
            },
            "text2": {
                "ctype": "text",
                "fieldLabel": "起始位置",
                "allowBlank": false,
                "lockBinding": true,
                "$bind": "StartLocation",
                "uniqueId": "218abeb8-ee08-44aa-86c8-42bb7f5f21b7"
            },
            "tablecell13": {
                "$items": [
                    "text2"
                ]
            },
            "text3": {
                "ctype": "text",
                "fieldLabel": "到達位置",
                "allowBlank": false,
                "lockBinding": true,
                "$bind": "EndLocation",
                "uniqueId": "5ce9509b-77a2-4147-ae5b-7f7d0f7f9617"
            },
            "tablecell14": {
                "$items": [
                    "text3"
                ]
            },
            "number1": {
                "ctype": "number",
                "fieldLabel": "行駛預計里程",
                "allowBlank": false,
                "thousands": false,
                "digit": 2,
                "currency": null,
                "lockBinding": true,
                "$bind": "EstimatedMileage",
                "suffix": null,
                "uniqueId": "008edb55-eac7-499a-aea4-abc7ab5c6a38"
            },
            "tablecell15": {
                "$items": [
                    "number1"
                ]
            },
            "number2": {
                "ctype": "number",
                "fieldLabel": "用車預計費用",
                "allowBlank": false,
                "thousands": false,
                "digit": 2,
                "currency": null,
                "lockBinding": true,
                "$bind": "EstimatedCost",
                "suffix": null,
                "uniqueId": "7105170a-dd77-42a7-9eae-7414e29e9f38"
            },
            "tablecell16": {
                "$items": [
                    "number2"
                ]
            },
            "textarea1": {
                "ctype": "textarea",
                "maxLength": 500,
                "fieldLabel": "事由",
                "grow": true,
                "growMin": 71,
                "growMax": 171,
                "lockBinding": true,
                "$bind": "Notes",
                "uniqueId": "a4d7d2b4-3934-427f-9578-b38290cb7959"
            },
            "tablecell17": {
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
                    "tablecell6",
                    "tablecell7",
                    "tablecell9",
                    "tablecell10",
                    "tablecell11",
                    "tablecell12",
                    "tablecell13",
                    "tablecell14",
                    "tablecell15",
                    "tablecell16",
                    "tablecell17"
                ]
            },
            "segmentbar3": {
                "ctype": "segmentbar",
                "title": "借車記錄",
                "uniqueId": "82f6cabe-1ca2-457b-8846-18cfa950fea2"
            },
            "number3": {
                "ctype": "number",
                "fieldLabel": "行駛里程",
                "lockBinding": true,
                "thousands": false,
                "digit": 2,
                "currency": null,
                "$bind": "StartMileage",
                "suffix": null,
                "uniqueId": "42aa57a6-4192-4503-a154-58a7c58a18f0"
            },
            "tablecell3": {
                "$items": [
                    "number3"
                ]
            },
            "number4": {
                "ctype": "number",
                "fieldLabel": "油量",
                "lockBinding": true,
                "thousands": false,
                "digit": 2,
                "currency": null,
                "$bind": "StartFuel",
                "suffix": null,
                "uniqueId": "3f1fcefb-3635-488f-ac8a-dce8ca617289"
            },
            "tablecell8": {
                "$items": [
                    "number4"
                ]
            },
            "table3": {
                "ctype": "table",
                "columns": 2,
                "cellVerticalAlign": "middle",
                "$items": [
                    "tablecell3",
                    "tablecell8"
                ]
            },
            "segmentbar4": {
                "ctype": "segmentbar",
                "title": "還車記錄",
                "uniqueId": "aa8cf391-f387-4ee4-997d-7342c06fbfa2"
            },
            "number5": {
                "ctype": "number",
                "fieldLabel": "行駛里程",
                "lockBinding": true,
                "thousands": false,
                "digit": 2,
                "currency": null,
                "$bind": "EndMileage",
                "suffix": null,
                "uniqueId": "5e812ce7-db4d-4473-b31d-ba0904faccd8"
            },
            "tablecell19": {
                "$items": [
                    "number5"
                ]
            },
            "number6": {
                "ctype": "number",
                "fieldLabel": "油量",
                "lockBinding": true,
                "thousands": false,
                "digit": 2,
                "currency": null,
                "$bind": "EndFuel",
                "suffix": null,
                "uniqueId": "0a1414a7-e9ae-4dcc-9eef-558937670413"
            },
            "tablecell20": {
                "$items": [
                    "number6"
                ]
            },
            "table4": {
                "ctype": "table",
                "columns": 2,
                "cellVerticalAlign": "middle",
                "$items": [
                    "tablecell19",
                    "tablecell20"
                ]
            }
        },
        "$items": [
            "formtitle1",
            "segmentbar1",
            "table1",
            "segmentbar2",
            "table2",
            "segmentbar3",
            "table3",
            "segmentbar4",
            "table4"
        ]
    },
    initComponent: function(){
        var me = this;
        me.callParent(arguments);
        var currentLanguage = ZHYSoft.sysCulture;
    	if(currentLanguage!="zh-hans"){
        	var dataBrowser = me.$$$databrowser1;//車牌號開窗查詢
        	var columns = dataBrowser.dataBrowser.viewConfig.columns;
        	// 定義不同語言的列名映射
        	var columnTranslations = {
            	'zh-hant': {
                	'Plate': '車牌號',
                	'Organization': '所屬機構',
                	'Type': '車輛類型',
                	'Cost': '費用',
                	'Model': '廠牌型號',
                	'Price': '購買價格',
                	'PurchaseDate': '購置日期',
                	'Driver': '司機'
            	},
            	'en-us': {
                	'Plate': 'License Plate Number',
                	'Organization': 'Organization',
                	'Type': 'Vehicle Type',
                	'Cost': 'Cost',
                	'Model': 'Brand Model',
                	'Price': 'Purchase Price',
                	'PurchaseDate': 'Purchase Date',
                	'Driver': 'Driver'
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
                	'zh-hant': '行政綜合類/車輛資訊',
                	'en-us': 'Administrative Comprehensive Category/Vehicle Information'
            	};
            	dataBrowser.dlgConfig.title = dialogTitles[currentLanguage];
        	}
    	}
    }
});
