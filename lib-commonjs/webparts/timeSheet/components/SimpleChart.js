"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var chart_js_1 = require("chart.js");
var react_chartjs_2_1 = require("react-chartjs-2");
chart_js_1.Chart.register(chart_js_1.CategoryScale, chart_js_1.LinearScale, chart_js_1.PointElement, chart_js_1.LineElement, chart_js_1.BarElement, chart_js_1.ArcElement, chart_js_1.Title, chart_js_1.Tooltip, chart_js_1.Legend, chart_js_1.Filler);
// Palette shared across charts
var PALETTE = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];
var SimpleChart = function (_a) {
    var _b, _c;
    var data = _a.data, type = _a.type, className = _a.className, _d = _a.height, height = _d === void 0 ? 200 : _d;
    var labels = data.labels || [];
    var rawValues = ((_c = (_b = data.datasets) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.data) || [];
    if (!rawValues.length) {
        return (React.createElement("div", { className: className, style: { display: 'flex', alignItems: 'center', justifyContent: 'center', height: height } },
            React.createElement("span", { style: { color: '#94a3b8', fontSize: 13 } }, "No data available")));
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
        return (React.createElement("div", { className: className, style: containerStyle },
            React.createElement(react_chartjs_2_1.Line, { data: chartData_1, options: options_1 })));
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
        return (React.createElement("div", { className: className, style: containerStyle },
            React.createElement(react_chartjs_2_1.Bar, { data: chartData_2, options: options_2 })));
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
    return (React.createElement("div", { className: className, style: containerStyle },
        React.createElement(react_chartjs_2_1.Doughnut, { data: chartData, options: options })));
};
exports.default = SimpleChart;
//# sourceMappingURL=SimpleChart.js.map