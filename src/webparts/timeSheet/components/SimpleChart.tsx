import * as React from 'react';
import { useEffect, useRef } from 'react';
import { IChartData } from '../services/AnalyticsService';

interface ISimpleChartProps {
  data: IChartData;
  type: 'line' | 'pie' | 'bar' | 'doughnut';
  title: string;
  className?: string;
  height?: number;
  width?: number;
}

const SimpleChart: React.FC<ISimpleChartProps> = ({ 
  data, 
  type, 
  title, 
  className,
  height = 200,
  width = 400
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !data) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = width;
    canvas.height = height;

    drawChart(ctx, data, type, width, height);
  }, [data, type, width, height]);

  return (
    <div className={className} style={{ textAlign: 'center' }}>
      <canvas 
        ref={canvasRef}
        style={{ 
          maxWidth: '100%', 
          height: 'auto',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
          border: '1px solid rgba(203, 213, 225, 0.5)'
        }}
      />
    </div>
  );
};

function drawChart(
  ctx: CanvasRenderingContext2D, 
  data: IChartData, 
  type: string,
  width: number,
  height: number
): void {
  // Clear canvas
  ctx.clearRect(0, 0, width, height);
  
  // Set background
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, '#f8fafc');
  gradient.addColorStop(1, '#e2e8f0');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Check for data
  if (!data.datasets || !data.datasets[0] || !data.datasets[0].data) {
    drawNoDataMessage(ctx, width, height);
    return;
  }

  const dataset = data.datasets[0];
  const values = dataset.data as number[];
  
  if (values.length === 0) {
    drawNoDataMessage(ctx, width, height);
    return;
  }

  const padding = 30;
  const chartWidth = width - (padding * 2);
  const chartHeight = height - (padding * 2);

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

function drawNoDataMessage(ctx: CanvasRenderingContext2D, width: number, height: number): void {
  ctx.font = '14px Inter, sans-serif';
  ctx.fillStyle = '#6b7280';
  ctx.textAlign = 'center';
  ctx.fillText('No data available', width / 2, height / 2);
}

function drawLineChart(
  ctx: CanvasRenderingContext2D, 
  values: number[], 
  labels: string[], 
  padding: number, 
  chartWidth: number, 
  chartHeight: number
): void {
  const maxValue = Math.max(...values, 1);
  const minValue = Math.min(...values, 0);
  const range = maxValue - minValue || 1;

  // Draw grid lines
  ctx.strokeStyle = 'rgba(203, 213, 225, 0.5)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = padding + (i / 4) * chartHeight;
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(padding + chartWidth, y);
    ctx.stroke();
  }

  // Draw area fill
  const gradient = ctx.createLinearGradient(0, padding, 0, padding + chartHeight);
  gradient.addColorStop(0, 'rgba(59, 130, 246, 0.2)');
  gradient.addColorStop(1, 'rgba(59, 130, 246, 0.02)');
  
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(padding, padding + chartHeight);
  
  values.forEach((value, index) => {
    const x = padding + (index / Math.max(values.length - 1, 1)) * chartWidth;
    const y = padding + (1 - (value - minValue) / range) * chartHeight;
    
    if (index === 0) {
      ctx.lineTo(x, y);
    } else {
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
  
  values.forEach((value, index) => {
    const x = padding + (index / Math.max(values.length - 1, 1)) * chartWidth;
    const y = padding + (1 - (value - minValue) / range) * chartHeight;
    
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  
  ctx.stroke();

  // Draw points
  ctx.fillStyle = '#3b82f6';
  values.forEach((value, index) => {
    const x = padding + (index / Math.max(values.length - 1, 1)) * chartWidth;
    const y = padding + (1 - (value - minValue) / range) * chartHeight;
    
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
    
    values.forEach((_, index) => {
      if (labels[index]) {
        const x = padding + (index / Math.max(values.length - 1, 1)) * chartWidth;
        ctx.fillText(labels[index], x, padding + chartHeight + 20);
      }
    });
  }
}

function drawBarChart(
  ctx: CanvasRenderingContext2D, 
  values: number[], 
  labels: string[], 
  padding: number, 
  chartWidth: number, 
  chartHeight: number
): void {
  const maxValue = Math.max(...values, 1);
  const barWidth = chartWidth / values.length - 8;
  const barSpacing = 8;

  values.forEach((value, index) => {
    const barHeight = (value / maxValue) * chartHeight;
    const x = padding + index * (barWidth + barSpacing);
    const y = padding + chartHeight - barHeight;

    // Create gradient for bar
    const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
    gradient.addColorStop(0, '#60a5fa');
    gradient.addColorStop(1, '#3b82f6');
    
    ctx.fillStyle = gradient;
    
    // Draw rounded rectangle
    const radius = 4;
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

function drawPieChart(
  ctx: CanvasRenderingContext2D, 
  values: number[], 
  labels: string[], 
  centerX: number, 
  centerY: number, 
  radius: number
): void {
  const total = values.reduce((sum, val) => sum + val, 0);
  if (total === 0) return;

  const colors = [
    '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', 
    '#06b6d4', '#84cc16', '#f97316', '#ec4899', '#14b8a6'
  ];

  let currentAngle = -Math.PI / 2;

  values.forEach((value, index) => {
    const sliceAngle = (value / total) * 2 * Math.PI;
    const color = colors[index % colors.length];

    // Create gradient
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
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
      const labelAngle = currentAngle + sliceAngle / 2;
      const labelX = centerX + Math.cos(labelAngle) * (radius * 0.7);
      const labelY = centerY + Math.sin(labelAngle) * (radius * 0.7);
      
      ctx.font = '10px Inter, sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.fillText(labels[index], labelX, labelY);
    }

    currentAngle += sliceAngle;
  });
}

function drawDoughnutChart(
  ctx: CanvasRenderingContext2D, 
  values: number[], 
  labels: string[], 
  centerX: number, 
  centerY: number, 
  radius: number
): void {
  const total = values.reduce((sum, val) => sum + val, 0);
  if (total === 0) return;

  const colors = [
    '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', 
    '#06b6d4', '#84cc16', '#f97316', '#ec4899', '#14b8a6'
  ];

  const innerRadius = radius * 0.6;
  let currentAngle = -Math.PI / 2;

  values.forEach((value, index) => {
    const sliceAngle = (value / total) * 2 * Math.PI;
    const color = colors[index % colors.length];

    // Create gradient
    const gradient = ctx.createRadialGradient(centerX, centerY, innerRadius, centerX, centerY, radius);
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
function adjustColorBrightness(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255))
    .toString(16)
    .slice(1);
}

export default SimpleChart;