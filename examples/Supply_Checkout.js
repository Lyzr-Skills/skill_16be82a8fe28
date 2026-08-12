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
                "title": "辦公用品領用",
                "razortag": "PlantFormTitle",
                "uniqueId": "9e4a2ec8-4863-441b-95ea-64c4fa549470"
            },
            "segmentbar1": {
                "ctype": "segmentbar",
                "title": "建立資訊",
                "uniqueId": "5bd122ce-6b39-4bfd-b22a-4d4145f80499"
            },
            "sn1": {
                "ctype": "sn",
                "fieldLabel": "流水號碼",
                "persistence": true,
                "lockBinding": true,
                "$bind": "Number",
                "uniqueId": "fbf28338-e94b-45d6-8e15-25e698545ef5"
            },
            "tablecell6": {
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
                "uniqueId": "795d1b3c-7c85-4cf1-9ae0-bbaca1cef106"
            },
            "tablecell7": {
                "$items": [
                    "dept1"
                ]
            },
            "initiator1": {
                "ctype": "initiator",
                "persistence": true,
                "fieldLabel": "申請人",
                "lockBinding": true,
                "$bind": "CreateUser",
                "uniqueId": "64c8fe5c-8739-4600-81b9-d752986fd614"
            },
            "tablecell9": {
                "$items": [
                    "initiator1"
                ]
            },
            "starttime1": {
                "ctype": "starttime",
                "persistence": true,
                "fieldLabel": "申請時間",
                "lockBinding": true,
                "$bind": "CreateTime",
                "uniqueId": "a8a9c2d7-1561-4761-a8e7-a79ecb2e9c52"
            },
            "tablecell10": {
                "$items": [
                    "starttime1"
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
                    "tablecell10"
                ]
            },
            "segmentbar2": {
                "ctype": "segmentbar",
                "title": "領用信息",
                "uniqueId": "12145742-f8a2-42c1-9bf2-3e954a87bf8d"
            },
            "radiogroup1": {
                "ctype": "radiogroup",
                "fieldLabel": "緊急程度",
                "allowBlank": false,
                "items": [
                    {
                        "boxLabel": "正常",
                        "inputValue": "正常",
                        "checked": false,
                        "uniqueId": "25751351-a774-40e1-aef7-529e1f134973"
                    },
                    {
                        "boxLabel": "重要",
                        "inputValue": "重要",
                        "checked": false,
                        "uniqueId": "e0e4a008-e486-422b-aabf-3dbc90af9029"
                    },
                    {
                        "boxLabel": "緊急",
                        "inputValue": "緊急",
                        "checked": false,
                        "uniqueId": "39b02f6e-41e3-41b0-8d47-de87a447ca7c"
                    }
                ],
                "columns": "auto",
                "lockBinding": true,
                "$bind": "Urgencylevel",
                "uniqueId": "dbf550fa-c7cc-4d7f-9ebc-a13a399425e3"
            },
            "tablecell1": {
                "$items": [
                    "radiogroup1"
                ]
            },
            "datetime1": {
                "ctype": "datetime",
                "fieldLabel": "需要日期",
                "allowBlank": false,
                "type": "Ymd",
                "lockBinding": true,
                "$bind": "RequiredDate",
                "uniqueId": "44b6f582-d80c-4621-9877-a68e34f2845d"
            },
            "tablecell2": {
                "$items": [
                    "datetime1"
                ]
            },
            "textarea1": {
                "ctype": "textarea",
                "maxLength": 500,
                "fieldLabel": "領用原因",
                "allowBlank": false,
                "grow": true,
                "growMin": 71,
                "growMax": 171,
                "lockBinding": true,
                "$bind": "Reason",
                "uniqueId": "b53919ab-f4ee-4637-984b-085d9783b608"
            },
            "tablecell4": {
                "colspan": 2,
                "$items": [
                    "textarea1"
                ]
            },
            "table1": {
                "ctype": "table",
                "columns": 2,
                "cellVerticalAlign": "middle",
                "$items": [
                    "tablecell1",
                    "tablecell2",
                    "tablecell4"
                ]
            },
            "databrowser1": {
                "ctype": "databrowser",
                "fieldLabel": "辦公用品編碼",
                "allowBlank": false,
                "enableValueConvert": false,
                "lockBinding": true,
                "dlgConfig": {
                    "title": "行政綜合類/辦公用品資訊"
                },
                "$bind": "SuppliesCode",
                "width": 162,
                "dataBrowser": {
                    "ds": {
                        "type": "form",
                        "formId": "676721668321349",
                        "formTable": "BDS_Supplies_Manage",
                        "filter": {}
                    },
                    "valueField": "SuppliesCode",
                    "viewConfig": {
                        "columns": [
                            {
                                "columnName": "SuppliesCode",
                                "displayName": "辦公用品編碼",
                                "align": "left",
                                "width": 160
                            },
                            {
                                "columnName": "SuppliesName",
                                "displayName": "名稱",
                                "align": "left",
                                "width": 180
                            },
                            {
                                "columnName": "Unit",
                                "displayName": "單位",
                                "align": "left",
                                "width": 100
                            },
                            {
                                "columnName": "Price",
                                "displayName": "單價",
                                "align": "left",
                                "width": 100
                            },
                            {
                                "columnName": "Location",
                                "displayName": "存放位置",
                                "align": "left",
                                "width": 100
                            },
                            {
                                "columnName": "Inventory",
                                "displayName": "庫存",
                                "align": "left",
                                "width": 100
                            }
                        ]
                    },
                    "$map": {
                        "SuppliesName": "Details.SuppliesName"
                    }
                },
                "uniqueId": "238972b8-9ee2-45d7-a3aa-278a8216d3ba"
            },
            "text1": {
                "ctype": "text",
                "fieldLabel": "辦公用品名稱",
                "lockBinding": true,
                "$disable": "1",
                "$bind": "SuppliesName",
                "width": 162,
                "uniqueId": "428fac77-3711-4ce4-b336-cce20248a638"
            },
            "number1": {
                "ctype": "number",
                "fieldLabel": "領用數量",
                "allowBlank": false,
                "thousands": false,
                "digit": 2,
                "currency": null,
                "lockBinding": true,
                "$bind": "CheckOutNumber",
                "width": 162,
                "suffix": null,
                "uniqueId": "ad014af7-7f16-4d25-a5d3-4f8babef2aa7"
            },
            "grid1": {
                "ctype": "grid",
                "title": "領用明細",
                "export2Excel": false,
                "$tools": [],
                "$items": [
                    "databrowser1",
                    "text1",
                    "number1"
                ],
                "lockBinding": true,
                "$bind": "Details",
                "uniqueId": "84b8889f-a9a2-4155-b6b8-6dd533221052"
            }
        },
        "$items": [
            "formtitle1",
            "segmentbar1",
            "table2",
            "segmentbar2",
            "table1",
            "grid1"
        ]
    },
    initComponent: function(){
        var me = this;
        me.callParent(arguments);
        var currentLanguage = ZHYSoft.sysCulture;
    	if(currentLanguage!="zh-hans"){
        	var dataBrowser = me.$$$grid1.columns[1].initialConfig.widget;//辦公用品編碼開窗查詢
        	var columns = dataBrowser.dataBrowser.viewConfig.columns;
        	// 定義不同語言的列名映射
        	var columnTranslations = {
            	'zh-hant': {
                	'SuppliesCode': '辦公用品編碼',
                	'SuppliesName': '辦公用品名稱',
                	'Unit': '單位',
                	'Price': '單價',
                	'Location': '存放位置',
                	'Inventory': '庫存'
            	},
            	'en-us': {
                	'SuppliesCode': 'Office Supplies Code',
                	'SuppliesName': 'Office Supplies Name',
                	'Unit': 'Unit',
                	'Price': 'Unit Price',
                	'Location': 'Location',
                	'Inventory': 'Inventory'
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
                	'zh-hant': '行政綜合類/辦公用品資訊',
                	'en-us': 'Administrative Comprehensive Category/Office Supplies Information'
            	};
            	dataBrowser.dlgConfig.title = dialogTitles[currentLanguage];
        	}
    	}
    }
});
