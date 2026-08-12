---
name: form-generation-skill
description: 當用戶要求製作表單時，協助生成、編輯與驗證符合 Guru-X BPM 平台規範的動態 ExtJS 宣告式表單定義檔（支援主細表 Grid、自動化系統欄位、開窗回填映射及狀態權限控制）。
---

# Guru-X 表單生成技能 (Form Generation Skill)

本技能旨在指引與教導 AI 代理如何利用動態表單引擎（CodeFly.Form / CodeFly.FormApplication）規格與範本，為 Guru-X BPM 平台自動生成美觀且結構正確的宣告式表單定義檔。

---

## 1. 核心生成指南 (Core Instructions)

### A. 檔案結構規範
生成或修改的表單檔名應為 `{業務名稱}_Application.js` 或 `{業務名稱}_Manage.js`，且內容必須是合規的 ExtJS 類別定義，而非純 JSON。基本結構必須包含：
*   `Ext.define('ZHYSoft.form.NewForm', { ... })`
*   `extend: 'ZHYSoft.form.AbstractForm'`
*   `definition` 物件（包含 `components` 與 `$items`）

### B. 排版與佈局規則
*   **兩欄式網格**：主表一般採用兩欄（`columns: 2`）或三欄（`columns: 3`）的 `table` 佈局。
*   **單格封裝**：所有輸入組件（除 `formtitle`、`segmentbar`、`grid` 之外）必須先置於一個 `tablecell`（無 `ctype`，僅含 `"$items"`）中，再由 `table` 元件引用。
*   **跨欄控制**：對於「申請事由」或「備註」等長文本輸入框，在 `tablecell` 中設定 `"colspan": 2`。

### C. 核心元件型別 (ctype) 指引
*   **系統自動回填**：`sn`（流水號碼）、`dept`（申請部門）、`initiator`（申請人）、`starttime`（起草時間）。
*   **基礎輸入**：`text`（文字框）、`textarea`（多行文字域）、`number`（數值輸入框，具備 `thousands` 與 `digit` 屬性）、`datetime`（日期選擇，具備 `type` 屬性）。
*   **動態元件**：`combobox`（下拉選單，支援 options 或 esb 整合）、`databrowser`（開窗查詢，具備 `dataBrowser` 與 `$map` 欄位）。
*   **主細表元件**：`grid`（明細網格，內部組件平行定義於 `components`，其 ctype 設為 `grid` 並綁定至子資料集）。

### D. 資料繫結與自動回填機制
*   **資料繫結**：每個需要持久化保存的組件必須具備 `"$bind"` 屬性（對應資料庫欄位名）。
*   **欄位對應回填 (`$map`)**：當使用 `databrowser` 或 `user` 時，點選後如需連動填入其他主表或明細行欄位，應配置 `$map` 對應（例如 `{"CarAdmin": "CarAdmin"}` 或 `{"SuppliesName": "Details.SuppliesName"}`）。

---

## 2. 元資料參考與範例 (References & Examples)

*   **完整技術規格書**：請參閱本 Skill 目錄下的 `references/FORM_GENERATION_SPEC.md`。它提供了所有 25 種組件的屬性、用途與 JSON 規格明細。
*   **實例參考**：請參閱本 Skill 目錄下的 `examples/` 目錄。它包含了多個在真實環境中執行的表單，包含：
    *   `Seal_Application.json`（用印申請單：下拉選單、連動與附件上傳範例）
    *   `Supply_Checkout.json`（辦公用品領用單：主細表明細子表、開窗連動回填、多語系 initComponent 範例）
    *   `Petty_Cash_Application.json`（零用金報銷申請單：自動回填與排版格平衡範例）
    *   `Business_Trip_Application.json`（出差申請單：主細表明細子表與職位動態計算表達式範例）
