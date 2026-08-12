Ext.define('ZHYSoft.form.NewForm', {
    extend: 'ZHYSoft.form.AbstractForm',
    bodyPadding: 20,
    funcs: { //自訂計算函數
        //計算函數名: function(a, b){
        //    return a*b+1;
        //}
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
                "title": "車輛維護",
                "razortag": "PlantFormTitle",
                "uniqueId": "9ee70444-5e88-4a4a-a3a1-27cdf7c7241a"
            },
            "segmentbar1": {
                "ctype": "segmentbar",
                "title": "新增資訊",
                "uniqueId": "713e7e6c-8786-4a47-8b4c-c48ec38fa8a1"
            },
            "initiator1": {
                "ctype": "initiator",
                "persistence": true,
                "fieldLabel": "申請人",
                "lockBinding": true,
                "$bind": "CreateUser",
                "uniqueId": "65a22819-f2bd-4a42-bf6d-3480d02b49a6"
            },
            "tablecell1": {
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
                "uniqueId": "36db44bd-8b78-48d8-b464-a70585024097"
            },
            "tablecell2": {
                "$items": [
                    "starttime1"
                ]
            },
            "text1": {
                "ctype": "text",
                "fieldLabel": "修改人",
                "$disable": "1",
                "lockBinding": true,
                "$bind": "UpdateUser",
                "uniqueId": "08fdabb6-9ba5-4366-bae0-3c629c4c04e8"
            },
            "tablecell4": {
                "$items": [
                    "text1"
                ]
            },
            "datetime1": {
                "ctype": "datetime",
                "fieldLabel": "修改時間",
                "$disable": "1",
                "type": "YmdHi",
                "lockBinding": true,
                "$bind": "UpdateTime",
                "uniqueId": "56d1c5dc-b679-4a5b-8d6f-51d61917364c"
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
                "title": "車輛資訊",
                "uniqueId": "ff69380e-0524-42ad-84ba-07a42f8f13d8"
            },
            "text3": {
                "ctype": "text",
                "fieldLabel": "車牌號碼",
                "allowBlank": false,
                "lockBinding": true,
                "$bind": "Plate",
                "uniqueId": "246cdfd1-ba37-4bf9-89d1-b379e716c525"
            },
            "tablecell7": {
                "$items": [
                    "text3"
                ]
            },
            "ou1": {
                "ctype": "ou",
                "fieldLabel": "所屬機構",
                "allowBlank": false,
                "showFullPath": true,
                "lockBinding": true,
                "$bind": "Organization",
                "uniqueId": "9efbbaa0-c4b5-4c5a-927e-6ca0005d4005"
            },
            "tablecell8": {
                "$items": [
                    "ou1"
                ]
            },
            "combobox1": {
                "ctype": "combobox",
                "fieldLabel": "車輛類型",
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
                            "value": "車輛類型"
                        }
                    }
                },
                "valueField": "DataCode",
                "displayField": "DataName",
                "options": [],
                "lockBinding": true,
                "$bind": "Type",
                "uniqueId": "a6cf3489-7762-45f4-8f42-dcf41a2dbfca"
            },
            "tablecell10": {
                "$items": [
                    "combobox1"
                ]
            },
            "number1": {
                "ctype": "number",
                "fieldLabel": "費用",
                "allowBlank": false,
                "thousands": false,
                "digit": 2,
                "currency": null,
                "lockBinding": true,
                "suffix": null,
                "$bind": "Cost",
                "uniqueId": "4fbdd355-2c51-49b3-9afd-3319060c1b89"
            },
            "hboxcell1": {
                "flex": 3,
                "$items": [
                    "number1"
                ]
            },
            "desc1": {
                "ctype": "desc",
                "fieldBackgroundColor": "#FFFFFF",
                "$html": "<div style=\"\"><span style=\"color: rgb(51, 51, 51); font-family: &quot;Microsoft YaHei&quot;, &quot;\\\\5FAE軟雅黑&quot;, &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, Arial, sans-serif; text-wrap: nowrap;\"><font size=\"5\">&nbsp;</font></span></div><span style=\"font-size: 12px; color: rgb(51, 51, 51); font-family: &quot;Microsoft YaHei&quot;, &quot;\\\\5FAE軟雅黑&quot;, &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, Arial, sans-serif; text-wrap: nowrap;\">元/公里</span>",
                "uniqueId": "f9ff40dd-b83b-412f-ae8e-b860fb45736e"
            },
            "hboxcell2": {
                "flex": 1,
                "$items": [
                    "desc1"
                ]
            },
            "hbox1": {
                "ctype": "hbox",
                "layout": {
                    "align": "stretch"
                },
                "$items": [
                    "hboxcell1",
                    "hboxcell2"
                ]
            },
            "tablecell11": {
                "$items": [
                    "hbox1"
                ]
            },
            "text5": {
                "ctype": "text",
                "fieldLabel": "廠牌型號",
                "allowBlank": false,
                "lockBinding": true,
                "$bind": "Model",
                "uniqueId": "aa7472a7-da0e-40c1-bd45-a2579a3030af"
            },
            "tablecell12": {
                "$items": [
                    "text5"
                ]
            },
            "number2": {
                "ctype": "number",
                "fieldLabel": "購買價格",
                "thousands": false,
                "digit": 0,
                "currency": null,
                "lockBinding": true,
                "suffix": null,
                "$bind": "Price",
                "uniqueId": "f9d826b9-c53d-4c22-8914-ce549ecd741e"
            },
            "hboxcell3": {
                "flex": 3,
                "$items": [
                    "number2"
                ]
            },
            "desc2": {
                "ctype": "desc",
                "fieldBackgroundColor": "#FFFFFF",
                "$html": "<div style=\"\"><span style=\"color: rgb(51, 51, 51); font-family: &quot;Microsoft YaHei&quot;, &quot;\\\\5FAE軟雅黑&quot;, &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, Arial, sans-serif; text-wrap: nowrap;\"><font size=\"5\">&nbsp;</font></span></div><span style=\"font-size: 12px; color: rgb(51, 51, 51); font-family: &quot;Microsoft YaHei&quot;, &quot;\\\\5FAE軟雅黑&quot;, &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, Arial, sans-serif; text-wrap: nowrap;\">(RMB￥，只能為數字)</span>",
                "uniqueId": "400cecbe-094f-4aa4-ba39-e13f1d959adf"
            },
            "hboxcell4": {
                "flex": 1,
                "$items": [
                    "desc2"
                ]
            },
            "hbox2": {
                "ctype": "hbox",
                "layout": {
                    "align": "stretch"
                },
                "$items": [
                    "hboxcell3",
                    "hboxcell4"
                ]
            },
            "tablecell13": {
                "$items": [
                    "hbox2"
                ]
            },
            "datetime2": {
                "ctype": "datetime",
                "fieldLabel": "購置日期",
                "type": "Ymd",
                "lockBinding": true,
                "$bind": "PurchaseDate",
                "uniqueId": "2cc1e324-794d-4d49-85a9-117bda8f28f3"
            },
            "tablecell14": {
                "$items": [
                    "datetime2"
                ]
            },
            "text6": {
                "ctype": "text",
                "fieldLabel": "引擎號碼",
                "lockBinding": true,
                "$bind": "EngineNumber",
                "uniqueId": "bf838b22-4cd4-4fee-afe1-ea574eaef2f7"
            },
            "tablecell15": {
                "$items": [
                    "text6"
                ]
            },
            "user1": {
                "ctype": "user",
                "fieldLabel": "車輛負責人",
                "lockBinding": true,
                "allowBlank": false,
                "$map": {
                    "name": "CarAdminName"
                },
                "$bind": "CarAdmin",
                "uniqueId": "b31a7d5b-588d-41c1-8fa3-458af3717e69"
            },
            "text2": {
                "ctype": "text",
                "fieldLabel": "管理人姓名",
                "lockBinding": true,
                "$hidden": "1",
                "$bind": "CarAdminName",
                "uniqueId": "b6ddcd55-cae6-4f4f-95b8-e6a602350865"
            },
            "tablecell16": {
                "$items": [
                    "user1",
                    "text2"
                ]
            },
            "switch1": {
                "ctype": "switch",
                "fieldLabel": "是否封存",
                "lockBinding": true,
                "$bind": "IsSealed",
                "uniqueId": "911a234a-2814-4a90-a127-3643d62b4a9c"
            },
            "tablecell17": {
                "$items": [
                    "switch1"
                ]
            },
            "textarea1": {
                "ctype": "textarea",
                "maxLength": 500,
                "fieldLabel": "備註",
                "grow": true,
                "growMin": 71,
                "growMax": 171,
                "lockBinding": true,
                "$bind": "Notes",
                "uniqueId": "bfd35511-8bc4-41c6-88eb-4977963db3f4"
            },
            "tablecell18": {
                "colspan": 2,
                "$items": [
                    "textarea1"
                ]
            },
            "number4": {
                "ctype": "number",
                "fieldLabel": "排序",
                "$express": "1",
                "allowBlank": false,
                "thousands": false,
                "digit": -1,
                "currency": null,
                "lockBinding": true,
                "suffix": null,
                "$bind": "Order",
                "uniqueId": "15cfe1c6-6d75-4bf0-b259-4f62d9c30f02"
            },
            "tablecell20": {
                "$items": [
                    "number4"
                ]
            },
            "text4": {
                "ctype": "text",
                "fieldLabel": "當前語系",
                "lockBinding": true,
                "$express": "GetCurrentLanguage()",
                "$hidden": "1",
                "$bind": "CurrentLanguage",
                "uniqueId": "6b716bde-82ab-4c39-8b89-5f524f7ccc63"
            },
            "tablecell21": {
                "$items": [
                    "text4"
                ]
            },
            "table2": {
                "ctype": "table",
                "columns": 2,
                "cellVerticalAlign": "middle",
                "$items": [
                    "tablecell7",
                    "tablecell8",
                    "tablecell10",
                    "tablecell11",
                    "tablecell12",
                    "tablecell13",
                    "tablecell14",
                    "tablecell15",
                    "tablecell16",
                    "tablecell17",
                    "tablecell18",
                    "tablecell20",
                    "tablecell21"
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
        if(me.$$$text4.setValue=="zh-hant"){
            me.$$$desc1.setValue('<div style=""><span style="color: rgb(51, 51, 51); font-family: &quot;Microsoft YaHei&quot;, &quot;\\\\5FAE軟雅黑&quot;, &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, Arial, sans-serif; text-wrap: nowrap;"><font size="5">&nbsp;</font></span></div><span style="font-size: 12px; color: rgb(51, 51, 51); font-family: &quot;Microsoft YaHei&quot;, &quot;\\\\5FAE軟雅黑&quot;, &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, Arial, sans-serif; text-wrap: nowrap;">元/公里</span>');
            me.$$$desc2.setValue('<div style=""><span style="color: rgb(51, 51, 51); font-family: &quot;Microsoft YaHei&quot;, &quot;\\\\5FAE軟雅黑&quot;, &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, Arial, sans-serif; text-wrap: nowrap;"><font size="5">&nbsp;</font></span></div><span style="font-size: 12px; color: rgb(51, 51, 51); font-family: &quot;Microsoft YaHei&quot;, &quot;\\\\5FAE軟雅黑&quot;, &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, Arial, sans-serif; text-wrap: nowrap;">(RMB￥，只能為數字)</span>');
       	}else if (ZHYSoft.sysCulture=="en-us"){
            me.$$$desc1.setValue('<div style=""><span style="color: rgb(51, 51, 51); font-family: &quot;Microsoft YaHei&quot;, &quot;\\\\5FAE軟雅黑&quot;, &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, Arial, sans-serif; text-wrap: nowrap;"><font size="5">&nbsp;</font></span></div><span style="font-size: 12px; color: rgb(51, 51, 51); font-family: &quot;Microsoft YaHei&quot;, &quot;\\\\5FAE軟雅黑&quot;, &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, Arial, sans-serif; text-wrap: nowrap;">Yuan/Kilometer</span>');
            me.$$$desc2.setValue('<div style=""><span style="color: rgb(51, 51, 51); font-family: &quot;Microsoft YaHei&quot;, &quot;\\\\5FAE軟雅黑&quot;, &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, Arial, sans-serif; text-wrap: nowrap;"><font size="5">&nbsp;</font></span></div><span style="font-size: 12px; color: rgb(51, 51, 51); font-family: &quot;Microsoft YaHei&quot;, &quot;\\\\5FAE軟雅黑&quot;, &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, Arial, sans-serif; text-wrap: nowrap;">(RMB ￥, Can Only Be Numerical)</span>');
        }
    }
});
