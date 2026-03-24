"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNavStateFromHash = getNavStateFromHash;
exports.pushNavState = pushNavState;
exports.replaceNavState = replaceNavState;
var VALID_VIEWS = [
    'Home',
    'DailyForm',
    'MyHistory',
    'ManagerDashboard',
    'AdminPanel',
    'ExportPanel',
];
/**
 * Parses the current URL hash into an IAppNavigationState.
 * Hash format: #view=DailyForm&date=2026-03-23&employee=user@contoso.com
 */
function getNavStateFromHash() {
    try {
        var raw = window.location.hash.replace(/^#/, '');
        if (!raw)
            return { currentView: 'Home' };
        var params = new URLSearchParams(raw);
        var view = params.get('view');
        if (!view || !VALID_VIEWS.includes(view)) {
            return { currentView: 'Home' };
        }
        var navState = { currentView: view };
        var dateStr = params.get('date');
        if (dateStr) {
            var d = new Date(dateStr);
            if (!isNaN(d.getTime())) {
                navState.selectedDate = d;
            }
        }
        var employee = params.get('employee');
        if (employee) {
            navState.selectedEmployeeEmail = decodeURIComponent(employee);
        }
        return navState;
    }
    catch (_a) {
        return { currentView: 'Home' };
    }
}
/**
 * Pushes a new history entry with the encoded nav state as the URL hash.
 * Use for user-initiated navigation so the browser Back button works.
 */
function pushNavState(navState) {
    var hash = buildHash(navState);
    if (window.location.hash !== hash) {
        history.pushState(null, '', hash);
    }
}
/**
 * Replaces the current history entry with the encoded nav state.
 * Use on initial load to normalise the hash without creating a history entry.
 */
function replaceNavState(navState) {
    history.replaceState(null, '', buildHash(navState));
}
// ── helpers ──────────────────────────────────────────────────────────────────
function buildHash(navState) {
    var params = new URLSearchParams();
    params.set('view', navState.currentView);
    if (navState.selectedDate) {
        params.set('date', formatDate(navState.selectedDate));
    }
    if (navState.selectedEmployeeEmail) {
        params.set('employee', navState.selectedEmployeeEmail);
    }
    return '#' + params.toString();
}
function formatDate(d) {
    var yyyy = d.getFullYear();
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    var dd = String(d.getDate()).padStart(2, '0');
    return "".concat(yyyy, "-").concat(mm, "-").concat(dd);
}
//# sourceMappingURL=routeUtils.js.map