import { __spreadArray } from "tslib";
import * as React from 'react';
import { useEffect, useRef } from 'react';
var SimpleChart = function (_a) {
    var data = _a.data, type = _a.type, title = _a.title, className = _a.className, _b = _a.height, height = _b === void 0 ? 200 : _b, _c = _a.width, width = _c === void 0 ? 400 : _c;
    var canvasRef = useRef(null);
    useEffect(function () {
        if (!canvasRef.current || !data)
            return;
        var canvas = canvasRef.current;
        var ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        // Set canvas size
        canvas.width = width;
        canvas.height = height;
        drawChart(ctx, data, type, width, height);
    }, [data, type, width, height]);
    return (React.createElement("div", { className: className, style: { textAlign: 'center' } },
        React.createElement("canvas", { ref: canvasRef, style: {
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
                border: '1px solid rgba(203, 213, 225, 0.5)'
            } })));
};
function drawChart(ctx, data, type, width, height) {
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    // Set background
    var gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#f8fafc');
    gradient.addColorStop(1, '#e2e8f0');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    // Check for data
    if (!data.datasets || !data.datasets[0] || !data.datasets[0].data) {
        drawNoDataMessage(ctx, width, height);
        return;
    }
    var dataset = data.datasets[0];
    var values = dataset.data;
    if (values.length === 0) {
        drawNoDataMessage(ctx, width, height);
        return;
    }
    var padding = 30;
    var chartWidth = width - (padding * 2);
    var chartHeight = height - (padding * 2);
    switch (type) {
        case 'line':
            drawLineChart(ctx, values, data.labels || [], padding, chartWidth, chartHeight);
            break;
        case 'bar':
            drawBarChart(ctx, values, data.labels || [], padding, chartWidth, chartHeight);
            break;
        case 'pie':
            drawPieChart(ctx, values, data.labels || [], width / 2, height / 2, Math.min(width, height) / 3);
            break;
        case 'doughnut':
            drawDoughnutChart(ctx, values, data.labels || [], width / 2, height / 2, Math.min(width, height) / 3);
            break;
        default:
            drawNoDataMessage(ctx, width, height);
    }
}
function drawNoDataMessage(ctx, width, height) {
    ctx.font = '14px Inter, sans-serif';
    ctx.fillStyle = '#6b7280';
    ctx.textAlign = 'center';
    ctx.fillText('No data available', width / 2, height / 2);
}
function drawLineChart(ctx, values, labels, padding, chartWidth, chartHeight) {
    var maxValue = Math.max.apply(Math, __spreadArray(__spreadArray([], values, false), [1], false));
    var minValue = Math.min.apply(Math, __spreadArray(__spreadArray([], values, false), [0], false));
    var range = maxValue - minValue || 1;
    // Draw grid lines
    ctx.strokeStyle = 'rgba(203, 213, 225, 0.5)';
    ctx.lineWidth = 1;
    for (var i = 0; i <= 4; i++) {
        var y = padding + (i / 4) * chartHeight;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + chartWidth, y);
        ctx.stroke();
    }
    // Draw area fill
    var gradient = ctx.createLinearGradient(0, padding, 0, padding + chartHeight);
    gradient.addColorStop(0, 'rgba(59, 130, 246, 0.2)');
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0.02)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(padding, padding + chartHeight);
    values.forEach(function (value, index) {
        var x = padding + (index / Math.max(values.length - 1, 1)) * chartWidth;
        var y = padding + (1 - (value - minValue) / range) * chartHeight;
        if (index === 0) {
            ctx.lineTo(x, y);
        }
        else {
            ctx.lineTo(x, y);
        }
    });
    ctx.lineTo(padding + chartWidth, padding + chartHeight);
    ctx.closePath();
    ctx.fill();
    // Draw line
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    values.forEach(function (value, index) {
        var x = padding + (index / Math.max(values.length - 1, 1)) * chartWidth;
        var y = padding + (1 - (value - minValue) / range) * chartHeight;
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
        var x = padding + (index / Math.max(values.length - 1, 1)) * chartWidth;
        var y = padding + (1 - (value - minValue) / range) * chartHeight;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
        // White outline
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
    });
    // Draw labels
    if (labels.length > 0) {
        ctx.font = '11px Inter, sans-serif';
        ctx.fillStyle = '#6b7280';
        ctx.textAlign = 'center';
        values.forEach(function (_, index) {
            if (labels[index]) {
                var x = padding + (index / Math.max(values.length - 1, 1)) * chartWidth;
                ctx.fillText(labels[index], x, padding + chartHeight + 20);
            }
        });
    }
}
function drawBarChart(ctx, values, labels, padding, chartWidth, chartHeight) {
    var maxValue = Math.max.apply(Math, __spreadArray(__spreadArray([], values, false), [1], false));
    var barWidth = chartWidth / values.length - 8;
    var barSpacing = 8;
    values.forEach(function (value, index) {
        var barHeight = (value / maxValue) * chartHeight;
        var x = padding + index * (barWidth + barSpacing);
        var y = padding + chartHeight - barHeight;
        // Create gradient for bar
        var gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
        gradient.addColorStop(0, '#60a5fa');
        gradient.addColorStop(1, '#3b82f6');
        ctx.fillStyle = gradient;
        // Draw rounded rectangle
        var radius = 4;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barHeight, [radius, radius, 0, 0]);
        ctx.fill();
        // Add subtle shadow
        ctx.shadowColor = 'rgba(59, 130, 246, 0.3)';
        ctx.shadowBlur = 4;
        ctx.shadowOffsetY = 2;
        ctx.fill();
        ctx.shadowColor = 'transparent';
        // Draw value on top of bar
        if (value > 0) {
            ctx.font = '10px Inter, sans-serif';
            ctx.fillStyle = '#374151';
            ctx.textAlign = 'center';
            ctx.fillText(value.toString(), x + barWidth / 2, y - 6);
        }
        // Draw label below
        if (labels[index]) {
            ctx.font = '11px Inter, sans-serif';
            ctx.fillStyle = '#6b7280';
            ctx.textAlign = 'center';
            ctx.fillText(labels[index], x + barWidth / 2, padding + chartHeight + 20);
        }
    });
}
function drawPieChart(ctx, values, labels, centerX, centerY, radius) {
    var total = values.reduce(function (sum, val) { return sum + val; }, 0);
    if (total === 0)
        return;
    var colors = [
        '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6',
        '#06b6d4', '#84cc16', '#f97316', '#ec4899', '#14b8a6'
    ];
    var currentAngle = -Math.PI / 2;
    values.forEach(function (value, index) {
        var sliceAngle = (value / total) * 2 * Math.PI;
        var color = colors[index % colors.length];
        // Create gradient
        var gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, adjustColorBrightness(color, -20));
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.closePath();
        ctx.fill();
        // Add border
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
        // Draw label
        if (labels[index] && sliceAngle > 0.2) {
            var labelAngle = currentAngle + sliceAngle / 2;
            var labelX = centerX + Math.cos(labelAngle) * (radius * 0.7);
            var labelY = centerY + Math.sin(labelAngle) * (radius * 0.7);
            ctx.font = '10px Inter, sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.textAlign = 'center';
            ctx.fillText(labels[index], labelX, labelY);
        }
        currentAngle += sliceAngle;
    });
}
function drawDoughnutChart(ctx, values, labels, centerX, centerY, radius) {
    var total = values.reduce(function (sum, val) { return sum + val; }, 0);
    if (total === 0)
        return;
    var colors = [
        '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6',
        '#06b6d4', '#84cc16', '#f97316', '#ec4899', '#14b8a6'
    ];
    var innerRadius = radius * 0.6;
    var currentAngle = -Math.PI / 2;
    values.forEach(function (value, index) {
        var sliceAngle = (value / total) * 2 * Math.PI;
        var color = colors[index % colors.length];
        // Create gradient
        var gradient = ctx.createRadialGradient(centerX, centerY, innerRadius, centerX, centerY, radius);
        gradient.addColorStop(0, adjustColorBrightness(color, 20));
        gradient.addColorStop(1, color);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.arc(centerX, centerY, innerRadius, currentAngle + sliceAngle, currentAngle, true);
        ctx.closePath();
        ctx.fill();
        // Add border
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
        currentAngle += sliceAngle;
    });
    // Draw center text
    ctx.font = '12px Inter, sans-serif';
    ctx.fillStyle = '#374151';
    ctx.textAlign = 'center';
    ctx.fillText('Total', centerX, centerY - 5);
    ctx.font = 'bold 14px Inter, sans-serif';
    ctx.fillText(total.toString(), centerX, centerY + 10);
}
// Helper function to adjust color brightness
function adjustColorBrightness(hex, percent) {
    var num = parseInt(hex.replace('#', ''), 16);
    var amt = Math.round(2.55 * percent);
    var R = (num >> 16) + amt;
    var G = (num >> 8 & 0x00FF) + amt;
    var B = (num & 0x0000FF) + amt;
    return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255))
        .toString(16)
        .slice(1);
}
export default SimpleChart;
//# sourceMappingURL=SimpleChart.js.map