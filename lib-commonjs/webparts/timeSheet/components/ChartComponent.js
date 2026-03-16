"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var ChartComponent = function (_a) {
    var data = _a.data, type = _a.type, title = _a.title, className = _a.className, _b = _a.height, height = _b === void 0 ? 200 : _b, _c = _a.width, width = _c === void 0 ? 400 : _c;
    var canvasRef = (0, react_1.useRef)(null);
    var chartInstanceRef = (0, react_1.useRef)(null);
    var _d = React.useState(false), chartJsLoaded = _d[0], setChartJsLoaded = _d[1];
    var _e = React.useState(false), chartJsError = _e[0], setChartJsError = _e[1];
    // Load Chart.js from CDN
    (0, react_1.useEffect)(function () {
        var loadChartJS = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var script, existingScript;
            return tslib_1.__generator(this, function (_a) {
                if (window.Chart) {
                    setChartJsLoaded(true);
                    return [2 /*return*/]; // Already loaded
                }
                try {
                    script = document.createElement('script');
                    script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js';
                    script.async = true;
                    script.onload = function () {
                        console.log('Chart.js loaded successfully');
                        setChartJsLoaded(true);
                        setChartJsError(false);
                    };
                    script.onerror = function () {
                        console.error('Failed to load Chart.js');
                        setChartJsError(true);
                    };
                    existingScript = document.querySelector('script[src*="chart"]');
                    if (!existingScript) {
                        document.head.appendChild(script);
                    }
                    else {
                        // Script exists, check if Chart is available
                        setTimeout(function () {
                            if (window.Chart) {
                                setChartJsLoaded(true);
                            }
                            else {
                                setChartJsError(true);
                            }
                        }, 1000);
                    }
                }
                catch (error) {
                    console.error('Error loading Chart.js:', error);
                    setChartJsError(true);
                }
                return [2 /*return*/];
            });
        }); };
        loadChartJS();
    }, []);
    // Create chart when Chart.js is available
    (0, react_1.useEffect)(function () {
        if (!canvasRef.current || !chartJsLoaded || !window.Chart || !data) {
            // If Chart.js is not loaded, show fallback
            if (canvasRef.current && !chartJsLoaded && data) {
                var ctx_1 = canvasRef.current.getContext('2d');
                if (ctx_1) {
                    drawFallbackChart(ctx_1, data, type, width, height);
                }
            }
            return;
        }
        // Destroy existing chart instance
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }
        var ctx = canvasRef.current.getContext('2d');
        if (!ctx)
            return;
        try {
            // Chart configuration
            var config = getChartConfig(data, type);
            // Create new chart instance
            chartInstanceRef.current = new window.Chart(ctx, config);
        }
        catch (error) {
            console.error('Error creating chart:', error);
            // Fallback: Draw a simple chart manually
            drawFallbackChart(ctx, data, type, width, height);
        }
        return function () {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [data, type, width, height, chartJsLoaded]);
    return (React.createElement("div", { className: className },
        chartJsError && (React.createElement("div", { style: {
                padding: '20px',
                textAlign: 'center',
                color: '#6b7280',
                fontSize: '14px'
            } }, "Chart loading failed. Showing fallback visualization.")),
        React.createElement("canvas", { ref: canvasRef, width: width, height: height, style: {
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px'
            } })));
};
// Chart.js configuration generator
function getChartConfig(data, type) {
    var commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: type === 'pie' || type === 'doughnut',
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: {
                        family: "'Segoe UI', 'Inter', sans-serif",
                        size: 12
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: 'white',
                bodyColor: 'white',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                borderWidth: 1,
                cornerRadius: 8,
                displayColors: true
            }
        },
        scales: type === 'line' || type === 'bar' ? {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        family: "'Segoe UI', 'Inter', sans-serif",
                        size: 11
                    },
                    color: '#6b7280'
                }
            },
            y: {
                grid: {
                    color: 'rgba(107, 114, 128, 0.1)',
                    borderDash: [5, 5]
                },
                ticks: {
                    font: {
                        family: "'Segoe UI', 'Inter', sans-serif",
                        size: 11
                    },
                    color: '#6b7280'
                }
            }
        } : undefined
    };
    var chartData = tslib_1.__assign({}, data);
    // Configure datasets based on chart type
    if (chartData.datasets) {
        chartData.datasets = chartData.datasets.map(function (dataset, index) {
            var baseDataset = tslib_1.__assign({}, dataset);
            if (type === 'line') {
                return tslib_1.__assign(tslib_1.__assign({}, baseDataset), { backgroundColor: dataset.backgroundColor || 'rgba(59, 130, 246, 0.1)', borderColor: dataset.borderColor || '#3b82f6', borderWidth: 3, fill: true, tension: 0.4, pointBackgroundColor: '#3b82f6', pointBorderColor: '#ffffff', pointBorderWidth: 2, pointRadius: 5, pointHoverRadius: 7 });
            }
            if (type === 'bar') {
                return tslib_1.__assign(tslib_1.__assign({}, baseDataset), { backgroundColor: dataset.backgroundColor || '#3b82f6', borderColor: 'transparent', borderRadius: 6, borderSkipped: false });
            }
            if (type === 'pie' || type === 'doughnut') {
                var colors = [
                    '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6',
                    '#06b6d4', '#84cc16', '#f97316', '#ec4899', '#14b8a6'
                ];
                return tslib_1.__assign(tslib_1.__assign({}, baseDataset), { backgroundColor: colors.slice(0, dataset.data.length), borderWidth: 2, borderColor: '#ffffff' });
            }
            return baseDataset;
        });
    }
    return {
        type: type,
        data: chartData,
        options: tslib_1.__assign(tslib_1.__assign({}, commonOptions), (type === 'doughnut' && {
            cutout: '60%'
        }))
    };
}
// Fallback chart drawing for when Chart.js fails to load
function drawFallbackChart(ctx, data, type, width, height) {
    ctx.clearRect(0, 0, width, height);
    // Set background
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, width, height);
    // Set font
    ctx.font = '12px Inter, sans-serif';
    ctx.fillStyle = '#6b7280';
    ctx.textAlign = 'center';
    if (!data.datasets || !data.datasets[0] || !data.datasets[0].data) {
        ctx.fillText('No data available', width / 2, height / 2);
        return;
    }
    var dataset = data.datasets[0];
    var values = dataset.data;
    if (values.length === 0) {
        ctx.fillText('No data to display', width / 2, height / 2);
        return;
    }
    if (type === 'line' && data.labels) {
        // Simple line chart
        var maxValue = Math.max.apply(Math, tslib_1.__spreadArray(tslib_1.__spreadArray([], values, false), [1], false));
        var minValue_1 = Math.min.apply(Math, tslib_1.__spreadArray(tslib_1.__spreadArray([], values, false), [0], false));
        var range_1 = maxValue - minValue_1 || 1;
        var padding_1 = 30;
        var chartWidth_1 = width - (padding_1 * 2);
        var chartHeight_1 = height - (padding_1 * 2);
        // Draw grid lines
        ctx.strokeStyle = '#e5e7eb';
        ctx.lineWidth = 1;
        for (var i = 0; i <= 4; i++) {
            var y = padding_1 + (i / 4) * chartHeight_1;
            ctx.beginPath();
            ctx.moveTo(padding_1, y);
            ctx.lineTo(width - padding_1, y);
            ctx.stroke();
        }
        // Draw line
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 3;
        ctx.beginPath();
        values.forEach(function (value, index) {
            var x = padding_1 + (index / Math.max(values.length - 1, 1)) * chartWidth_1;
            var y = padding_1 + (1 - (value - minValue_1) / range_1) * chartHeight_1;
            if (index === 0) {
                ctx.moveTo(x, y);
            }
            else {
                ctx.lineTo(x, y);
            }
        });
        ctx.stroke();
        // Draw points
        ctx.fillStyle = '#3b82f6';
        values.forEach(function (value, index) {
            var x = padding_1 + (index / Math.max(values.length - 1, 1)) * chartWidth_1;
            var y = padding_1 + (1 - (value - minValue_1) / range_1) * chartHeight_1;
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fill();
        });
    }
    else if (type === 'bar' && data.labels) {
        // Simple bar chart
        var maxValue_1 = Math.max.apply(Math, tslib_1.__spreadArray(tslib_1.__spreadArray([], values, false), [1], false));
        var padding_2 = 30;
        var barWidth_1 = (width - padding_2 * 2) / values.length - 8;
        ctx.fillStyle = '#3b82f6';
        values.forEach(function (value, index) {
            var barHeight = (value / maxValue_1) * (height - padding_2 * 2);
            var x = padding_2 + index * (barWidth_1 + 8);
            var y = height - padding_2 - barHeight;
            // Draw bar with rounded corners
            var radius = 4;
            ctx.beginPath();
            ctx.roundRect(x, y, barWidth_1, barHeight, radius);
            ctx.fill();
        });
    }
    else if (type === 'pie' || type === 'doughnut') {
        // Simple pie/doughnut chart
        var total_1 = values.reduce(function (sum, val) { return sum + val; }, 0);
        if (total_1 === 0) {
            ctx.fillText('No data to display', width / 2, height / 2);
            return;
        }
        var centerX_1 = width / 2;
        var centerY_1 = height / 2;
        var radius_1 = Math.min(width, height) / 3;
        var innerRadius_1 = type === 'doughnut' ? radius_1 * 0.6 : 0;
        var currentAngle_1 = -Math.PI / 2;
        var colors_1 = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];
        values.forEach(function (value, index) {
            var sliceAngle = (value / total_1) * 2 * Math.PI;
            ctx.fillStyle = colors_1[index % colors_1.length];
            ctx.beginPath();
            if (innerRadius_1 > 0) {
                // Doughnut chart
                ctx.arc(centerX_1, centerY_1, radius_1, currentAngle_1, currentAngle_1 + sliceAngle);
                ctx.arc(centerX_1, centerY_1, innerRadius_1, currentAngle_1 + sliceAngle, currentAngle_1, true);
            }
            else {
                // Pie chart
                ctx.moveTo(centerX_1, centerY_1);
                ctx.arc(centerX_1, centerY_1, radius_1, currentAngle_1, currentAngle_1 + sliceAngle);
            }
            ctx.closePath();
            ctx.fill();
            currentAngle_1 += sliceAngle;
        });
    }
}
exports.default = ChartComponent;
//# sourceMappingURL=ChartComponent.js.map