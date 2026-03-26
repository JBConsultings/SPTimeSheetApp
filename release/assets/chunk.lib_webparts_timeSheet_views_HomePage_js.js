"use strict";
(self["webpackJsonp_c7e5e177-9baf-42a9-91c9-2ea9fecc19a8_0.0.1"] = self["webpackJsonp_c7e5e177-9baf-42a9-91c9-2ea9fecc19a8_0.0.1"] || []).push([["lib_webparts_timeSheet_views_HomePage_js"],{

/***/ 78165:
/*!******************************************************************************!*\
  !*** ./lib/webparts/timeSheet/components/DashboardAnalytics.module.scss.css ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@microsoft/sp-css-loader/node_modules/@microsoft/load-themed-styles/lib-es6/index.js */ 96323);
// Imports


_node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__.loadStyles(":root{--color-primary-50:#eff6ff;--color-primary-100:#dbeafe;--color-primary-200:#bfdbfe;--color-primary-300:#93c5fd;--color-primary-400:#60a5fa;--color-primary-500:#3b82f6;--color-primary-600:#2563eb;--color-primary-700:#1d4ed8;--color-primary-800:#1e40af;--color-primary-900:#1e3a8a;--color-secondary-50:#f8fafc;--color-secondary-100:#f1f5f9;--color-secondary-200:#e2e8f0;--color-secondary-300:#cbd5e1;--color-secondary-400:#94a3b8;--color-secondary-500:#64748b;--color-secondary-600:#475569;--color-secondary-700:#334155;--color-secondary-800:#1e293b;--color-secondary-900:#0f172a;--color-success-50:#f0fdf4;--color-success-100:#dcfce7;--color-success-500:#22c55e;--color-success-600:#16a34a;--color-success-700:#15803d;--color-warning-50:#fffbeb;--color-warning-100:#fef3c7;--color-warning-500:#f59e0b;--color-warning-600:#d97706;--color-error-50:#fef2f2;--color-error-100:#fee2e2;--color-error-500:#ef4444;--color-error-600:#dc2626;--gradient-primary:linear-gradient(135deg,#667eea,#764ba2);--gradient-success:linear-gradient(135deg,#84fab0,#8fd3f4);--gradient-warning:linear-gradient(135deg,#ffecd2,#fcb69f);--gradient-purple:linear-gradient(135deg,#a8edea,#fed6e3);--gradient-blue:linear-gradient(135deg,#667eea,#764ba2);--gradient-ocean:linear-gradient(135deg,#667db6,#0082c8 35%,#0082c8);--glass-bg:hsla(0,0%,100%,.25);--glass-border:hsla(0,0%,100%,.18);--glass-shadow:0 8px 32px 0 rgba(31,38,135,.37);--glass-backdrop:blur(8px);--shadow-xs:0 1px 2px 0 rgba(0,0,0,.05);--shadow-sm:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--shadow-md:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--shadow-lg:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--shadow-xl:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--shadow-2xl:0 25px 50px -12px rgba(0,0,0,.25);--shadow-primary:0 10px 25px rgba(59,130,246,.15);--shadow-success:0 10px 25px rgba(34,197,94,.15);--shadow-warning:0 10px 25px rgba(245,158,11,.15);--shadow-error:0 10px 25px rgba(239,68,68,.15);--font-family:\"Segoe UI\",\"Inter\",-apple-system,BlinkMacSystemFont,sans-serif;--font-size-xs:0.75rem;--font-size-sm:0.875rem;--font-size-base:1rem;--font-size-lg:1.125rem;--font-size-xl:1.25rem;--font-size-2xl:1.5rem;--font-size-3xl:1.875rem;--font-size-4xl:2.25rem;--font-weight-light:300;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--font-weight-extrabold:800;--line-height-tight:1.25;--line-height-snug:1.375;--line-height-normal:1.5;--line-height-relaxed:1.625;--space-1:0.25rem;--space-2:0.5rem;--space-3:0.75rem;--space-4:1rem;--space-5:1.25rem;--space-6:1.5rem;--space-8:2rem;--space-10:2.5rem;--space-12:3rem;--space-16:4rem;--space-20:5rem;--radius-sm:0.125rem;--radius-base:0.25rem;--radius-md:0.375rem;--radius-lg:0.5rem;--radius-xl:0.75rem;--radius-2xl:1rem;--radius-3xl:1.5rem;--radius-full:9999px;--z-dropdown:1000;--z-sticky:1020;--z-fixed:1030;--z-modal-backdrop:1040;--z-modal:1050;--z-popover:1060;--z-tooltip:1070;--transition-fast:all 150ms ease;--transition-base:all 200ms ease;--transition-slow:all 300ms ease;--transition-bounce:all 200ms cubic-bezier(0.68,-0.55,0.265,1.55)}.modern-card_5626104b{backdrop-filter:var(--glass-backdrop);background:var(--glass-bg);border:1px solid var(--glass-border);border-radius:var(--radius-xl);box-shadow:var(--shadow-lg);overflow:hidden;position:relative;transition:var(--transition-base)}.modern-card_5626104b:before{background:linear-gradient(90deg,transparent,hsla(0,0%,100%,.4),transparent);content:\"\";height:1px;left:0;pointer-events:none;position:absolute;right:0;top:0}.modern-card_5626104b:hover{border-color:hsla(0,0%,100%,.3);box-shadow:var(--shadow-xl);transform:translateY(-2px)}.card-gradient-primary_5626104b{background:var(--gradient-primary);color:#fff}.card-gradient-success_5626104b{background:var(--gradient-success);color:var(--color-secondary-800)}.card-gradient-warning_5626104b{background:var(--gradient-warning);color:var(--color-secondary-800)}.card-gradient-purple_5626104b{background:var(--gradient-purple);color:var(--color-secondary-800)}.text-gradient-primary_5626104b{-webkit-text-fill-color:transparent;background:var(--gradient-primary);-webkit-background-clip:text;background-clip:text;font-weight:var(--font-weight-bold)}.animate-fade-in_5626104b{animation:fadeIn_5626104b .6s ease-out}.animate-slide-up_5626104b{animation:slideUp_5626104b .5s ease-out}.animate-scale-in_5626104b{animation:scaleIn_5626104b .3s ease-out}@keyframes fadeIn_5626104b{0%{opacity:0}to{opacity:1}}@keyframes slideUp_5626104b{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes scaleIn_5626104b{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}.hover-lift_5626104b{transition:var(--transition-base)}.hover-lift_5626104b:hover{box-shadow:var(--shadow-xl);transform:translateY(-4px)}.hover-glow_5626104b{transition:var(--transition-base)}.hover-glow_5626104b:hover{box-shadow:0 0 20px rgba(59,130,246,.4)}.flex-center_5626104b,.flex-col-center_5626104b{align-items:center;display:flex;justify-content:center}.flex-col-center_5626104b{flex-direction:column}.bg-gradient-modern_5626104b{background:linear-gradient(135deg,#f5f7fa,#c3cfe2)}.bg-gradient-warm_5626104b{background:linear-gradient(135deg,#ffecd2,#fcb69f)}.bg-gradient-cool_5626104b{background:linear-gradient(135deg,#667eea,#764ba2)}.analyticsContainer_5626104b{animation:fadeIn_5626104b .8s ease-out;padding:var(--space-6) 0}.analyticsHeader_5626104b{align-items:center;border-bottom:1px solid rgba(226,232,240,.8);display:flex;flex-direction:row;flex-wrap:wrap;gap:12px;justify-content:space-between;margin-bottom:var(--space-6);padding-bottom:16px}.analyticsHeaderLeft_5626104b{display:flex;flex-direction:column;gap:4px}.viewToggle_5626104b{align-items:center;background:#f1f5f9;border-radius:10px;display:flex;flex-shrink:0;gap:2px;padding:3px}.toggleBtn_5626104b{align-items:center;background:transparent;border:none;border-radius:8px;color:#64748b;cursor:pointer;display:flex;font-size:12px;font-weight:500;gap:6px;padding:6px 14px;transition:all .18s ease;white-space:nowrap}.toggleBtn_5626104b svg{flex-shrink:0;opacity:.7}.toggleBtn_5626104b:hover:not(.toggleBtnActive_5626104b){background:hsla(0,0%,100%,.6);color:#334155}.toggleBtnActive_5626104b{background:#fff;box-shadow:0 1px 4px rgba(0,0,0,.1),0 0 0 1px rgba(102,126,234,.15);color:#667eea;font-weight:600}.toggleBtnActive_5626104b svg{opacity:1}.analyticsTitle_5626104b{color:#1e293b;font-size:18px;font-weight:700;letter-spacing:-.01em;line-height:1.2;margin:0}.analyticsSubtitle_5626104b{color:#94a3b8;font-size:13px;font-weight:400;margin:0}.statsGrid_5626104b{display:grid;gap:var(--space-5);grid-template-columns:repeat(4,1fr);margin-bottom:var(--space-8)}.statsCard_5626104b{align-items:flex-start;backdrop-filter:blur(20px);background:hsla(0,0%,100%,.9);border:1px solid hsla(0,0%,100%,.2);border-radius:var(--radius-2xl);box-shadow:var(--shadow-lg);display:flex;gap:var(--space-4);overflow:hidden;padding:var(--space-6);position:relative;transition:var(--transition-base)}.statsCard_5626104b:before{background:linear-gradient(90deg,transparent,hsla(0,0%,100%,.6),transparent);content:\"\";height:1px;left:0;pointer-events:none;position:absolute;right:0;top:0}.statsCard_5626104b:hover{border-color:hsla(0,0%,100%,.4);box-shadow:var(--shadow-xl);transform:translateY(-2px)}.statsCardBlue_5626104b{background:linear-gradient(135deg,rgba(59,130,246,.1),rgba(147,197,253,.1));border-color:rgba(59,130,246,.2)}.statsCardBlue_5626104b:hover{box-shadow:var(--shadow-primary)}.statsCardGreen_5626104b{background:linear-gradient(135deg,rgba(34,197,94,.1),rgba(134,239,172,.1));border-color:rgba(34,197,94,.2)}.statsCardGreen_5626104b:hover{box-shadow:var(--shadow-success)}.statsCardPurple_5626104b{background:linear-gradient(135deg,rgba(139,92,246,.1),rgba(196,181,253,.1));border-color:rgba(139,92,246,.2)}.statsCardOrange_5626104b{background:linear-gradient(135deg,rgba(245,158,11,.1),rgba(251,191,36,.1));border-color:rgba(245,158,11,.2)}.statsCardOrange_5626104b:hover{box-shadow:var(--shadow-warning)}.statsIcon_5626104b{backdrop-filter:blur(10px);background:hsla(0,0%,100%,.5);border-radius:var(--radius-lg);color:var(--color-primary-600);flex-shrink:0;padding:var(--space-3);transition:var(--transition-base)}.statsCard_5626104b:hover .statsIcon_5626104b{background:hsla(0,0%,100%,.8);transform:scale(1.1)}.statsContent_5626104b{flex:1;min-width:0}.statsTitle_5626104b{color:var(--color-secondary-600);font-size:var(--font-size-sm);font-weight:var(--font-weight-medium);letter-spacing:.05em;margin:0 0 var(--space-1) 0;text-transform:uppercase}.statsValue_5626104b{color:var(--color-secondary-900);font-size:var(--font-size-2xl);font-weight:var(--font-weight-bold);line-height:var(--line-height-tight);margin-bottom:var(--space-1)}.statsSubtitle_5626104b{color:var(--color-secondary-500);font-size:var(--font-size-xs);margin:0}.statsTrend_5626104b{align-items:center;display:flex;font-size:var(--font-size-xs);font-weight:var(--font-weight-semibold);gap:var(--space-1);margin-top:var(--space-2)}.trendUp_5626104b{color:var(--color-success-600)}.trendDown_5626104b{color:var(--color-error-600)}.trendIcon_5626104b{font-size:var(--font-size-sm)}.chartsGrid_5626104b{display:flex;flex-direction:column;gap:var(--space-8);margin-bottom:var(--space-10);width:100%}.chartFullWidth_5626104b{grid-column:1/-1;width:100%}.chartsRow_5626104b{display:grid;gap:3%;grid-template-columns:repeat(2,1fr);width:100%}@media (max-width:1024px){.chartsRow_5626104b{gap:var(--space-6);grid-template-columns:1fr}}@media (max-width:768px){.chartsGrid_5626104b{gap:var(--space-6)}.chartsRow_5626104b{gap:var(--space-4);grid-template-columns:1fr}.chartContainer_5626104b{min-height:280px;padding:var(--space-6)}.chart_5626104b{height:240px}.chartFullWidth_5626104b .chart_5626104b{height:260px}.chartMedium_5626104b .chart_5626104b{height:240px}.chartTitle_5626104b{font-size:var(--font-size-lg);margin:0 0 var(--space-4) 0}}@media (max-width:480px){.chartContainer_5626104b{min-height:240px;padding:var(--space-4)}.chart_5626104b{height:200px}.chartFullWidth_5626104b .chart_5626104b{height:220px}.chartMedium_5626104b .chart_5626104b{height:200px}.chartTitle_5626104b{font-size:var(--font-size-base);margin:0 0 var(--space-3) 0}}.chartContainer_5626104b{background:#fff;border:1px solid rgba(226,232,240,.8);border-radius:var(--radius-2xl);box-shadow:0 1px 4px rgba(0,0,0,.06),0 4px 12px rgba(0,0,0,.04);overflow:hidden;padding:10px;position:relative;transition:var(--transition-base);width:100%}.chartContainer_5626104b:before{background:linear-gradient(90deg,transparent,hsla(0,0%,100%,.6),transparent);content:\"\";height:1px;left:0;pointer-events:none;position:absolute;right:0;top:0}.chartContainer_5626104b:hover{border-color:hsla(0,0%,100%,.4);box-shadow:var(--shadow-xl);transform:translateY(-2px)}.chartTitle_5626104b{align-items:center;color:#475569;display:flex;font-size:13px;font-weight:600;gap:8px;letter-spacing:.06em;margin:0 0 16px;text-transform:uppercase}.chartTitle_5626104b:before{background:linear-gradient(180deg,#6366f1,#8b5cf6);border-radius:2px;content:\"\";display:inline-block;flex-shrink:0;height:14px;width:3px}.chart_5626104b{height:240px;width:100%}.chartMedium_5626104b{width:100%}.chartFullWidth_5626104b .chart_5626104b,.chartMedium_5626104b .chart_5626104b{height:240px}.recentActivity_5626104b{backdrop-filter:blur(20px);background:hsla(0,0%,100%,.9);border:1px solid hsla(0,0%,100%,.2);border-radius:var(--radius-2xl);box-shadow:var(--shadow-lg);overflow:hidden;padding:var(--space-6);position:relative}.recentActivity_5626104b:before{background:linear-gradient(90deg,transparent,hsla(0,0%,100%,.6),transparent);content:\"\";height:1px;left:0;pointer-events:none;position:absolute;right:0;top:0}.activityTitle_5626104b{color:var(--color-secondary-800);font-size:var(--font-size-xl);font-weight:var(--font-weight-semibold);margin:0 0 var(--space-6) 0}.activityList_5626104b{display:flex;flex-direction:column;gap:var(--space-4)}.activityItem_5626104b{align-items:flex-start;background:hsla(0,0%,100%,.5);border-radius:var(--radius-lg);display:flex;gap:var(--space-3);padding:var(--space-3);transition:var(--transition-base)}.activityItem_5626104b:hover{background:hsla(0,0%,100%,.8);transform:translateX(4px)}.activityIcon_5626104b{align-items:center;border-radius:var(--radius-lg);display:flex;flex-shrink:0;font-size:var(--font-size-sm);height:32px;justify-content:center;width:32px}.activityBlue_5626104b{background:rgba(59,130,246,.1);color:var(--color-primary-600)}.activityGreen_5626104b{background:rgba(34,197,94,.1);color:var(--color-success-600)}.activityRed_5626104b{background:rgba(239,68,68,.1);color:var(--color-error-600)}.activityGray_5626104b{background:hsla(220,9%,46%,.1);color:var(--color-secondary-600)}.activityContent_5626104b{flex:1;min-width:0}.activityDescription_5626104b{color:var(--color-secondary-800);font-size:var(--font-size-sm);font-weight:var(--font-weight-medium);line-height:var(--line-height-snug);margin:0 0 var(--space-1) 0}.activityTime_5626104b{color:var(--color-secondary-500);font-size:var(--font-size-xs)}.emptyActivity_5626104b{color:var(--color-secondary-500);font-style:italic;padding:var(--space-8);text-align:center}.emptyContainer_5626104b,.errorContainer_5626104b,.loadingContainer_5626104b{align-items:center;backdrop-filter:blur(20px);background:hsla(0,0%,100%,.9);border:1px solid hsla(0,0%,100%,.2);border-radius:var(--radius-2xl);box-shadow:var(--shadow-lg);color:var(--color-secondary-600);display:flex;flex-direction:column;gap:var(--space-4);justify-content:center;padding:var(--space-12)}.spinner_5626104b{animation:spin_5626104b 1s linear infinite;border:3px solid rgba(59,130,246,.2);border-radius:50%;border-top:3px solid var(--color-primary-600);height:32px;width:32px}@keyframes spin_5626104b{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.errorContainer_5626104b{color:var(--color-error-600)}@media (max-width:900px){.statsGrid_5626104b{gap:var(--space-4);grid-template-columns:repeat(2,1fr)}.chartsRow_5626104b{grid-template-columns:1fr}}@media (max-width:600px){.analyticsContainer_5626104b{padding:var(--space-4) 0}.statsGrid_5626104b{gap:var(--space-3);grid-template-columns:repeat(2,1fr);margin-bottom:var(--space-5)}.statsCard_5626104b{padding:var(--space-4)}.statsValue_5626104b{font-size:var(--font-size-xl)}.chartContainer_5626104b{padding:16px}.chartFullWidth_5626104b .chart_5626104b,.chartMedium_5626104b .chart_5626104b,.chart_5626104b{height:200px}.recentActivity_5626104b{padding:var(--space-4)}}.statsCard_5626104b:first-child{animation:slideUp_5626104b .6s ease-out .1s both}.statsCard_5626104b:nth-child(2){animation:slideUp_5626104b .6s ease-out .2s both}.statsCard_5626104b:nth-child(3){animation:slideUp_5626104b .6s ease-out .3s both}.statsCard_5626104b:nth-child(4){animation:slideUp_5626104b .6s ease-out .4s both}.chartContainer_5626104b:first-child{animation:scaleIn_5626104b .6s ease-out .5s both}.chartContainer_5626104b:nth-child(2){animation:scaleIn_5626104b .6s ease-out .6s both}.chartContainer_5626104b:nth-child(3){animation:scaleIn_5626104b .6s ease-out .7s both}.recentActivity_5626104b{animation:fadeIn_5626104b .6s ease-out .8s both}", true);

// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "modern-card": "modern-card_5626104b",
  "card-gradient-primary": "card-gradient-primary_5626104b",
  "card-gradient-success": "card-gradient-success_5626104b",
  "card-gradient-warning": "card-gradient-warning_5626104b",
  "card-gradient-purple": "card-gradient-purple_5626104b",
  "text-gradient-primary": "text-gradient-primary_5626104b",
  "animate-fade-in": "animate-fade-in_5626104b",
  fadeIn: "fadeIn_5626104b",
  "animate-slide-up": "animate-slide-up_5626104b",
  slideUp: "slideUp_5626104b",
  "animate-scale-in": "animate-scale-in_5626104b",
  scaleIn: "scaleIn_5626104b",
  "hover-lift": "hover-lift_5626104b",
  "hover-glow": "hover-glow_5626104b",
  "flex-center": "flex-center_5626104b",
  "flex-col-center": "flex-col-center_5626104b",
  "bg-gradient-modern": "bg-gradient-modern_5626104b",
  "bg-gradient-warm": "bg-gradient-warm_5626104b",
  "bg-gradient-cool": "bg-gradient-cool_5626104b",
  analyticsContainer: "analyticsContainer_5626104b",
  analyticsHeader: "analyticsHeader_5626104b",
  analyticsHeaderLeft: "analyticsHeaderLeft_5626104b",
  viewToggle: "viewToggle_5626104b",
  toggleBtn: "toggleBtn_5626104b",
  toggleBtnActive: "toggleBtnActive_5626104b",
  analyticsTitle: "analyticsTitle_5626104b",
  analyticsSubtitle: "analyticsSubtitle_5626104b",
  statsGrid: "statsGrid_5626104b",
  statsCard: "statsCard_5626104b",
  statsCardBlue: "statsCardBlue_5626104b",
  statsCardGreen: "statsCardGreen_5626104b",
  statsCardPurple: "statsCardPurple_5626104b",
  statsCardOrange: "statsCardOrange_5626104b",
  statsIcon: "statsIcon_5626104b",
  statsContent: "statsContent_5626104b",
  statsTitle: "statsTitle_5626104b",
  statsValue: "statsValue_5626104b",
  statsSubtitle: "statsSubtitle_5626104b",
  statsTrend: "statsTrend_5626104b",
  trendUp: "trendUp_5626104b",
  trendDown: "trendDown_5626104b",
  trendIcon: "trendIcon_5626104b",
  chartsGrid: "chartsGrid_5626104b",
  chartFullWidth: "chartFullWidth_5626104b",
  chartsRow: "chartsRow_5626104b",
  chartContainer: "chartContainer_5626104b",
  chart: "chart_5626104b",
  chartMedium: "chartMedium_5626104b",
  chartTitle: "chartTitle_5626104b",
  recentActivity: "recentActivity_5626104b",
  activityTitle: "activityTitle_5626104b",
  activityList: "activityList_5626104b",
  activityItem: "activityItem_5626104b",
  activityIcon: "activityIcon_5626104b",
  activityBlue: "activityBlue_5626104b",
  activityGreen: "activityGreen_5626104b",
  activityRed: "activityRed_5626104b",
  activityGray: "activityGray_5626104b",
  activityContent: "activityContent_5626104b",
  activityDescription: "activityDescription_5626104b",
  activityTime: "activityTime_5626104b",
  emptyActivity: "emptyActivity_5626104b",
  loadingContainer: "loadingContainer_5626104b",
  errorContainer: "errorContainer_5626104b",
  emptyContainer: "emptyContainer_5626104b",
  spinner: "spinner_5626104b",
  spin: "spin_5626104b"
});


/***/ }),

/***/ 36033:
/*!***************************************************************!*\
  !*** ./lib/webparts/timeSheet/views/HomePage.module.scss.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@microsoft/sp-css-loader/node_modules/@microsoft/load-themed-styles/lib-es6/index.js */ 96323);
// Imports


_node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__.loadStyles(":root{--color-primary-50:#eff6ff;--color-primary-100:#dbeafe;--color-primary-200:#bfdbfe;--color-primary-300:#93c5fd;--color-primary-400:#60a5fa;--color-primary-500:#3b82f6;--color-primary-600:#2563eb;--color-primary-700:#1d4ed8;--color-primary-800:#1e40af;--color-primary-900:#1e3a8a;--color-secondary-50:#f8fafc;--color-secondary-100:#f1f5f9;--color-secondary-200:#e2e8f0;--color-secondary-300:#cbd5e1;--color-secondary-400:#94a3b8;--color-secondary-500:#64748b;--color-secondary-600:#475569;--color-secondary-700:#334155;--color-secondary-800:#1e293b;--color-secondary-900:#0f172a;--color-success-50:#f0fdf4;--color-success-100:#dcfce7;--color-success-500:#22c55e;--color-success-600:#16a34a;--color-success-700:#15803d;--color-warning-50:#fffbeb;--color-warning-100:#fef3c7;--color-warning-500:#f59e0b;--color-warning-600:#d97706;--color-error-50:#fef2f2;--color-error-100:#fee2e2;--color-error-500:#ef4444;--color-error-600:#dc2626;--gradient-primary:linear-gradient(135deg,#667eea,#764ba2);--gradient-success:linear-gradient(135deg,#84fab0,#8fd3f4);--gradient-warning:linear-gradient(135deg,#ffecd2,#fcb69f);--gradient-purple:linear-gradient(135deg,#a8edea,#fed6e3);--gradient-blue:linear-gradient(135deg,#667eea,#764ba2);--gradient-ocean:linear-gradient(135deg,#667db6,#0082c8 35%,#0082c8);--glass-bg:hsla(0,0%,100%,.25);--glass-border:hsla(0,0%,100%,.18);--glass-shadow:0 8px 32px 0 rgba(31,38,135,.37);--glass-backdrop:blur(8px);--shadow-xs:0 1px 2px 0 rgba(0,0,0,.05);--shadow-sm:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--shadow-md:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--shadow-lg:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--shadow-xl:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--shadow-2xl:0 25px 50px -12px rgba(0,0,0,.25);--shadow-primary:0 10px 25px rgba(59,130,246,.15);--shadow-success:0 10px 25px rgba(34,197,94,.15);--shadow-warning:0 10px 25px rgba(245,158,11,.15);--shadow-error:0 10px 25px rgba(239,68,68,.15);--font-family:\"Segoe UI\",\"Inter\",-apple-system,BlinkMacSystemFont,sans-serif;--font-size-xs:0.75rem;--font-size-sm:0.875rem;--font-size-base:1rem;--font-size-lg:1.125rem;--font-size-xl:1.25rem;--font-size-2xl:1.5rem;--font-size-3xl:1.875rem;--font-size-4xl:2.25rem;--font-weight-light:300;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--font-weight-extrabold:800;--line-height-tight:1.25;--line-height-snug:1.375;--line-height-normal:1.5;--line-height-relaxed:1.625;--space-1:0.25rem;--space-2:0.5rem;--space-3:0.75rem;--space-4:1rem;--space-5:1.25rem;--space-6:1.5rem;--space-8:2rem;--space-10:2.5rem;--space-12:3rem;--space-16:4rem;--space-20:5rem;--radius-sm:0.125rem;--radius-base:0.25rem;--radius-md:0.375rem;--radius-lg:0.5rem;--radius-xl:0.75rem;--radius-2xl:1rem;--radius-3xl:1.5rem;--radius-full:9999px;--z-dropdown:1000;--z-sticky:1020;--z-fixed:1030;--z-modal-backdrop:1040;--z-modal:1050;--z-popover:1060;--z-tooltip:1070;--transition-fast:all 150ms ease;--transition-base:all 200ms ease;--transition-slow:all 300ms ease;--transition-bounce:all 200ms cubic-bezier(0.68,-0.55,0.265,1.55)}.modern-card_35bc79a2{backdrop-filter:var(--glass-backdrop);background:var(--glass-bg);border:1px solid var(--glass-border);border-radius:var(--radius-xl);box-shadow:var(--shadow-lg);overflow:hidden;position:relative;transition:var(--transition-base)}.modern-card_35bc79a2:before{background:linear-gradient(90deg,transparent,hsla(0,0%,100%,.4),transparent);content:\"\";height:1px;left:0;pointer-events:none;position:absolute;right:0;top:0}.modern-card_35bc79a2:hover{border-color:hsla(0,0%,100%,.3);box-shadow:var(--shadow-xl);transform:translateY(-2px)}.card-gradient-primary_35bc79a2{background:var(--gradient-primary);color:#fff}.card-gradient-success_35bc79a2{background:var(--gradient-success);color:var(--color-secondary-800)}.card-gradient-warning_35bc79a2{background:var(--gradient-warning);color:var(--color-secondary-800)}.card-gradient-purple_35bc79a2{background:var(--gradient-purple);color:var(--color-secondary-800)}.text-gradient-primary_35bc79a2{-webkit-text-fill-color:transparent;background:var(--gradient-primary);-webkit-background-clip:text;background-clip:text;font-weight:var(--font-weight-bold)}.animate-fade-in_35bc79a2{animation:fadeIn_35bc79a2 .6s ease-out}.animate-slide-up_35bc79a2{animation:slideUp_35bc79a2 .5s ease-out}.animate-scale-in_35bc79a2{animation:scaleIn_35bc79a2 .3s ease-out}@keyframes scaleIn_35bc79a2{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}.hover-lift_35bc79a2{transition:var(--transition-base)}.hover-lift_35bc79a2:hover{box-shadow:var(--shadow-xl);transform:translateY(-4px)}.hover-glow_35bc79a2{transition:var(--transition-base)}.hover-glow_35bc79a2:hover{box-shadow:0 0 20px rgba(59,130,246,.4)}.flex-center_35bc79a2,.flex-col-center_35bc79a2{align-items:center;display:flex;justify-content:center}.flex-col-center_35bc79a2{flex-direction:column}.bg-gradient-modern_35bc79a2{background:linear-gradient(135deg,#f5f7fa,#c3cfe2)}.bg-gradient-warm_35bc79a2{background:linear-gradient(135deg,#ffecd2,#fcb69f)}.bg-gradient-cool_35bc79a2{background:linear-gradient(135deg,#667eea,#764ba2)}.webpart-container_35bc79a2{background:linear-gradient(135deg,#fff,#f8fafc);border:1px solid rgba(203,213,225,.4);border-radius:12px;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);margin:16px;overflow:hidden;position:relative}.webpart-container_35bc79a2:before{background:linear-gradient(90deg,transparent,hsla(0,0%,100%,.8),transparent);content:\"\";height:1px;left:0;pointer-events:none;position:absolute;right:0;top:0}.dashboard-root_35bc79a2{font-family:Segoe UI,Inter,-apple-system,BlinkMacSystemFont,sans-serif;position:relative;width:100%}.dashboard-header_35bc79a2{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;overflow:hidden;padding:24px 32px;position:relative}.dashboard-header_35bc79a2:before{background:radial-gradient(circle at 20% 50%,hsla(0,0%,100%,.15) 0,transparent 50%),radial-gradient(circle at 80% 20%,hsla(0,0%,100%,.1) 0,transparent 50%);bottom:0;content:\"\";left:0;pointer-events:none;position:absolute;right:0;top:0}.header-content_35bc79a2{position:relative;z-index:1}.dashboard-page-title_35bc79a2{color:#fff;font-size:28px;font-weight:700;line-height:1.2;margin:0 0 8px;text-shadow:0 1px 2px rgba(0,0,0,.1)}.dashboard-section-title_35bc79a2{color:hsla(0,0%,100%,.9);font-size:14px;font-weight:400;margin:0}.dashboard-section-title_35bc79a2 strong{color:#fff;font-weight:600}.quick-access-section_35bc79a2{background:#f8fafc;padding:24px 0 28px;position:relative}.quick-access-section_35bc79a2:before{background:linear-gradient(90deg,transparent,rgba(102,126,234,.2),rgba(118,75,162,.2),transparent);content:\"\";height:1px;left:32px;position:absolute;right:32px;top:0}.section-header_35bc79a2{align-items:center;display:flex;gap:10px;margin-bottom:18px;padding:0 32px;position:relative;z-index:1}.section-header_35bc79a2:before{background:linear-gradient(180deg,#667eea,#764ba2);border-radius:2px;content:\"\";display:block;flex-shrink:0;height:22px;width:4px}.section-title_35bc79a2{color:#1e293b;font-size:15px;font-weight:700;letter-spacing:.01em;line-height:1.2;margin:0;text-transform:uppercase}.section-subtitle_35bc79a2{color:#94a3b8;font-size:13px;font-weight:400;margin:0 0 0 auto}.navigation-grid_35bc79a2{align-items:stretch;border-bottom:1px solid rgba(203,213,225,.5);border-top:1px solid rgba(203,213,225,.5);display:flex;flex-wrap:nowrap;gap:11px;padding:0}.nav-card_35bc79a2{align-items:center;animation:cardSlideIn_35bc79a2 .45s cubic-bezier(.22,1,.36,1) both;background:#fff;border:none;border-radius:0;border-right:1px solid rgba(203,213,225,.45);border-top:4px solid var(--accent-color,#0078d4);box-sizing:border-box;cursor:pointer;display:flex;flex-direction:column;justify-content:center;overflow:hidden;padding:24px 22px 20px;position:relative;transition:background .3s cubic-bezier(.4,0,.2,1),transform .25s cubic-bezier(.4,0,.2,1),box-shadow .3s cubic-bezier(.4,0,.2,1);width:100%}.nav-card_35bc79a2:first-child{animation-delay:.04s}.nav-card_35bc79a2:nth-child(2){animation-delay:.09s}.nav-card_35bc79a2:nth-child(3){animation-delay:.14s}.nav-card_35bc79a2:nth-child(4){animation-delay:.19s}.nav-card_35bc79a2:nth-child(5){animation-delay:.24s}.nav-card_35bc79a2:last-child{border-right:none}.nav-card_35bc79a2:before{background:var(--accent-color,#0078d4);content:\"\";inset:0;opacity:0;pointer-events:none;position:absolute;transition:opacity .3s ease}.nav-card_35bc79a2:hover:before{opacity:.05}.nav-card_35bc79a2:after{background:var(--accent-color,#0078d4);bottom:0;content:\"\";height:2px;left:0;position:absolute;right:0;transform:scaleX(0);transform-origin:left center;transition:transform .35s cubic-bezier(.4,0,.2,1)}.nav-card_35bc79a2:hover:after{transform:scaleX(1)}.nav-card_35bc79a2:hover{box-shadow:0 14px 28px -6px rgba(0,0,0,.13),0 4px 10px -3px rgba(0,0,0,.07);transform:translateY(-4px);z-index:2}.nav-card_35bc79a2:active{transform:translateY(-1px);transition-duration:.08s}.nav-card_35bc79a2:focus{outline:2px solid var(--accent-color,#0078d4);outline-offset:-2px;z-index:3}.nav-card-primary_35bc79a2{background:linear-gradient(160deg,rgba(102,126,234,.03),#fff 55%)}.nav-card-icon-wrap_35bc79a2{align-items:center;background:#f1f5f9;border:1px solid rgba(0,0,0,.06);border-radius:13px;display:flex;flex-shrink:0;height:50px;justify-content:center;margin-bottom:16px;overflow:hidden;position:relative;transition:transform .3s cubic-bezier(.34,1.56,.64,1),border-color .2s ease;width:50px}.nav-card-icon-wrap_35bc79a2:before{background:var(--accent-color,#0078d4);border-radius:inherit;content:\"\";inset:0;opacity:.1;position:absolute;transition:opacity .3s ease}.nav-card_35bc79a2:hover .nav-card-icon-wrap_35bc79a2:before{opacity:.18}.nav-card_35bc79a2:hover .nav-card-icon-wrap_35bc79a2{border-color:rgba(0,0,0,.12);transform:scale(1.1) rotate(-4deg)}.nav-card-info_35bc79a2{flex:0 0 auto;margin-bottom:14px;min-width:0}.nav-card-title_35bc79a2{color:#1e293b;font-size:14px;font-weight:700;line-height:1.3;margin:0 0 4px;overflow:hidden;text-overflow:ellipsis;transition:color .2s ease;white-space:nowrap}.nav-card_35bc79a2:hover .nav-card-title_35bc79a2{color:var(--accent-color,#0078d4)}.nav-card-description_35bc79a2{color:#94a3b8;font-size:11px;line-height:1.4;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.nav-card-footer_35bc79a2{align-items:center;border-top:1px solid #f1f5f9;display:flex;justify-content:space-between;padding-top:12px}.nav-card-tag_35bc79a2{background:#f0f4f8;border:1px solid transparent;border-radius:6px;color:var(--accent-color,#0078d4);font-size:10px;font-weight:700;letter-spacing:.08em;padding:4px 10px;text-transform:uppercase;transition:background .25s ease,color .25s ease,border-color .25s ease}.nav-card_35bc79a2:hover .nav-card-tag_35bc79a2{background:var(--accent-color,#0078d4);border-color:var(--accent-color,#0078d4);color:#fff}.action-icon_35bc79a2{color:#cbd5e1;font-size:12px;transition:color .2s ease,transform .25s ease}.nav-card_35bc79a2:hover .action-icon_35bc79a2{color:var(--accent-color,#0078d4);transform:translateX(3px)}@media (max-width:900px){.navigation-grid_35bc79a2{border-bottom:none;flex-wrap:wrap}.nav-card_35bc79a2{border-bottom:1px solid rgba(203,213,225,.45);border-right:1px solid rgba(203,213,225,.45);flex:1 1 50%;min-width:160px}.nav-card_35bc79a2:nth-child(2n){border-right:none}}@media (max-width:768px){.webpart-container_35bc79a2{border-radius:8px;margin:8px}.dashboard-header_35bc79a2{padding:20px 24px}.dashboard-page-title_35bc79a2{font-size:24px}.dashboard-section-title_35bc79a2{font-size:13px}.quick-access-section_35bc79a2{padding:20px 0 24px}.section-header_35bc79a2{margin-bottom:14px;padding:0 20px}.nav-card_35bc79a2{padding:18px 16px 16px}}@media (max-width:480px){.webpart-container_35bc79a2{margin:4px}.dashboard-header_35bc79a2{padding:16px 20px}.dashboard-page-title_35bc79a2{font-size:22px}.quick-access-section_35bc79a2{padding:16px 0 20px}.section-header_35bc79a2{padding:0 16px}.navigation-grid_35bc79a2{border-bottom:none;flex-direction:column;flex-wrap:nowrap}.nav-card_35bc79a2{border-bottom:1px solid rgba(203,213,225,.45);border-right:none;flex:none;padding:16px 16px 14px;width:100%}.nav-card_35bc79a2:last-child{border-bottom:none}.nav-card_35bc79a2:nth-child(2n){border-right:none}.nav-card_35bc79a2:hover{transform:translateY(-2px)}}.dashboard-root_35bc79a2>:last-child{padding:24px 32px 32px}@media (max-width:768px){.dashboard-root_35bc79a2>:last-child{padding:20px 24px 24px}}@media (max-width:480px){.dashboard-root_35bc79a2>:last-child{padding:16px 20px 20px}}@keyframes slideUp_35bc79a2{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn_35bc79a2{0%{opacity:0}to{opacity:1}}@keyframes cardSlideIn_35bc79a2{0%{opacity:0;transform:translateY(14px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}.nav-item_35bc79a2:focus{outline:2px solid #3b82f6;outline-offset:-2px}.nav-item_35bc79a2:focus:not(:focus-visible){outline:none}", true);

// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "modern-card": "modern-card_35bc79a2",
  "card-gradient-primary": "card-gradient-primary_35bc79a2",
  "card-gradient-success": "card-gradient-success_35bc79a2",
  "card-gradient-warning": "card-gradient-warning_35bc79a2",
  "card-gradient-purple": "card-gradient-purple_35bc79a2",
  "text-gradient-primary": "text-gradient-primary_35bc79a2",
  "animate-fade-in": "animate-fade-in_35bc79a2",
  fadeIn: "fadeIn_35bc79a2",
  "animate-slide-up": "animate-slide-up_35bc79a2",
  slideUp: "slideUp_35bc79a2",
  "animate-scale-in": "animate-scale-in_35bc79a2",
  scaleIn: "scaleIn_35bc79a2",
  "hover-lift": "hover-lift_35bc79a2",
  "hover-glow": "hover-glow_35bc79a2",
  "flex-center": "flex-center_35bc79a2",
  "flex-col-center": "flex-col-center_35bc79a2",
  "bg-gradient-modern": "bg-gradient-modern_35bc79a2",
  "bg-gradient-warm": "bg-gradient-warm_35bc79a2",
  "bg-gradient-cool": "bg-gradient-cool_35bc79a2",
  "webpart-container": "webpart-container_35bc79a2",
  "dashboard-root": "dashboard-root_35bc79a2",
  "dashboard-header": "dashboard-header_35bc79a2",
  "header-content": "header-content_35bc79a2",
  "dashboard-page-title": "dashboard-page-title_35bc79a2",
  "dashboard-section-title": "dashboard-section-title_35bc79a2",
  "quick-access-section": "quick-access-section_35bc79a2",
  "section-header": "section-header_35bc79a2",
  "section-title": "section-title_35bc79a2",
  "section-subtitle": "section-subtitle_35bc79a2",
  "navigation-grid": "navigation-grid_35bc79a2",
  "nav-card": "nav-card_35bc79a2",
  cardSlideIn: "cardSlideIn_35bc79a2",
  "nav-card-primary": "nav-card-primary_35bc79a2",
  "nav-card-icon-wrap": "nav-card-icon-wrap_35bc79a2",
  "nav-card-info": "nav-card-info_35bc79a2",
  "nav-card-title": "nav-card-title_35bc79a2",
  "nav-card-description": "nav-card-description_35bc79a2",
  "nav-card-footer": "nav-card-footer_35bc79a2",
  "nav-card-tag": "nav-card-tag_35bc79a2",
  "action-icon": "action-icon_35bc79a2",
  "nav-item": "nav-item_35bc79a2"
});


/***/ }),

/***/ 46695:
/*!*****************************************************************!*\
  !*** ./lib/webparts/timeSheet/components/DashboardAnalytics.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 10196);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 85959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react */ 5613);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AppContext */ 24770);
/* harmony import */ var _services_AnalyticsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/AnalyticsService */ 77164);
/* harmony import */ var _services_TeamAnalyticsService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/TeamAnalyticsService */ 4033);
/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/dateUtils */ 28613);
/* harmony import */ var TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! TimeSheetWebPartStrings */ 31339);
/* harmony import */ var TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SimpleChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SimpleChart */ 65565);
/* harmony import */ var _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DashboardAnalytics.module.scss */ 78165);











var Chart = function (_a) {
    var data = _a.data, type = _a.type, title = _a.title, className = _a.className;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].chartContainer, " ").concat(className || '') },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].chartTitle }, title),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SimpleChart__WEBPACK_IMPORTED_MODULE_5__["default"], { data: data, type: type, title: title, className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].chart, height: 200, width: 400 })));
};
var StatsCard = function (_a) {
    var title = _a.title, value = _a.value, subtitle = _a.subtitle, icon = _a.icon, color = _a.color, trend = _a.trend;
    // Get color-specific class
    var getColorClass = function () {
        switch (color) {
            case 'blue': return _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]['statsCardBlue'] || '';
            case 'green': return _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]['statsCardGreen'] || '';
            case 'purple': return _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]['statsCardPurple'] || '';
            case 'orange': return _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]['statsCardOrange'] || '';
            default: return '';
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].statsCard, " ").concat(getColorClass()) },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].statsIcon }, icon),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].statsContent },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].statsTitle }, title),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].statsValue }, value),
            subtitle && react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].statsSubtitle }, subtitle),
            trend && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].statsTrend, " ").concat(trend.direction === 'up' ? _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].trendUp : _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].trendDown) },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].trendIcon }, trend.direction === 'up' ? '↗' : '↘'),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                    Math.abs(trend.value),
                    "%"))))));
};
// Toggle button styles — active uses the project theme purple, inactive is transparent
var toggleButtonStyles = function (isActive) { return ({
    root: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '6px 14px',
        border: 'none',
        borderRadius: 8,
        fontSize: 12,
        fontWeight: isActive ? 600 : 500,
        color: isActive ? '#667eea' : '#64748b',
        background: isActive ? '#ffffff' : 'transparent',
        boxShadow: isActive ? '0 1px 4px rgba(0,0,0,0.1), 0 0 0 1px rgba(102,126,234,0.15)' : 'none',
        minWidth: 'auto',
        height: 'auto',
        whiteSpace: 'nowrap',
    },
    rootHovered: {
        background: isActive ? '#ffffff' : 'rgba(255,255,255,0.6)',
        color: isActive ? '#667eea' : '#334155',
        border: 'none',
    },
    rootPressed: {
        background: '#ffffff',
        color: '#667eea',
        border: 'none',
    },
    label: {
        fontSize: 12,
        fontWeight: isActive ? 600 : 500,
        color: isActive ? '#667eea' : '#64748b',
    },
    icon: {
        fontSize: 14,
        color: isActive ? '#667eea' : '#94a3b8',
    },
}); };
var RecentActivity = function (_a) {
    var activities = _a.activities;
    var getActivityIcon = function (type) {
        switch (type) {
            case 'submitted':
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M8 2a6 6 0 100 12A6 6 0 008 2zM7 5a1 1 0 112 0v2a1 1 0 11-2 0V5zM8 9a1 1 0 100 2 1 1 0 000-2z" })));
            case 'approved':
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" })));
            case 'rejected':
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z" })));
            default:
                return null;
        }
    };
    var getActivityColor = function (type) {
        switch (type) {
            case 'submitted': return 'blue';
            case 'approved': return 'green';
            case 'rejected': return 'red';
            default: return 'gray';
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].recentActivity },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].activityTitle }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.RecentActivity),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].activityList }, activities.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].emptyActivity },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.NoRecentActivity))) : (activities.map(function (activity) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: activity.id, className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].activityItem },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].activityIcon, " ").concat((function () {
                    var color = getActivityColor(activity.type);
                    switch (color) {
                        case 'blue': return _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]['activityBlue'];
                        case 'green': return _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]['activityGreen'];
                        case 'red': return _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]['activityRed'];
                        case 'gray': return _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]['activityGray'];
                        default: return '';
                    }
                })()) }, getActivityIcon(activity.type)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].activityContent },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].activityDescription }, activity.description),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].activityTime }, (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_7__.formatDateShort)(activity.timestamp))))); })))));
};
// Main Dashboard Analytics Component
var DashboardAnalytics = function () {
    var currentUser = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__.AppContext).currentUser;
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), analyticsData = _a[0], setAnalyticsData = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), loading = _b[0], setLoading = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), error = _c[0], setError = _c[1];
    var isManagerOrAdmin = currentUser.role === 'Manager' || currentUser.role === 'Admin';
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isTeamView = _d[0], setIsTeamView = _d[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var loadAnalytics = function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(void 0, void 0, void 0, function () {
            var data, _a, err_1;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, 6, 7]);
                        setLoading(true);
                        setError('');
                        if (!isTeamView) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0,_services_TeamAnalyticsService__WEBPACK_IMPORTED_MODULE_3__.getTeamAnalyticsData)()];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, (0,_services_AnalyticsService__WEBPACK_IMPORTED_MODULE_2__.getAnalyticsData)(currentUser.email)];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        data = _a;
                        setAnalyticsData(data);
                        return [3 /*break*/, 7];
                    case 5:
                        err_1 = _b.sent();
                        setError(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.AnalyticsFailed);
                        console.error('Analytics error:', err_1);
                        return [3 /*break*/, 7];
                    case 6:
                        setLoading(false);
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        void loadAnalytics();
    }, [currentUser.email, isTeamView]);
    if (loading) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].loadingContainer },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].spinner }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.LoadingAnalytics)));
    }
    if (error) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].errorContainer },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, error)));
    }
    if (!analyticsData) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].emptyContainer },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.NoAnalyticsData)));
    }
    var last7Days = analyticsData.last7Days, monthlyHours = analyticsData.monthlyHours, weeklyDistribution = analyticsData.weeklyDistribution, quickStats = analyticsData.quickStats, recentActivity = analyticsData.recentActivity;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].analyticsContainer },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].analyticsHeader },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].analyticsHeaderLeft },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].analyticsTitle }, isTeamView ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.TeamAnalyticsTitle : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.AnalyticsTitle),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].analyticsSubtitle }, isTeamView ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.TeamAnalyticsSubtitle : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.AnalyticsSubtitle)),
            isManagerOrAdmin && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].viewToggle, role: "group", "aria-label": "Dashboard view" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.DefaultButton, { text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.MyAnalyticsToggle, iconProps: { iconName: 'Contact' }, onClick: function () { return setIsTeamView(false); }, "aria-pressed": !isTeamView, styles: toggleButtonStyles(!isTeamView) }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.DefaultButton, { text: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.TeamAnalyticsToggle, iconProps: { iconName: 'Group' }, onClick: function () { return setIsTeamView(true); }, "aria-pressed": isTeamView, styles: toggleButtonStyles(isTeamView) })))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].statsGrid },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(StatsCard, { title: isTeamView ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.TotalTeamHoursCard : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.TotalHoursCard, value: quickStats.totalHours, subtitle: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ThisMonth, icon: react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" })), color: "blue", trend: quickStats.hoursChange ? {
                    value: quickStats.hoursChange,
                    direction: quickStats.hoursChange > 0 ? 'up' : 'down'
                } : undefined }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(StatsCard, { title: isTeamView ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ActiveEmployeesCard : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.AvgDaily, value: isTeamView ? quickStats.avgDaily : "".concat(quickStats.avgDaily.toFixed(1), "h"), subtitle: isTeamView ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ThisMonth : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Last7Days, icon: isTeamView ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" }))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" }))), color: "green" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(StatsCard, { title: isTeamView ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.PendingApprovalsCard : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.SubmittedCard, value: quickStats.submittedEntries, subtitle: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ThisWeek, icon: isTeamView ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" }))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" }))), color: "purple" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(StatsCard, { title: isTeamView ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ApprovedThisMonthCard : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ApprovedCard, value: quickStats.approvedEntries, subtitle: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.ThisMonth, icon: react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" })), color: "orange" })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].chartsGrid },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(Chart, { data: last7Days, type: "line", title: isTeamView ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.TeamLast7DaysChart : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.Last7DaysChart, className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].chartFullWidth }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].chartsRow },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(Chart, { data: weeklyDistribution, type: "bar", title: isTeamView ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.TeamWeekDistribution : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.WeekDistribution, className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].chartMedium }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(Chart, { data: monthlyHours, type: "doughnut", title: isTeamView ? TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.HoursByEmployee : TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_4__.MonthlyByProject, className: _DashboardAnalytics_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].chartMedium }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(RecentActivity, { activities: recentActivity })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardAnalytics);


/***/ }),

/***/ 65565:
/*!**********************************************************!*\
  !*** ./lib/webparts/timeSheet/components/SimpleChart.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 85959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ 55277);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ 86766);



chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Title, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_1__.Filler);
// Palette shared across charts
var PALETTE = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];
var SimpleChart = function (_a) {
    var _b, _c;
    var data = _a.data, type = _a.type, className = _a.className, _d = _a.height, height = _d === void 0 ? 200 : _d;
    var labels = data.labels || [];
    var rawValues = ((_c = (_b = data.datasets) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.data) || [];
    if (!rawValues.length) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: className, style: { display: 'flex', alignItems: 'center', justifyContent: 'center', height: height } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { color: '#94a3b8', fontSize: 13 } }, "No data available")));
    }
    var containerStyle = {
        position: 'relative',
        height: height,
        width: '100%',
    };
    if (type === 'line') {
        var chartData_1 = {
            labels: labels,
            datasets: [{
                    label: data.datasets[0].label || 'Hours',
                    data: rawValues,
                    borderColor: '#6366f1',
                    borderWidth: 3,
                    pointBackgroundColor: '#6366f1',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    tension: 0.4,
                    fill: true,
                    backgroundColor: function (context) {
                        var chart = context.chart;
                        var ctx = chart.ctx, chartArea = chart.chartArea;
                        if (!chartArea)
                            return 'rgba(99,102,241,0.08)';
                        var gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                        gradient.addColorStop(0, 'rgba(99,102,241,0.22)');
                        gradient.addColorStop(1, 'rgba(99,102,241,0.01)');
                        return gradient;
                    },
                }],
        };
        var options_1 = {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 900, easing: 'easeInOutQuart' },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#1e293b',
                    titleColor: '#f1f5f9',
                    bodyColor: '#94a3b8',
                    borderColor: 'rgba(99,102,241,0.3)',
                    borderWidth: 1,
                    padding: 10,
                    callbacks: {
                        label: function (ctx) { return " ".concat(ctx.parsed.y, "h"); },
                    },
                },
            },
            scales: {
                x: {
                    grid: { color: 'rgba(203,213,225,0.3)', drawTicks: false },
                    border: { display: false },
                    ticks: { color: '#94a3b8', font: { size: 11 } },
                },
                y: {
                    grid: { color: 'rgba(203,213,225,0.3)', drawTicks: false },
                    border: { display: false },
                    ticks: {
                        color: '#94a3b8',
                        font: { size: 11 },
                        callback: function (val) { return "".concat(val, "h"); },
                    },
                    beginAtZero: true,
                },
            },
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: className, style: containerStyle },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Line, { data: chartData_1, options: options_1 })));
    }
    if (type === 'bar') {
        var barColors = rawValues.map(function (_, i) { return PALETTE[i % PALETTE.length]; });
        var chartData_2 = {
            labels: labels,
            datasets: [{
                    label: data.datasets[0].label || 'Hours',
                    data: rawValues,
                    backgroundColor: barColors.map(function (c) { return c + 'cc'; }),
                    borderColor: barColors,
                    borderWidth: 1.5,
                    borderRadius: 6,
                    borderSkipped: false,
                }],
        };
        var options_2 = {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 800, easing: 'easeOutBounce' },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#1e293b',
                    titleColor: '#f1f5f9',
                    bodyColor: '#94a3b8',
                    borderColor: 'rgba(203,213,225,0.2)',
                    borderWidth: 1,
                    padding: 10,
                    callbacks: {
                        label: function (ctx) { return " ".concat(ctx.parsed.y, "h"); },
                    },
                },
            },
            scales: {
                x: {
                    grid: { display: false },
                    border: { display: false },
                    ticks: { color: '#94a3b8', font: { size: 11 } },
                },
                y: {
                    grid: { color: 'rgba(203,213,225,0.3)', drawTicks: false },
                    border: { display: false },
                    ticks: {
                        color: '#94a3b8',
                        font: { size: 11 },
                        callback: function (val) { return "".concat(val, "h"); },
                    },
                    beginAtZero: true,
                },
            },
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: className, style: containerStyle },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Bar, { data: chartData_2, options: options_2 })));
    }
    // doughnut / pie
    var doughnutColors = rawValues.map(function (_, i) { return PALETTE[i % PALETTE.length]; });
    var chartData = {
        labels: labels,
        datasets: [{
                data: rawValues,
                backgroundColor: doughnutColors.map(function (c) { return c + 'd9'; }),
                borderColor: doughnutColors,
                borderWidth: 2,
                hoverOffset: 6,
            }],
    };
    var options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 900, easing: 'easeInOutQuart' },
        cutout: type === 'doughnut' ? '62%' : '0%',
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    color: '#475569',
                    font: { size: 11 },
                    padding: 12,
                    usePointStyle: true,
                    pointStyleWidth: 8,
                },
            },
            tooltip: {
                backgroundColor: '#1e293b',
                titleColor: '#f1f5f9',
                bodyColor: '#94a3b8',
                borderColor: 'rgba(203,213,225,0.2)',
                borderWidth: 1,
                padding: 10,
                callbacks: {
                    label: function (ctx) { return " ".concat(ctx.label, ": ").concat(ctx.parsed, "h"); },
                },
            },
        },
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: className, style: containerStyle },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Doughnut, { data: chartData, options: options })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleChart);


/***/ }),

/***/ 77164:
/*!*************************************************************!*\
  !*** ./lib/webparts/timeSheet/services/AnalyticsService.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAnalyticsData: () => (/* binding */ getAnalyticsData),
/* harmony export */   getCurrentMonth: () => (/* binding */ getCurrentMonth),
/* harmony export */   getCurrentWeek: () => (/* binding */ getCurrentWeek),
/* harmony export */   getLast7Days: () => (/* binding */ getLast7Days),
/* harmony export */   groupEntriesByDate: () => (/* binding */ groupEntriesByDate),
/* harmony export */   groupEntriesByProject: () => (/* binding */ groupEntriesByProject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 10196);
/* harmony import */ var _TimesheetService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimesheetService */ 30264);
/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dateUtils */ 28613);
/* harmony import */ var _pnp_sp_lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/sp/lists */ 52185);
/* harmony import */ var _pnp_sp_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/sp/items */ 95324);





// ─── Helper Functions ──────────────────────────────────────────────────────────────────────────
function getLast7Days() {
    var dates = [];
    var today = new Date();
    for (var i = 6; i >= 0; i--) {
        var date = new Date(today);
        date.setDate(date.getDate() - i);
        date.setHours(0, 0, 0, 0);
        dates.push(date);
    }
    return dates;
}
function getCurrentMonth() {
    var now = new Date();
    var start = new Date(now.getFullYear(), now.getMonth(), 1);
    var end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    end.setHours(23, 59, 59, 999);
    return { start: start, end: end };
}
function getCurrentWeek() {
    var start = (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_3__.getWeekStart)(new Date());
    var end = new Date(start);
    end.setDate(end.getDate() + 6);
    end.setHours(23, 59, 59, 999);
    return { start: start, end: end };
}
function getPreviousMonth() {
    var now = new Date();
    var start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    var end = new Date(now.getFullYear(), now.getMonth(), 0);
    end.setHours(23, 59, 59, 999);
    return { start: start, end: end };
}
function groupEntriesByDate(entries) {
    var grouped = new Map();
    entries.forEach(function (entry) {
        var dateKey = entry.entryDate.toISOString().split('T')[0];
        var currentHours = grouped.get(dateKey) || 0;
        grouped.set(dateKey, currentHours + entry.hoursSpent);
    });
    return grouped;
}
function groupEntriesByProject(entries) {
    var grouped = new Map();
    entries.forEach(function (entry) {
        var currentHours = grouped.get(entry.projectName) || 0;
        grouped.set(entry.projectName, currentHours + entry.hoursSpent);
    });
    return grouped;
}
function getWeekdayName(date) {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
}
// ─── Chart Data Generators ─────────────────────────────────────────────────────────────────────
function generateLast7DaysChart(entries) {
    var dates = getLast7Days();
    var grouped = groupEntriesByDate(entries);
    var labels = dates.map(function (date) { return getWeekdayName(date); });
    var data = dates.map(function (date) {
        var dateKey = date.toISOString().split('T')[0];
        return grouped.get(dateKey) || 0;
    });
    // If no real data, provide sample data for demo
    if (data.every(function (val) { return val === 0; })) {
        data = [6.5, 7.2, 8.0, 7.5, 6.8, 5.5, 4.0];
    }
    return {
        labels: labels,
        datasets: [{
                label: 'Hours',
                data: data,
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderColor: '#3b82f6',
                borderWidth: 3,
                fill: true
            }]
    };
}
function generateMonthlyHoursChart(entries) {
    var grouped = groupEntriesByProject(entries);
    var sortedProjects = Array.from(grouped.entries())
        .sort(function (_a, _b) {
        var a = _a[1];
        var b = _b[1];
        return b - a;
    })
        .slice(0, 6); // Top 6 projects
    // If no real data, provide sample data for demo
    if (sortedProjects.length === 0) {
        sortedProjects = [
            ['Project Alpha', 45],
            ['Project Beta', 32],
            ['Project Gamma', 28],
            ['Project Delta', 19],
            ['Maintenance', 12]
        ];
    }
    var labels = sortedProjects.map(function (_a) {
        var project = _a[0];
        return project;
    });
    var data = sortedProjects.map(function (_a) {
        var hours = _a[1];
        return hours;
    });
    var colors = [
        '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'
    ];
    return {
        labels: labels,
        datasets: [{
                label: 'Hours',
                data: data,
                backgroundColor: colors.slice(0, data.length),
                borderWidth: 0
            }]
    };
}
function generateWeeklyDistributionChart(entries) {
    var start = getCurrentWeek().start;
    var dates = [];
    // Generate all 7 days of current week
    for (var i = 0; i < 7; i++) {
        var date = new Date(start);
        date.setDate(date.getDate() + i);
        dates.push(date);
    }
    var grouped = groupEntriesByDate(entries);
    var labels = dates.map(function (date) { return getWeekdayName(date); });
    var data = dates.map(function (date) {
        var dateKey = date.toISOString().split('T')[0];
        return grouped.get(dateKey) || 0;
    });
    // If no real data, provide sample data for demo
    if (data.every(function (val) { return val === 0; })) {
        data = [8, 7.5, 8, 7, 6, 0, 0]; // Typical work week
    }
    return {
        labels: labels,
        datasets: [{
                label: 'Hours',
                data: data,
                backgroundColor: '#3b82f6',
                borderColor: '#1e40af',
                borderWidth: 1
            }]
    };
}
// ─── Quick Stats Calculator ────────────────────────────────────────────────────────────────────
function calculateQuickStats(currentEntries, previousEntries, weekEntries) {
    var totalHours = currentEntries.reduce(function (sum, entry) { return sum + entry.hoursSpent; }, 0);
    var previousTotal = previousEntries.reduce(function (sum, entry) { return sum + entry.hoursSpent; }, 0);
    var last7Days = getLast7Days();
    var recentEntries = currentEntries.filter(function (entry) {
        return last7Days.some(function (date) {
            return date.toDateString() === entry.entryDate.toDateString();
        });
    });
    var avgDaily = recentEntries.length > 0
        ? recentEntries.reduce(function (sum, entry) { return sum + entry.hoursSpent; }, 0) / 7
        : 0;
    var submittedEntries = weekEntries.filter(function (entry) {
        return entry.status === 'Submitted';
    }).length;
    var approvedEntries = currentEntries.filter(function (entry) {
        return entry.status === 'Approved';
    }).length;
    // If no real data, provide sample data for demo
    if (totalHours === 0) {
        totalHours = 156.5;
        previousTotal = 142.0;
        avgDaily = 7.2;
        submittedEntries = 3;
        approvedEntries = 12;
    }
    var hoursChange = previousTotal > 0
        ? Math.round(((totalHours - previousTotal) / previousTotal) * 100)
        : undefined;
    return {
        totalHours: Math.round(totalHours * 100) / 100,
        avgDaily: Math.round(avgDaily * 100) / 100,
        submittedEntries: submittedEntries,
        approvedEntries: approvedEntries,
        hoursChange: hoursChange
    };
}
// ─── Recent Activity Generator ─────────────────────────────────────────────────────────────────
function generateRecentActivity(entries) {
    var recentEntries = entries
        .filter(function (entry) { return entry.submittedOn || entry.reviewedOn; })
        .sort(function (a, b) {
        var aTime = a.reviewedOn || a.submittedOn || new Date(0);
        var bTime = b.reviewedOn || b.submittedOn || new Date(0);
        return bTime.getTime() - aTime.getTime();
    })
        .slice(0, 10);
    return recentEntries.map(function (entry) {
        var _a;
        var timestamp = entry.reviewedOn || entry.submittedOn || new Date();
        var type;
        var description;
        if (entry.status === 'Submitted' && entry.submittedOn) {
            type = 'submitted';
            description = "Submitted timesheet for ".concat((0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_3__.formatDateShort)(entry.entryDate), " - ").concat(entry.projectName);
        }
        else if (entry.status === 'Approved') {
            type = 'approved';
            description = "Timesheet approved for ".concat((0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_3__.formatDateShort)(entry.entryDate), " - ").concat(entry.projectName);
        }
        else if (entry.status === 'Rejected') {
            type = 'rejected';
            description = "Timesheet rejected for ".concat((0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_3__.formatDateShort)(entry.entryDate), " - ").concat(entry.projectName);
        }
        else {
            type = 'submitted';
            description = "Updated timesheet for ".concat((0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_3__.formatDateShort)(entry.entryDate), " - ").concat(entry.projectName);
        }
        return {
            id: ((_a = entry.id) === null || _a === void 0 ? void 0 : _a.toString()) || "".concat(entry.entryDate.getTime(), "-").concat(entry.projectId),
            type: type,
            description: description,
            timestamp: timestamp
        };
    });
}
// ─── Main Analytics Data Function ──────────────────────────────────────────────────────────────
function getAnalyticsData(employeeEmail) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
        var _a, currentMonthStart, currentMonthEnd, _b, previousMonthStart, previousMonthEnd, _c, currentWeekStart, currentWeekEnd, last7DaysStart, _d, currentMonthEntries, previousMonthEntries, currentWeekEntries, last7DaysEntries, last7Days, monthlyHours, weeklyDistribution, quickStats, recentActivity, error_1;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 2, , 3]);
                    _a = getCurrentMonth(), currentMonthStart = _a.start, currentMonthEnd = _a.end;
                    _b = getPreviousMonth(), previousMonthStart = _b.start, previousMonthEnd = _b.end;
                    _c = getCurrentWeek(), currentWeekStart = _c.start, currentWeekEnd = _c.end;
                    last7DaysStart = getLast7Days()[0];
                    return [4 /*yield*/, Promise.all([
                            (0,_TimesheetService__WEBPACK_IMPORTED_MODULE_0__.getEntriesForDateRange)(currentMonthStart, currentMonthEnd, employeeEmail),
                            (0,_TimesheetService__WEBPACK_IMPORTED_MODULE_0__.getEntriesForDateRange)(previousMonthStart, previousMonthEnd, employeeEmail),
                            (0,_TimesheetService__WEBPACK_IMPORTED_MODULE_0__.getEntriesForDateRange)(currentWeekStart, currentWeekEnd, employeeEmail),
                            (0,_TimesheetService__WEBPACK_IMPORTED_MODULE_0__.getEntriesForDateRange)(last7DaysStart, new Date(), employeeEmail)
                        ])];
                case 1:
                    _d = _e.sent(), currentMonthEntries = _d[0], previousMonthEntries = _d[1], currentWeekEntries = _d[2], last7DaysEntries = _d[3];
                    last7Days = generateLast7DaysChart(last7DaysEntries);
                    monthlyHours = generateMonthlyHoursChart(currentMonthEntries);
                    weeklyDistribution = generateWeeklyDistributionChart(currentWeekEntries);
                    quickStats = calculateQuickStats(currentMonthEntries, previousMonthEntries, currentWeekEntries);
                    recentActivity = generateRecentActivity(currentMonthEntries);
                    return [2 /*return*/, {
                            last7Days: last7Days,
                            monthlyHours: monthlyHours,
                            weeklyDistribution: weeklyDistribution,
                            quickStats: quickStats,
                            recentActivity: recentActivity
                        }];
                case 2:
                    error_1 = _e.sent();
                    console.error('Error fetching analytics data:', error_1);
                    throw new Error('Failed to load analytics data');
                case 3: return [2 /*return*/];
            }
        });
    });
}
// ─── Export Utility Functions ──────────────────────────────────────────────────────────────────



/***/ }),

/***/ 4033:
/*!*****************************************************************!*\
  !*** ./lib/webparts/timeSheet/services/TeamAnalyticsService.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTeamAnalyticsData: () => (/* binding */ getTeamAnalyticsData)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 10196);
/* harmony import */ var _TimesheetService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimesheetService */ 30264);
/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dateUtils */ 28613);
/* harmony import */ var _AnalyticsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnalyticsService */ 77164);




// ─── Date helpers (private) ────────────────────────────────────────────────────
function getPreviousMonth() {
    var now = new Date();
    var start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    var end = new Date(now.getFullYear(), now.getMonth(), 0);
    end.setHours(23, 59, 59, 999);
    return { start: start, end: end };
}
function getWeekdayName(date) {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
}
function groupEntriesByEmployee(entries) {
    var grouped = new Map();
    entries.forEach(function (entry) {
        var name = entry.employeeName || entry.employeeEmail;
        grouped.set(name, (grouped.get(name) || 0) + entry.hoursSpent);
    });
    return grouped;
}
// ─── Main function ─────────────────────────────────────────────────────────────
function getTeamAnalyticsData() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
        var _a, currentMonthStart, currentMonthEnd, _b, previousMonthStart, previousMonthEnd, _c, currentWeekStart, currentWeekEnd, last7DaysStart, _d, currentMonthEntries, previousMonthEntries, currentWeekEntries, last7DaysEntries, totalHours, previousTotal, activeEmployees, pendingApprovals, approvedThisMonth, hoursChange, dates, grouped7Days, last7Data, last7DaysChart, byEmployee, topEmployees, monthlyHoursChart, weekStart, weekDates, i, d, groupedWeek, weekData, weeklyDistributionChart, recentActivity;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _a = (0,_AnalyticsService__WEBPACK_IMPORTED_MODULE_1__.getCurrentMonth)(), currentMonthStart = _a.start, currentMonthEnd = _a.end;
                    _b = getPreviousMonth(), previousMonthStart = _b.start, previousMonthEnd = _b.end;
                    _c = (0,_AnalyticsService__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeek)(), currentWeekStart = _c.start, currentWeekEnd = _c.end;
                    last7DaysStart = (0,_AnalyticsService__WEBPACK_IMPORTED_MODULE_1__.getLast7Days)()[0];
                    return [4 /*yield*/, Promise.all([
                            (0,_TimesheetService__WEBPACK_IMPORTED_MODULE_0__.getTeamEntries)(currentMonthStart, currentMonthEnd),
                            (0,_TimesheetService__WEBPACK_IMPORTED_MODULE_0__.getTeamEntries)(previousMonthStart, previousMonthEnd),
                            (0,_TimesheetService__WEBPACK_IMPORTED_MODULE_0__.getTeamEntries)(currentWeekStart, currentWeekEnd),
                            (0,_TimesheetService__WEBPACK_IMPORTED_MODULE_0__.getTeamEntries)(last7DaysStart, new Date()),
                        ])];
                case 1:
                    _d = _e.sent(), currentMonthEntries = _d[0], previousMonthEntries = _d[1], currentWeekEntries = _d[2], last7DaysEntries = _d[3];
                    totalHours = currentMonthEntries.reduce(function (s, e) { return s + e.hoursSpent; }, 0);
                    previousTotal = previousMonthEntries.reduce(function (s, e) { return s + e.hoursSpent; }, 0);
                    activeEmployees = new Set(currentMonthEntries.map(function (e) { return e.employeeEmail; })).size;
                    pendingApprovals = currentWeekEntries.filter(function (e) { return e.status === 'Submitted'; }).length;
                    approvedThisMonth = currentMonthEntries.filter(function (e) { return e.status === 'Approved'; }).length;
                    // Fallback sample data when no real entries exist
                    if (totalHours === 0) {
                        totalHours = 624;
                        activeEmployees = 8;
                        pendingApprovals = 5;
                        approvedThisMonth = 32;
                    }
                    hoursChange = previousTotal > 0
                        ? Math.round(((totalHours - previousTotal) / previousTotal) * 100)
                        : undefined;
                    dates = (0,_AnalyticsService__WEBPACK_IMPORTED_MODULE_1__.getLast7Days)();
                    grouped7Days = (0,_AnalyticsService__WEBPACK_IMPORTED_MODULE_1__.groupEntriesByDate)(last7DaysEntries);
                    last7Data = dates.map(function (d) { return grouped7Days.get(d.toISOString().split('T')[0]) || 0; });
                    if (last7Data.every(function (v) { return v === 0; })) {
                        last7Data = [42, 38, 45, 40, 35, 12, 8];
                    }
                    last7DaysChart = {
                        labels: dates.map(getWeekdayName),
                        datasets: [{
                                label: 'Team Hours',
                                data: last7Data,
                                backgroundColor: 'rgba(16, 185, 129, 0.12)',
                                borderColor: '#10b981',
                                borderWidth: 3,
                                fill: true,
                            }],
                    };
                    byEmployee = groupEntriesByEmployee(currentMonthEntries);
                    topEmployees = Array.from(byEmployee.entries())
                        .sort(function (_a, _b) {
                        var a = _a[1];
                        var b = _b[1];
                        return b - a;
                    })
                        .slice(0, 6);
                    if (topEmployees.length === 0) {
                        topEmployees = [
                            ['Alice Martin', 120],
                            ['Bob Chen', 98],
                            ['Carol Davis', 85],
                            ['Dave Kumar', 72],
                            ['Eve Johnson', 65],
                        ];
                    }
                    monthlyHoursChart = {
                        labels: topEmployees.map(function (_a) {
                            var name = _a[0];
                            return name;
                        }),
                        datasets: [{
                                label: 'Hours',
                                data: topEmployees.map(function (_a) {
                                    var h = _a[1];
                                    return h;
                                }),
                                backgroundColor: ['#667eea', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
                                borderWidth: 0,
                            }],
                    };
                    weekStart = (0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_3__.getWeekStart)(new Date());
                    weekDates = [];
                    for (i = 0; i < 7; i++) {
                        d = new Date(weekStart);
                        d.setDate(d.getDate() + i);
                        weekDates.push(d);
                    }
                    groupedWeek = (0,_AnalyticsService__WEBPACK_IMPORTED_MODULE_1__.groupEntriesByDate)(currentWeekEntries);
                    weekData = weekDates.map(function (d) { return groupedWeek.get(d.toISOString().split('T')[0]) || 0; });
                    if (weekData.every(function (v) { return v === 0; })) {
                        weekData = [56, 48, 62, 55, 44, 0, 0];
                    }
                    weeklyDistributionChart = {
                        labels: weekDates.map(getWeekdayName),
                        datasets: [{
                                label: 'Team Hours',
                                data: weekData,
                                backgroundColor: '#10b981',
                                borderColor: '#059669',
                                borderWidth: 1,
                            }],
                    };
                    recentActivity = currentMonthEntries
                        .filter(function (e) { return e.submittedOn || e.reviewedOn; })
                        .sort(function (a, b) {
                        var aTime = (a.reviewedOn || a.submittedOn || new Date(0)).getTime();
                        var bTime = (b.reviewedOn || b.submittedOn || new Date(0)).getTime();
                        return bTime - aTime;
                    })
                        .slice(0, 10)
                        .map(function (entry) {
                        var _a;
                        var timestamp = entry.reviewedOn || entry.submittedOn || new Date();
                        var type = 'submitted';
                        var description = '';
                        if (entry.status === 'Approved') {
                            type = 'approved';
                            description = "".concat(entry.employeeName, ": Approved for ").concat((0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_3__.formatDateShort)(entry.entryDate), " \u2014 ").concat(entry.projectName);
                        }
                        else if (entry.status === 'Rejected') {
                            type = 'rejected';
                            description = "".concat(entry.employeeName, ": Rejected for ").concat((0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_3__.formatDateShort)(entry.entryDate));
                        }
                        else {
                            description = "".concat(entry.employeeName, ": Submitted for ").concat((0,_utils_dateUtils__WEBPACK_IMPORTED_MODULE_3__.formatDateShort)(entry.entryDate), " \u2014 ").concat(entry.projectName);
                        }
                        return {
                            id: ((_a = entry.id) === null || _a === void 0 ? void 0 : _a.toString()) || "".concat(entry.entryDate.getTime(), "-").concat(entry.employeeEmail),
                            type: type,
                            description: description,
                            timestamp: timestamp,
                        };
                    });
                    return [2 /*return*/, {
                            last7Days: last7DaysChart,
                            monthlyHours: monthlyHoursChart,
                            weeklyDistribution: weeklyDistributionChart,
                            quickStats: {
                                totalHours: Math.round(totalHours * 100) / 100,
                                avgDaily: activeEmployees, // repurposed: active employee count
                                submittedEntries: pendingApprovals,
                                approvedEntries: approvedThisMonth,
                                hoursChange: hoursChange,
                            },
                            recentActivity: recentActivity,
                        }];
            }
        });
    });
}


/***/ }),

/***/ 50831:
/*!**************************************************!*\
  !*** ./lib/webparts/timeSheet/views/HomePage.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 85959);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react */ 11880);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react */ 57637);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react */ 52394);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AppContext */ 24770);
/* harmony import */ var _components_DashboardAnalytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DashboardAnalytics */ 46695);
/* harmony import */ var TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! TimeSheetWebPartStrings */ 31339);
/* harmony import */ var TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HomePage.module.scss */ 36033);







function getNavCards() {
    return [
        {
            view: "CalendarView",
            iconName: "Calendar",
            value: "Calendar",
            label: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.NavMyTimesheet,
            subtitle: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.NavMyTimesheetSub,
            color: "#667eea",
            roles: ["Employee", "Manager", "Admin"],
        },
        {
            view: "MyHistory",
            iconName: "History",
            value: "History",
            label: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.NavMySubmissions,
            subtitle: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.NavMySubmissionsSub,
            color: "#107c41",
            roles: ["Employee", "Manager", "Admin"],
        },
        {
            view: "ManagerDashboard",
            iconName: "People",
            value: "Team",
            label: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.NavTeamTimesheets,
            subtitle: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.NavTeamTimesheetsSub,
            color: "#e8a600",
            roles: ["Manager", "Admin"],
        },
        {
            view: "ExportPanel",
            iconName: "ExcelDocument",
            value: "Export",
            label: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.NavExportReport,
            subtitle: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.NavExportReportSub,
            color: "#107c41",
            roles: ["Manager", "Admin"],
        },
        {
            view: "AdminPanel",
            iconName: "Settings",
            value: "Admin",
            label: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.NavManageProjects,
            subtitle: TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.NavManageProjectsSub,
            color: "#c4314b",
            roles: ["Manager", "Admin"],
        },
    ];
}
var HomePage = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__.AppContext), currentUser = _a.currentUser, navigateTo = _a.navigateTo;
    var NAV_CARDS = getNavCards();
    var visibleCards = NAV_CARDS.filter(function (c) { return c.roles.indexOf(currentUser.role) !== -1; });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["webpart-container"] },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["dashboard-root"] },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["dashboard-header"] },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["header-content"] },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["dashboard-page-title"] }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.DashboardTitle),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["dashboard-section-title"] }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.WelcomeMessage.replace("{name}", currentUser.displayName).replace("{role}", currentUser.role)))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["quick-access-section"] },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["section-header"] },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["section-title"] }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.QuickAccess),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["section-subtitle"] }, TimeSheetWebPartStrings__WEBPACK_IMPORTED_MODULE_3__.QuickAccessSubtitle)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["navigation-grid"] }, visibleCards.map(function (card, index) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.TooltipHost, { key: card.view, content: card.subtitle, delay: _fluentui_react__WEBPACK_IMPORTED_MODULE_6__.TooltipDelay.medium, styles: { root: { flex: "1 1 0", minWidth: 0 } } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "".concat(_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["nav-card"]).concat(index === 0 ? " ".concat(_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["nav-card-primary"]) : ""), onClick: function () { return navigateTo(card.view); }, role: "button", tabIndex: 0, "aria-label": "".concat(card.label, " - ").concat(card.subtitle), onKeyDown: function (e) {
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                navigateTo(card.view);
                            }
                        }, style: { "--accent-color": card.color } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["nav-card-icon-wrap"] },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.Icon, { iconName: card.iconName, styles: { root: { fontSize: 20, color: card.color } } })),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["nav-card-info"] },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", { className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["nav-card-title"] }, card.label),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["nav-card-description"] }, card.subtitle)),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["nav-card-footer"] },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["nav-card-tag"] }, card.value),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.Icon, { iconName: "ChevronRight", className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]["action-icon"] }))))); }))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DashboardAnalytics__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);


/***/ })

}]);
//# sourceMappingURL=chunk.lib_webparts_timeSheet_views_HomePage_js.js.map