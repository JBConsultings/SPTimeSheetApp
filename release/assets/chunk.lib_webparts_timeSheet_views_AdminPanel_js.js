"use strict";
(self["webpackJsonp_c7e5e177-9baf-42a9-91c9-2ea9fecc19a8_0.0.1"] = self["webpackJsonp_c7e5e177-9baf-42a9-91c9-2ea9fecc19a8_0.0.1"] || []).push([["lib_webparts_timeSheet_views_AdminPanel_js"],{

/***/ 10592:
/*!*****************************************************************!*\
  !*** ./lib/webparts/timeSheet/views/AdminPanel.module.scss.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@microsoft/sp-css-loader/node_modules/@microsoft/load-themed-styles/lib-es6/index.js */ 96323);
// Imports


_node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__.loadStyles(":root{--color-primary-50:#eff6ff;--color-primary-100:#dbeafe;--color-primary-200:#bfdbfe;--color-primary-300:#93c5fd;--color-primary-400:#60a5fa;--color-primary-500:#3b82f6;--color-primary-600:#2563eb;--color-primary-700:#1d4ed8;--color-primary-800:#1e40af;--color-primary-900:#1e3a8a;--color-secondary-50:#f8fafc;--color-secondary-100:#f1f5f9;--color-secondary-200:#e2e8f0;--color-secondary-300:#cbd5e1;--color-secondary-400:#94a3b8;--color-secondary-500:#64748b;--color-secondary-600:#475569;--color-secondary-700:#334155;--color-secondary-800:#1e293b;--color-secondary-900:#0f172a;--color-success-50:#f0fdf4;--color-success-100:#dcfce7;--color-success-500:#22c55e;--color-success-600:#16a34a;--color-success-700:#15803d;--color-warning-50:#fffbeb;--color-warning-100:#fef3c7;--color-warning-500:#f59e0b;--color-warning-600:#d97706;--color-error-50:#fef2f2;--color-error-100:#fee2e2;--color-error-500:#ef4444;--color-error-600:#dc2626;--gradient-primary:linear-gradient(135deg,#667eea,#764ba2);--gradient-success:linear-gradient(135deg,#84fab0,#8fd3f4);--gradient-warning:linear-gradient(135deg,#ffecd2,#fcb69f);--gradient-purple:linear-gradient(135deg,#a8edea,#fed6e3);--gradient-blue:linear-gradient(135deg,#667eea,#764ba2);--gradient-ocean:linear-gradient(135deg,#667db6,#0082c8 35%,#0082c8);--glass-bg:hsla(0,0%,100%,.25);--glass-border:hsla(0,0%,100%,.18);--glass-shadow:0 8px 32px 0 rgba(31,38,135,.37);--glass-backdrop:blur(8px);--shadow-xs:0 1px 2px 0 rgba(0,0,0,.05);--shadow-sm:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--shadow-md:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--shadow-lg:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--shadow-xl:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--shadow-2xl:0 25px 50px -12px rgba(0,0,0,.25);--shadow-primary:0 10px 25px rgba(59,130,246,.15);--shadow-success:0 10px 25px rgba(34,197,94,.15);--shadow-warning:0 10px 25px rgba(245,158,11,.15);--shadow-error:0 10px 25px rgba(239,68,68,.15);--font-family:\"Segoe UI\",\"Inter\",-apple-system,BlinkMacSystemFont,sans-serif;--font-size-xs:0.75rem;--font-size-sm:0.875rem;--font-size-base:1rem;--font-size-lg:1.125rem;--font-size-xl:1.25rem;--font-size-2xl:1.5rem;--font-size-3xl:1.875rem;--font-size-4xl:2.25rem;--font-weight-light:300;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--font-weight-extrabold:800;--line-height-tight:1.25;--line-height-snug:1.375;--line-height-normal:1.5;--line-height-relaxed:1.625;--space-1:0.25rem;--space-2:0.5rem;--space-3:0.75rem;--space-4:1rem;--space-5:1.25rem;--space-6:1.5rem;--space-8:2rem;--space-10:2.5rem;--space-12:3rem;--space-16:4rem;--space-20:5rem;--radius-sm:0.125rem;--radius-base:0.25rem;--radius-md:0.375rem;--radius-lg:0.5rem;--radius-xl:0.75rem;--radius-2xl:1rem;--radius-3xl:1.5rem;--radius-full:9999px;--z-dropdown:1000;--z-sticky:1020;--z-fixed:1030;--z-modal-backdrop:1040;--z-modal:1050;--z-popover:1060;--z-tooltip:1070;--transition-fast:all 150ms ease;--transition-base:all 200ms ease;--transition-slow:all 300ms ease;--transition-bounce:all 200ms cubic-bezier(0.68,-0.55,0.265,1.55)}.modern-card_e26157a1{backdrop-filter:var(--glass-backdrop);background:var(--glass-bg);border:1px solid var(--glass-border);border-radius:var(--radius-xl);box-shadow:var(--shadow-lg);overflow:hidden;position:relative;transition:var(--transition-base)}.modern-card_e26157a1:before{background:linear-gradient(90deg,transparent,hsla(0,0%,100%,.4),transparent);content:\"\";height:1px;left:0;pointer-events:none;position:absolute;right:0;top:0}.modern-card_e26157a1:hover{border-color:hsla(0,0%,100%,.3);box-shadow:var(--shadow-xl);transform:translateY(-2px)}.card-gradient-primary_e26157a1{background:var(--gradient-primary);color:#fff}.card-gradient-success_e26157a1{background:var(--gradient-success);color:var(--color-secondary-800)}.card-gradient-warning_e26157a1{background:var(--gradient-warning);color:var(--color-secondary-800)}.card-gradient-purple_e26157a1{background:var(--gradient-purple);color:var(--color-secondary-800)}.text-gradient-primary_e26157a1{-webkit-text-fill-color:transparent;background:var(--gradient-primary);-webkit-background-clip:text;background-clip:text;font-weight:var(--font-weight-bold)}.animate-fade-in_e26157a1{animation:fadeIn_e26157a1 .6s ease-out}.animate-slide-up_e26157a1{animation:slideUp_e26157a1 .5s ease-out}.animate-scale-in_e26157a1{animation:scaleIn_e26157a1 .3s ease-out}@keyframes scaleIn_e26157a1{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}.hover-lift_e26157a1{transition:var(--transition-base)}.hover-lift_e26157a1:hover{box-shadow:var(--shadow-xl);transform:translateY(-4px)}.hover-glow_e26157a1{transition:var(--transition-base)}.hover-glow_e26157a1:hover{box-shadow:0 0 20px rgba(59,130,246,.4)}.flex-center_e26157a1,.flex-col-center_e26157a1{align-items:center;display:flex;justify-content:center}.flex-col-center_e26157a1{flex-direction:column}.bg-gradient-modern_e26157a1{background:linear-gradient(135deg,#f5f7fa,#c3cfe2)}.bg-gradient-warm_e26157a1{background:linear-gradient(135deg,#ffecd2,#fcb69f)}.bg-gradient-cool_e26157a1{background:linear-gradient(135deg,#667eea,#764ba2)}.container_e26157a1{animation:fadeIn_e26157a1 .4s ease-out both;font-family:Segoe UI,Inter,-apple-system,BlinkMacSystemFont,sans-serif}.header_e26157a1{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;overflow:hidden;padding:24px 32px;position:relative}.header_e26157a1:before{background:radial-gradient(circle at 20% 50%,hsla(0,0%,100%,.15) 0,transparent 50%),radial-gradient(circle at 80% 20%,hsla(0,0%,100%,.1) 0,transparent 50%);content:\"\";inset:0;pointer-events:none;position:absolute}.headerContent_e26157a1{align-items:center;display:flex;gap:12px;position:relative;z-index:1}.homeBtn_e26157a1{align-items:center;background:hsla(0,0%,100%,.15);border:1px solid hsla(0,0%,100%,.3);border-radius:8px;color:#fff;cursor:pointer;display:flex;flex-shrink:0;height:36px;justify-content:center;transition:background .2s ease;width:36px}.homeBtn_e26157a1:hover{background:hsla(0,0%,100%,.28)}.homeBtn_e26157a1 svg{display:block}.headerTitle_e26157a1{color:#fff;font-size:22px;font-weight:700;letter-spacing:-.3px;margin:0;text-shadow:0 1px 2px rgba(0,0,0,.1)}.headerSubtitle_e26157a1{color:hsla(0,0%,100%,.85);font-size:13px;font-weight:400;margin:2px 0 0}.body_e26157a1{padding:24px 32px 32px}.tabs_e26157a1{border-bottom:2px solid #e2e8f0;display:flex;gap:4px;margin-bottom:24px}.tab_e26157a1{align-items:center;background:none;border:none;border-bottom:2px solid transparent;border-radius:6px 6px 0 0;color:#64748b;cursor:pointer;display:flex;font-size:14px;font-weight:600;gap:8px;margin-bottom:-2px;padding:10px 20px;transition:color .2s ease,border-color .2s ease}.tab_e26157a1:hover{background:rgba(102,126,234,.05);color:#667eea}.tabActive_e26157a1{background:rgba(102,126,234,.06);border-bottom-color:#667eea;color:#667eea}.tabIcon_e26157a1{font-size:16px}.tabContent_e26157a1{animation:slideUp_e26157a1 .3s ease-out both}.toolbar_e26157a1{align-items:center;display:flex;justify-content:space-between;margin-bottom:16px}.sectionLabel_e26157a1{align-items:center;color:#475569;display:flex;font-size:13px;font-weight:700;gap:8px;letter-spacing:.06em;text-transform:uppercase}.sectionLabel_e26157a1:before{background:linear-gradient(180deg,#667eea,#764ba2);border-radius:2px;content:\"\";display:inline-block;height:14px;width:3px}.addBtn_e26157a1{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);border:none;border-radius:8px;box-shadow:0 2px 8px rgba(102,126,234,.35);color:#fff;cursor:pointer;display:inline-flex;font-size:13px;font-weight:600;gap:6px;padding:8px 16px;transition:opacity .2s ease,transform .15s ease,box-shadow .2s ease}.addBtn_e26157a1:hover{box-shadow:0 4px 14px rgba(102,126,234,.45);opacity:.92;transform:translateY(-1px)}.addBtn_e26157a1:active{transform:translateY(0)}.message_e26157a1{align-items:center;animation:slideUp_e26157a1 .2s ease-out both;border-radius:8px;display:flex;font-size:13px;font-weight:500;gap:8px;margin-bottom:14px;padding:10px 14px}.messageSuccess_e26157a1{background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.3);color:#16a34a}.messageError_e26157a1{background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);color:#dc2626}.messageDismiss_e26157a1{background:none;border:none;color:inherit;cursor:pointer;font-size:16px;line-height:1;margin-left:auto;opacity:.6;padding:0 2px}.messageDismiss_e26157a1:hover{opacity:1}.tableWrap_e26157a1{background:#fff;border:1px solid rgba(226,232,240,.8);border-radius:12px;box-shadow:0 1px 4px rgba(0,0,0,.06),0 4px 12px rgba(0,0,0,.04);overflow:hidden}.table_e26157a1{border-collapse:collapse;font-size:13px;width:100%}.thead_e26157a1{background:#f8fafc;border-bottom:2px solid #e2e8f0}.th_e26157a1{color:#475569;font-size:11px;font-weight:700;letter-spacing:.07em;padding:11px 14px;text-align:left;text-transform:uppercase;white-space:nowrap}.tr_e26157a1{border-bottom:1px solid #f1f5f9;transition:background .15s ease}.tr_e26157a1:last-child{border-bottom:none}.tr_e26157a1:hover{background:rgba(102,126,234,.04)}.td_e26157a1{color:#334155;padding:12px 14px;vertical-align:middle}.tdCode_e26157a1{background:rgba(102,126,234,.08);border-radius:4px;color:#667eea;display:inline-block;font-family:Consolas,Courier New,monospace;font-size:12px;font-weight:600;padding:3px 8px}.badge_e26157a1{align-items:center;border-radius:20px;display:inline-flex;font-size:11px;font-weight:700;gap:5px;letter-spacing:.04em;padding:3px 10px}.badgeActive_e26157a1{background:rgba(34,197,94,.12);border:1px solid rgba(34,197,94,.25);color:#16a34a}.badgeInactive_e26157a1{background:rgba(148,163,184,.12);border:1px solid rgba(148,163,184,.25);color:#64748b}.badgeDot_e26157a1{background:currentColor;border-radius:50%;height:6px;width:6px}.actions_e26157a1{align-items:center;display:flex;gap:4px}.iconBtn_e26157a1{align-items:center;background:#fff;border:1px solid #e2e8f0;border-radius:7px;color:#64748b;cursor:pointer;display:flex;height:30px;justify-content:center;transition:background .15s ease,color .15s ease,border-color .15s ease;width:30px}.iconBtn_e26157a1:hover{background:rgba(102,126,234,.08);border-color:rgba(102,126,234,.3);color:#667eea}.iconBtnDanger_e26157a1:hover{background:rgba(239,68,68,.08);border-color:rgba(239,68,68,.3);color:#dc2626}.iconBtnSuccess_e26157a1:hover{background:rgba(34,197,94,.08);border-color:rgba(34,197,94,.3);color:#16a34a}.empty_e26157a1{color:#94a3b8;font-size:14px;padding:40px 20px;text-align:center}.loading_e26157a1{align-items:center;color:#64748b;display:flex;font-size:14px;gap:10px;justify-content:center;padding:48px}.spinner_e26157a1{animation:spin_e26157a1 .8s linear infinite;border:2px solid rgba(102,126,234,.2);border-radius:50%;border-top-color:#667eea;height:22px;width:22px}.drawerHeader_e26157a1{align-items:center;background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;display:flex;flex-shrink:0;justify-content:space-between;padding:22px 28px}.drawerTitle_e26157a1{color:#fff;font-size:18px;font-weight:700;margin:0}.drawerClose_e26157a1{align-items:center;background:hsla(0,0%,100%,.15);border:1px solid hsla(0,0%,100%,.3);border-radius:8px;color:#fff;cursor:pointer;display:flex;font-size:20px;height:34px;justify-content:center;line-height:1;transition:background .15s ease;width:34px}.drawerClose_e26157a1:hover{background:hsla(0,0%,100%,.28)}.drawerBody_e26157a1{display:flex;flex:1;flex-direction:column;gap:18px;min-height:0;overflow-y:auto;padding:28px}.drawerFooter_e26157a1{align-items:center;background:#f8fafc;border-top:1px solid #e2e8f0;display:flex;flex-shrink:0;gap:10px;padding:18px 28px}.field_e26157a1{display:flex;flex-direction:column;gap:5px}.fieldLabel_e26157a1{color:#475569;font-size:12px;font-weight:600;letter-spacing:.05em;text-transform:uppercase}.fieldLabel_e26157a1 .required_e26157a1{color:#dc2626;margin-left:2px}.fieldInput_e26157a1{background:#fff;border:1px solid #e2e8f0;border-radius:8px;color:#1e293b;font-family:inherit;font-size:14px;outline:none;padding:9px 12px;transition:border-color .15s ease,box-shadow .15s ease}.fieldInput_e26157a1:focus{border-color:#667eea;box-shadow:0 0 0 3px rgba(102,126,234,.12)}.fieldInput_e26157a1:-ms-input-placeholder{color:#94a3b8}.fieldInput_e26157a1::placeholder{color:#94a3b8}.fieldTextarea_e26157a1{min-height:80px;resize:vertical}.toggleRow_e26157a1{align-items:center;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;display:flex;justify-content:space-between;padding:10px 12px}.toggleLabel_e26157a1{color:#334155;font-size:14px;font-weight:500}.toggle_e26157a1{cursor:pointer;height:22px;position:relative;width:40px}.toggle_e26157a1 input{height:0;opacity:0;position:absolute;width:0}.toggle_e26157a1 .track_e26157a1{background:#cbd5e1;border-radius:11px;inset:0;position:absolute;transition:background .2s ease}.toggle_e26157a1 .thumb_e26157a1{background:#fff;border-radius:50%;box-shadow:0 1px 3px rgba(0,0,0,.2);height:16px;left:3px;position:absolute;top:3px;transition:transform .2s ease;width:16px}.toggle_e26157a1 input:checked+.track_e26157a1{background:#667eea}.toggle_e26157a1 input:checked~.thumb_e26157a1{transform:translateX(18px)}.saveBtn_e26157a1{background:linear-gradient(135deg,#667eea,#764ba2);border:none;border-radius:8px;color:#fff;cursor:pointer;flex:1;font-size:14px;font-weight:600;padding:9px 20px;transition:opacity .2s ease}.saveBtn_e26157a1:hover{opacity:.9}.saveBtn_e26157a1:disabled{cursor:not-allowed;opacity:.55}.cancelBtn_e26157a1{background:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px;color:#475569;cursor:pointer;font-size:14px;font-weight:600;padding:9px 20px;transition:background .15s ease}.cancelBtn_e26157a1:hover{background:#e2e8f0}@keyframes fadeIn_e26157a1{0%{opacity:0}to{opacity:1}}@keyframes slideUp_e26157a1{0%{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes modalIn_e26157a1{0%{opacity:0;transform:scale(.92) translateY(12px)}to{opacity:1;transform:scale(1) translateY(0)}}@keyframes spin_e26157a1{to{transform:rotate(1turn)}}", true);

// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "modern-card": "modern-card_e26157a1",
  "card-gradient-primary": "card-gradient-primary_e26157a1",
  "card-gradient-success": "card-gradient-success_e26157a1",
  "card-gradient-warning": "card-gradient-warning_e26157a1",
  "card-gradient-purple": "card-gradient-purple_e26157a1",
  "text-gradient-primary": "text-gradient-primary_e26157a1",
  "animate-fade-in": "animate-fade-in_e26157a1",
  fadeIn: "fadeIn_e26157a1",
  "animate-slide-up": "animate-slide-up_e26157a1",
  slideUp: "slideUp_e26157a1",
  "animate-scale-in": "animate-scale-in_e26157a1",
  scaleIn: "scaleIn_e26157a1",
  "hover-lift": "hover-lift_e26157a1",
  "hover-glow": "hover-glow_e26157a1",
  "flex-center": "flex-center_e26157a1",
  "flex-col-center": "flex-col-center_e26157a1",
  "bg-gradient-modern": "bg-gradient-modern_e26157a1",
  "bg-gradient-warm": "bg-gradient-warm_e26157a1",
  "bg-gradient-cool": "bg-gradient-cool_e26157a1",
  header: "header_e26157a1",
  headerContent: "headerContent_e26157a1",
  homeBtn: "homeBtn_e26157a1",
  headerTitle: "headerTitle_e26157a1",
  headerSubtitle: "headerSubtitle_e26157a1",
  body: "body_e26157a1",
  tabs: "tabs_e26157a1",
  tab: "tab_e26157a1",
  tabActive: "tabActive_e26157a1",
  tabIcon: "tabIcon_e26157a1",
  tabContent: "tabContent_e26157a1",
  toolbar: "toolbar_e26157a1",
  sectionLabel: "sectionLabel_e26157a1",
  addBtn: "addBtn_e26157a1",
  message: "message_e26157a1",
  messageSuccess: "messageSuccess_e26157a1",
  messageError: "messageError_e26157a1",
  messageDismiss: "messageDismiss_e26157a1",
  tableWrap: "tableWrap_e26157a1",
  table: "table_e26157a1",
  thead: "thead_e26157a1",
  th: "th_e26157a1",
  tr: "tr_e26157a1",
  td: "td_e26157a1",
  tdCode: "tdCode_e26157a1",
  badge: "badge_e26157a1",
  badgeActive: "badgeActive_e26157a1",
  badgeInactive: "badgeInactive_e26157a1",
  badgeDot: "badgeDot_e26157a1",
  actions: "actions_e26157a1",
  iconBtn: "iconBtn_e26157a1",
  iconBtnDanger: "iconBtnDanger_e26157a1",
  iconBtnSuccess: "iconBtnSuccess_e26157a1",
  empty: "empty_e26157a1",
  loading: "loading_e26157a1",
  spinner: "spinner_e26157a1",
  spin: "spin_e26157a1",
  drawerHeader: "drawerHeader_e26157a1",
  drawerTitle: "drawerTitle_e26157a1",
  drawerClose: "drawerClose_e26157a1",
  drawerBody: "drawerBody_e26157a1",
  drawerFooter: "drawerFooter_e26157a1",
  field: "field_e26157a1",
  fieldLabel: "fieldLabel_e26157a1",
  required: "required_e26157a1",
  fieldInput: "fieldInput_e26157a1",
  fieldTextarea: "fieldTextarea_e26157a1",
  toggleRow: "toggleRow_e26157a1",
  toggleLabel: "toggleLabel_e26157a1",
  toggle: "toggle_e26157a1",
  track: "track_e26157a1",
  thumb: "thumb_e26157a1",
  saveBtn: "saveBtn_e26157a1",
  cancelBtn: "cancelBtn_e26157a1",
  modalIn: "modalIn_e26157a1",
  container: "container_e26157a1"
});


/***/ }),

/***/ 14408:
/*!****************************************************!*\
  !*** ./lib/webparts/timeSheet/views/AdminPanel.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 10196);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 85959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react */ 29425);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react */ 63208);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react */ 46643);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react */ 80954);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react */ 49885);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/react */ 11880);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fluentui/react */ 44533);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fluentui/react */ 76702);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fluentui/react */ 67102);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fluentui/react */ 16264);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fluentui/react */ 5613);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fluentui/react */ 73064);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AppContext */ 24770);
/* harmony import */ var _services_ProjectService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ProjectService */ 15607);
/* harmony import */ var _services_CategoryService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/CategoryService */ 64268);
/* harmony import */ var TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! TimeSheetWebPartStrings */ 31339);
/* harmony import */ var TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AdminPanel.module.scss */ 10592);









// ─── Shared button styles (theme colour) ─────────────────────────────────────
var primaryBtnStyles = {
    root: { backgroundColor: "#667eea", borderColor: "#667eea", borderRadius: 6 },
    rootHovered: { backgroundColor: "#5a6fd6", borderColor: "#5a6fd6" },
    rootPressed: { backgroundColor: "#4d5fbc", borderColor: "#4d5fbc" },
    rootDisabled: { backgroundColor: "#c5cbf8", borderColor: "#c5cbf8" },
};
var defaultBtnStyles = {
    root: { borderRadius: 6 },
    rootHovered: { borderColor: "#667eea", color: "#667eea" },
    rootPressed: { borderColor: "#5a6fd6", color: "#5a6fd6" },
};
var dangerBtnStyles = {
    root: { borderRadius: 6, borderColor: "#da1e28", color: "#da1e28" },
    rootHovered: {
        borderColor: "#ba1b23",
        color: "#ba1b23",
        backgroundColor: "#fff1f1",
    },
    rootPressed: { borderColor: "#a2191f", color: "#a2191f" },
};
var iconBtnThemeStyles = {
    root: { borderRadius: 6, color: "#667eea" },
    rootHovered: { backgroundColor: "rgba(102,126,234,0.08)", color: "#5a6fd6" },
};
var homeBtnStyles = {
    root: {
        borderRadius: 6,
        color: "white",
        border: "1px solid rgba(255,255,255,0.3)",
        backgroundColor: "rgba(255,255,255,0.15)",
        width: 36,
        height: 36,
    },
    rootHovered: { backgroundColor: "rgba(255,255,255,0.25)", color: "white" },
    rootPressed: { backgroundColor: "rgba(255,255,255,0.35)", color: "white" },
    icon: { color: "white" },
};
var iconBtnDangerStyles = {
    root: { borderRadius: 6, color: "#da1e28" },
    rootHovered: { backgroundColor: "#fff1f1", color: "#ba1b23" },
};
var iconBtnSuccessStyles = {
    root: { borderRadius: 6, color: "#198038" },
    rootHovered: { backgroundColor: "#defbe6", color: "#0e6027" },
};
var addIcon = { iconName: "Add" };
var editIcon = { iconName: "Edit" };
var deleteIcon = { iconName: "Delete" };
var viewIcon = { iconName: "View" };
var hideIcon = { iconName: "Hide" };
var checkIcon = { iconName: "CheckMark" };
var cancelIcon = { iconName: "Cancel" };
var modalStyles = {
    main: {
        width: 540,
        maxWidth: "96vw",
        borderRadius: 16,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        maxHeight: "92vh",
    },
    scrollableContent: {
        display: "flex",
        flexDirection: "column",
        maxHeight: "92vh",
    },
};
// ─── Projects Tab ──────────────────────────────────────────────────────────────
var ProjectsTab = function () {
    var _a, _b, _c, _d, _f;
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), projects = _g[0], setProjects = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), loading = _h[0], setLoading = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""), message = _j[0], setMessage = _j[1];
    var _k = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isError = _k[0], setIsError = _k[1];
    var _l = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), drawerOpen = _l[0], setDrawerOpen = _l[1];
    var _m = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}), editProject = _m[0], setEditProject = _m[1];
    var _o = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), saving = _o[0], setSaving = _o[1];
    var _p = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}), formErrors = _p[0], setFormErrors = _p[1];
    var _q = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), confirmDeleteId = _q[0], setConfirmDeleteId = _q[1];
    var load = function () {
        setLoading(true);
        (0,_services_ProjectService__WEBPACK_IMPORTED_MODULE_2__.getAllProjects)()
            .then(function (items) {
            setProjects(items);
            setLoading(false);
        })
            .catch(function () {
            setMessage(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.LoadProjectsFailed);
            setIsError(true);
            setLoading(false);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        load();
    }, []);
    var openAdd = function () {
        setEditProject({ isActive: true });
        setFormErrors({});
        setDrawerOpen(true);
    };
    var openEdit = function (p) {
        setEditProject((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, p));
        setFormErrors({});
        setDrawerOpen(true);
    };
    var closeDrawer = function () {
        setFormErrors({});
        setDrawerOpen(false);
    };
    var handleSave = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(void 0, void 0, void 0, function () {
        var errors, _a;
        var _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_c) {
            switch (_c.label) {
                case 0:
                    errors = {};
                    if (!editProject.title || !editProject.title.trim())
                        errors.title = "Project Name is required.";
                    if (!editProject.projectCode || !editProject.projectCode.trim())
                        errors.projectCode = "Project Code is required.";
                    if (errors.title || errors.projectCode) {
                        setFormErrors(errors);
                        return [2 /*return*/];
                    }
                    setFormErrors({});
                    setSaving(true);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 6, 7, 8]);
                    if (!editProject.id) return [3 /*break*/, 3];
                    return [4 /*yield*/, (0,_services_ProjectService__WEBPACK_IMPORTED_MODULE_2__.updateProject)(editProject.id, editProject)];
                case 2:
                    _c.sent();
                    setMessage(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ProjectUpdated);
                    setIsError(false);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, (0,_services_ProjectService__WEBPACK_IMPORTED_MODULE_2__.addProject)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, editProject), { isActive: (_b = editProject.isActive) !== null && _b !== void 0 ? _b : true }))];
                case 4:
                    _c.sent();
                    setMessage(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ProjectAdded);
                    setIsError(false);
                    _c.label = 5;
                case 5:
                    setDrawerOpen(false);
                    load();
                    return [3 /*break*/, 8];
                case 6:
                    _a = _c.sent();
                    setMessage(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ProjectSaveFailed);
                    setIsError(true);
                    return [3 /*break*/, 8];
                case 7:
                    setSaving(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].tabContent },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].toolbar },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].sectionLabel }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ProjectsTab),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.PrimaryButton, { text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.AddProject, iconProps: addIcon, styles: primaryBtnStyles, onClick: openAdd })),
        message && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.MessageBar, { messageBarType: isError ? _fluentui_react__WEBPACK_IMPORTED_MODULE_9__.MessageBarType.error : _fluentui_react__WEBPACK_IMPORTED_MODULE_9__.MessageBarType.success, isMultiline: false, onDismiss: function () { return setMessage(""); }, dismissButtonAriaLabel: "Close", styles: { root: { borderRadius: 6, marginBottom: 12 } } }, message)),
        loading ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].loading },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.Spinner, { size: _fluentui_react__WEBPACK_IMPORTED_MODULE_11__.SpinnerSize.medium, label: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.LoadingProjects }))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].tableWrap },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].table },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].thead },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].th }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Code),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].th }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ProjectName),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].th }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ClientName),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].th }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Status),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].th, style: { width: 150 } }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Actions))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, projects.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { colSpan: 5, className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].empty }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.NoProjects))) : (projects.map(function (p) {
                    var _a;
                    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: p.id, className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].tr },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].td },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].tdCode }, p.projectCode)),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].td }, p.title),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].td }, (_a = p.clientName) !== null && _a !== void 0 ? _a : "—"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].td },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "".concat(_AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].badge, " ").concat(p.isActive ? _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].badgeActive : _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].badgeInactive) },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].badgeDot }),
                                p.isActive ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Active : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Inactive)),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].td },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].actions },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.TooltipHost, { content: "Edit" },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.IconButton, { iconProps: editIcon, styles: iconBtnThemeStyles, onClick: function () { return openEdit(p); } })),
                                confirmDeleteId === p.id ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: {
                                            fontSize: 11,
                                            color: "#6f6f6f",
                                            whiteSpace: "nowrap",
                                        } }, "Delete?"),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.TooltipHost, { content: "Confirm delete" },
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.IconButton, { iconProps: checkIcon, styles: iconBtnDangerStyles, onClick: function () {
                                                return (0,_services_ProjectService__WEBPACK_IMPORTED_MODULE_2__.deleteProject)(p.id)
                                                    .then(function () {
                                                    setConfirmDeleteId(null);
                                                    load();
                                                })
                                                    .catch(function () {
                                                    setMessage(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ProjectSaveFailed);
                                                    setIsError(true);
                                                    setConfirmDeleteId(null);
                                                });
                                            } })),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.TooltipHost, { content: "Cancel" },
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.IconButton, { iconProps: cancelIcon, styles: iconBtnThemeStyles, onClick: function () { return setConfirmDeleteId(null); } })))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.TooltipHost, { content: "Delete" },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.IconButton, { iconProps: deleteIcon, styles: iconBtnDangerStyles, onClick: function () { return setConfirmDeleteId(p.id); } }))),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.TooltipHost, { content: p.isActive ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Deactivate : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Activate },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.IconButton, { iconProps: p.isActive ? hideIcon : viewIcon, styles: p.isActive
                                            ? iconBtnDangerStyles
                                            : iconBtnSuccessStyles, onClick: function () {
                                            return (p.isActive
                                                ? (0,_services_ProjectService__WEBPACK_IMPORTED_MODULE_2__.deactivateProject)(p.id)
                                                : (0,_services_ProjectService__WEBPACK_IMPORTED_MODULE_2__.activateProject)(p.id)).then(load);
                                        } }))))));
                })))))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_14__.Modal, { isOpen: drawerOpen, onDismiss: closeDrawer, isBlocking: false, styles: modalStyles },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].drawerHeader },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].drawerTitle }, editProject.id ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.EditProject : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.AddProjectModal),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.IconButton, { iconProps: cancelIcon, ariaLabel: "Close", onClick: closeDrawer, styles: iconBtnThemeStyles })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].drawerBody },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_15__.TextField, { label: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ProjectName, required: true, placeholder: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ProjectNamePlaceholder, value: (_a = editProject.title) !== null && _a !== void 0 ? _a : "", errorMessage: formErrors.title, onChange: function (_e, val) {
                        setEditProject(function (p) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, p), { title: val || "" })); });
                        if (formErrors.title)
                            setFormErrors(function (prev) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, prev), { title: undefined })); });
                    }, styles: { fieldGroup: { borderRadius: 6 } } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginTop: 14 } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_15__.TextField, { label: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ProjectCode, required: true, placeholder: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ProjectCodePlaceholder, value: (_b = editProject.projectCode) !== null && _b !== void 0 ? _b : "", errorMessage: formErrors.projectCode, onChange: function (_e, val) {
                            setEditProject(function (p) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, p), { projectCode: val || "" })); });
                            if (formErrors.projectCode)
                                setFormErrors(function (prev) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, prev), { projectCode: undefined })); });
                        }, styles: { fieldGroup: { borderRadius: 6 } } })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginTop: 14 } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_15__.TextField, { label: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ClientName, placeholder: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ClientNamePlaceholder, value: (_c = editProject.clientName) !== null && _c !== void 0 ? _c : "", onChange: function (_e, val) {
                            return setEditProject(function (p) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, p), { clientName: val || "" })); });
                        }, styles: { fieldGroup: { borderRadius: 6 } } })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginTop: 14 } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_15__.TextField, { label: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Description, multiline: true, rows: 3, placeholder: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.OptionalDescription, value: (_d = editProject.description) !== null && _d !== void 0 ? _d : "", onChange: function (_e, val) {
                            return setEditProject(function (p) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, p), { description: val || "" })); });
                        }, styles: { fieldGroup: { borderRadius: 6 } } })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginTop: 16 } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_16__.Toggle, { label: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Active, checked: (_f = editProject.isActive) !== null && _f !== void 0 ? _f : true, onChange: function (_e, checked) {
                            return setEditProject(function (p) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, p), { isActive: checked })); });
                        }, styles: {
                            thumb: {
                                backgroundColor: editProject.isActive ? "#667eea" : undefined,
                            },
                            pill: {
                                backgroundColor: editProject.isActive
                                    ? "rgba(102,126,234,0.3)"
                                    : undefined,
                            },
                        } }))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].drawerFooter },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.PrimaryButton, { text: saving
                        ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Saving
                        : editProject.id
                            ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.UpdateProject
                            : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.AddProjectModal, disabled: saving, styles: primaryBtnStyles, onRenderIcon: saving ? function () { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.Spinner, { size: _fluentui_react__WEBPACK_IMPORTED_MODULE_11__.SpinnerSize.small }); } : undefined, onClick: handleSave }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_17__.DefaultButton, { text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Cancel, styles: defaultBtnStyles, onClick: closeDrawer })))));
};
// ─── Categories Tab ────────────────────────────────────────────────────────────
var CategoriesTab = function () {
    var _a, _b, _c, _d;
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), categories = _f[0], setCategories = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), loading = _g[0], setLoading = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""), message = _h[0], setMessage = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isError = _j[0], setIsError = _j[1];
    var _k = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), drawerOpen = _k[0], setDrawerOpen = _k[1];
    var _l = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}), editCat = _l[0], setEditCat = _l[1];
    var _m = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), saving = _m[0], setSaving = _m[1];
    var _o = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}), formErrors = _o[0], setFormErrors = _o[1];
    var _p = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), confirmDeleteId = _p[0], setConfirmDeleteId = _p[1];
    var load = function () {
        setLoading(true);
        (0,_services_CategoryService__WEBPACK_IMPORTED_MODULE_3__.getAllCategories)()
            .then(function (items) {
            setCategories(items);
            setLoading(false);
        })
            .catch(function () {
            setMessage(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.LoadCategoriesFailed);
            setIsError(true);
            setLoading(false);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        load();
    }, []);
    var openAdd = function () {
        setEditCat({ isActive: true, sortOrder: 0 });
        setFormErrors({});
        setDrawerOpen(true);
    };
    var openEdit = function (c) {
        setEditCat((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, c));
        setFormErrors({});
        setDrawerOpen(true);
    };
    var closeDrawer = function () {
        setFormErrors({});
        setDrawerOpen(false);
    };
    var handleSave = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(void 0, void 0, void 0, function () {
        var _a;
        var _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!editCat.title || !editCat.title.trim()) {
                        setFormErrors({ title: "Category Name is required." });
                        return [2 /*return*/];
                    }
                    setFormErrors({});
                    setSaving(true);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 6, 7, 8]);
                    if (!editCat.id) return [3 /*break*/, 3];
                    return [4 /*yield*/, (0,_services_CategoryService__WEBPACK_IMPORTED_MODULE_3__.updateCategory)(editCat.id, editCat)];
                case 2:
                    _c.sent();
                    setMessage(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.CategoryUpdated);
                    setIsError(false);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, (0,_services_CategoryService__WEBPACK_IMPORTED_MODULE_3__.addCategory)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, editCat), { isActive: (_b = editCat.isActive) !== null && _b !== void 0 ? _b : true }))];
                case 4:
                    _c.sent();
                    setMessage(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.CategoryAdded);
                    setIsError(false);
                    _c.label = 5;
                case 5:
                    setDrawerOpen(false);
                    load();
                    return [3 /*break*/, 8];
                case 6:
                    _a = _c.sent();
                    setMessage(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.CategorySaveFailed);
                    setIsError(true);
                    return [3 /*break*/, 8];
                case 7:
                    setSaving(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].tabContent },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].toolbar },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].sectionLabel }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.CategoriesTab),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.PrimaryButton, { text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.AddCategory, iconProps: addIcon, styles: primaryBtnStyles, onClick: openAdd })),
        message && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.MessageBar, { messageBarType: isError ? _fluentui_react__WEBPACK_IMPORTED_MODULE_9__.MessageBarType.error : _fluentui_react__WEBPACK_IMPORTED_MODULE_9__.MessageBarType.success, isMultiline: false, onDismiss: function () { return setMessage(""); }, dismissButtonAriaLabel: "Close", styles: { root: { borderRadius: 6, marginBottom: 12 } } }, message)),
        loading ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].loading },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.Spinner, { size: _fluentui_react__WEBPACK_IMPORTED_MODULE_11__.SpinnerSize.medium, label: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.LoadingCategories }))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].tableWrap },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].table },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].thead },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].th }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Category),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].th }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Description),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].th, style: { width: 70 } }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.SortOrder),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].th }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Status),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].th, style: { width: 150 } }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Actions))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, categories.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { colSpan: 5, className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].empty }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.NoCategories))) : (categories.map(function (c) {
                    var _a, _b;
                    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: c.id, className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].tr },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].td }, c.title),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].td }, (_a = c.description) !== null && _a !== void 0 ? _a : "—"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].td }, (_b = c.sortOrder) !== null && _b !== void 0 ? _b : 0),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].td },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "".concat(_AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].badge, " ").concat(c.isActive ? _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].badgeActive : _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].badgeInactive) },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].badgeDot }),
                                c.isActive ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Active : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Inactive)),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].td },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].actions },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.TooltipHost, { content: "Edit" },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.IconButton, { iconProps: editIcon, styles: iconBtnThemeStyles, onClick: function () { return openEdit(c); } })),
                                confirmDeleteId === c.id ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: {
                                            fontSize: 11,
                                            color: "#6f6f6f",
                                            whiteSpace: "nowrap",
                                        } }, "Delete?"),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.TooltipHost, { content: "Confirm delete" },
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.IconButton, { iconProps: checkIcon, styles: iconBtnDangerStyles, onClick: function () {
                                                return (0,_services_CategoryService__WEBPACK_IMPORTED_MODULE_3__.deleteCategory)(c.id)
                                                    .then(function () {
                                                    setConfirmDeleteId(null);
                                                    load();
                                                })
                                                    .catch(function () {
                                                    setMessage(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.CategorySaveFailed);
                                                    setIsError(true);
                                                    setConfirmDeleteId(null);
                                                });
                                            } })),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.TooltipHost, { content: "Cancel" },
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.IconButton, { iconProps: cancelIcon, styles: iconBtnThemeStyles, onClick: function () { return setConfirmDeleteId(null); } })))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.TooltipHost, { content: "Delete" },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.IconButton, { iconProps: deleteIcon, styles: iconBtnDangerStyles, onClick: function () { return setConfirmDeleteId(c.id); } }))),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.TooltipHost, { content: c.isActive ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Deactivate : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Activate },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.IconButton, { iconProps: c.isActive ? hideIcon : viewIcon, styles: c.isActive
                                            ? iconBtnDangerStyles
                                            : iconBtnSuccessStyles, onClick: function () {
                                            return (c.isActive
                                                ? (0,_services_CategoryService__WEBPACK_IMPORTED_MODULE_3__.deactivateCategory)(c.id)
                                                : (0,_services_CategoryService__WEBPACK_IMPORTED_MODULE_3__.activateCategory)(c.id)).then(load);
                                        } }))))));
                })))))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_14__.Modal, { isOpen: drawerOpen, onDismiss: closeDrawer, isBlocking: false, styles: modalStyles },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].drawerHeader },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].drawerTitle }, editCat.id ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.EditCategory : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.AddCategoryModal),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.IconButton, { iconProps: cancelIcon, ariaLabel: "Close", onClick: closeDrawer, styles: iconBtnThemeStyles })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].drawerBody },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_15__.TextField, { label: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Category, required: true, placeholder: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.CategoryNamePlaceholder, value: (_a = editCat.title) !== null && _a !== void 0 ? _a : "", errorMessage: formErrors.title, onChange: function (_e, val) {
                        setEditCat(function (c) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, c), { title: val || "" })); });
                        if (formErrors.title)
                            setFormErrors({});
                    }, styles: { fieldGroup: { borderRadius: 6 } } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginTop: 14 } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_15__.TextField, { label: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Description, multiline: true, rows: 3, placeholder: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.OptionalDescription, value: (_b = editCat.description) !== null && _b !== void 0 ? _b : "", onChange: function (_e, val) {
                            return setEditCat(function (c) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, c), { description: val || "" })); });
                        }, styles: { fieldGroup: { borderRadius: 6 } } })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginTop: 14 } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_18__.SpinButton, { label: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.SortOrder, min: 0, max: 9999, step: 1, value: String((_c = editCat.sortOrder) !== null && _c !== void 0 ? _c : 0), onIncrement: function (val) {
                            setEditCat(function (c) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, c), { sortOrder: Math.min((parseInt(val, 10) || 0) + 1, 9999) })); });
                        }, onDecrement: function (val) {
                            setEditCat(function (c) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, c), { sortOrder: Math.max((parseInt(val, 10) || 0) - 1, 0) })); });
                        }, onValidate: function (val) {
                            setEditCat(function (c) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, c), { sortOrder: parseInt(val, 10) || 0 })); });
                            return val;
                        }, styles: {
                            spinButtonWrapper: { borderRadius: 6 },
                            root: { maxWidth: 120 },
                        } })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginTop: 16 } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_16__.Toggle, { label: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Active, checked: (_d = editCat.isActive) !== null && _d !== void 0 ? _d : true, onChange: function (_e, checked) {
                            return setEditCat(function (c) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, c), { isActive: checked })); });
                        }, styles: {
                            thumb: {
                                backgroundColor: editCat.isActive ? "#667eea" : undefined,
                            },
                            pill: {
                                backgroundColor: editCat.isActive
                                    ? "rgba(102,126,234,0.3)"
                                    : undefined,
                            },
                        } }))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].drawerFooter },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.PrimaryButton, { text: saving
                        ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Saving
                        : editCat.id
                            ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.UpdateCategory
                            : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.AddCategoryModal, disabled: saving, styles: primaryBtnStyles, onRenderIcon: saving ? function () { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.Spinner, { size: _fluentui_react__WEBPACK_IMPORTED_MODULE_11__.SpinnerSize.small }); } : undefined, onClick: handleSave }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_17__.DefaultButton, { text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Cancel, styles: defaultBtnStyles, onClick: closeDrawer })))));
};
var AdminPanel = function () {
    var navigateHome = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__.AppContext).navigateHome;
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("projects"), activeTab = _a[0], setActiveTab = _a[1];
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].container },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].header },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].headerContent },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.IconButton, { iconProps: { iconName: "Home" }, title: "Back to Home", styles: homeBtnStyles, onClick: navigateHome }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].headerTitle }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.AdminTitle),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].headerSubtitle }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.AdminSubtitle)))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].body },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].tabs },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].tab, " ").concat(activeTab === "projects" ? _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].tabActive : ""), onClick: function () { return setActiveTab("projects"); } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].tabIcon }, "\uD83D\uDCC1"),
                    TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ProjectsTab),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "".concat(_AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].tab, " ").concat(activeTab === "categories" ? _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].tabActive : ""), onClick: function () { return setActiveTab("categories"); } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _AdminPanel_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].tabIcon }, "\uD83C\uDFF7\uFE0F"),
                    TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.CategoriesTab)),
            activeTab === "projects" ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProjectsTab, null) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(CategoriesTab, null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminPanel);


/***/ })

}]);
//# sourceMappingURL=chunk.lib_webparts_timeSheet_views_AdminPanel_js.js.map