import * as React from 'react';
import { useEffect, useRef } from 'react';
import { IChartData } from '../services/AnalyticsService';

// Chart.js types - we'll load it via CDN to avoid bundle size issues
declare global {
  interface Window {
    Chart: any;
  }
}

interface IChartComponentProps {
  data: IChartData;
  type: 'line' | 'pie' | 'bar' | 'doughnut';
  title: string;
  className?: string;
  height?: number;
  width?: number;
}

const ChartComponent: React.FC<IChartComponentProps> = ({ 
  data, 
  type, 
  title, 
  className,
  height = 200,
  width = 400
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<any>(null);

  const [chartJsLoaded, setChartJsLoaded] = React.useState(false);
  const [chartJsError, setChartJsError] = React.useState(false);

  // Load Chart.js from CDN
  useEffect(() => {
    const loadChartJS = async (): Promise<void> => {
      if (window.Chart) {
        setChartJsLoaded(true);
        return; // Already loaded
      }

      try {
        // Load Chart.js from CDN
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js';
        script.async = true;
        
        script.onload = () => {
          console.log('Chart.js loaded successfully');
          setChartJsLoaded(true);
          setChartJsError(false);
        };

        script.onerror = () => {
          console.error('Failed to load Chart.js');
          setChartJsError(true);
        };

        // Check if script already exists
        const existingScript = document.querySelector('script[src*="chart"]');
        if (!existingScript) {
          document.head.appendChild(script);
        } else {
          // Script exists, check if Chart is available
          setTimeout(() => {
            if (window.Chart) {
              setChartJsLoaded(true);
            } else {
              setChartJsError(true);
            }
          }, 1000);
        }
      } catch (error) {
        console.error('Error loading Chart.js:', error);
        setChartJsError(true);
      }
    };

    loadChartJS();
  }, []);

  // Create chart when Chart.js is available
  useEffect(() => {
    if (!canvasRef.current || !chartJsLoaded || !window.Chart || !data) {
      // If Chart.js is not loaded, show fallback
      if (canvasRef.current && !chartJsLoaded && data) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          drawFallbackChart(ctx, data, type, width, height);
        }
      }
      return;
    }

    // Destroy existing chart instance
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    try {
      // Chart configuration
      const config = getChartConfig(data, type);
      
      // Create new chart instance
      chartInstanceRef.current = new window.Chart(ctx, config);
    } catch (error) {
      console.error('Error creating chart:', error);
      
      // Fallback: Draw a simple chart manually
      drawFallbackChart(ctx, data, type, width, height);
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data, type, width, height, chartJsLoaded]);

  return (
    <div className={className}>
      {chartJsError && (
        <div style={{ 
          padding: '20px', 
          textAlign: 'center', 
          color: '#6b7280',
          fontSize: '14px'
        }}>
          Chart loading failed. Showing fallback visualization.
        </div>
      )}
      <canvas 
        ref={canvasRef}
        width={width}
        height={height}
        style={{ 
          maxWidth: '100%', 
          height: 'auto',
          borderRadius: '8px'
        }}
      />
    </div>
  );
};

// Chart.js configuration generator
function getChartConfig(data: IChartData, type: 'line' | 'pie' | 'bar' | 'doughnut') {
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: type === 'pie' || type === 'doughnut',
        position: 'bottom' as const,
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

  let chartData = { ...data };

  // Configure datasets based on chart type
  if (chartData.datasets) {
    chartData.datasets = chartData.datasets.map((dataset, index) => {
      const baseDataset = { ...dataset };

      if (type === 'line') {
        return {
          ...baseDataset,
          backgroundColor: dataset.backgroundColor || 'rgba(59, 130, 246, 0.1)',
          borderColor: dataset.borderColor || '#3b82f6',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#3b82f6',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 7
        };
      }

      if (type === 'bar') {
        return {
          ...baseDataset,
          backgroundColor: dataset.backgroundColor || '#3b82f6',
          borderColor: 'transparent',
          borderRadius: 6,
          borderSkipped: false
        };
      }

      if (type === 'pie' || type === 'doughnut') {
        const colors = [
          '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', 
          '#06b6d4', '#84cc16', '#f97316', '#ec4899', '#14b8a6'
        ];
        
        return {
          ...baseDataset,
          backgroundColor: colors.slice(0, (dataset.data as number[]).length),
          borderWidth: 2,
          borderColor: '#ffffff'
        };
      }

      return baseDataset;
    });
  }

  return {
    type,
    data: chartData,
    options: {
      ...commonOptions,
      ...(type === 'doughnut' && {
        cutout: '60%'
      })
    }
  };
}

// Fallback chart drawing for when Chart.js fails to load
function drawFallbackChart(
  ctx: CanvasRenderingContext2D, 
  data: IChartData, 
  type: string,
  width: number,
  height: number
): void {
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

  const dataset = data.datasets[0];
  const values = dataset.data as number[];
  
  if (values.length === 0) {
    ctx.fillText('No data to display', width / 2, height / 2);
    return;
  }

  if (type === 'line' && data.labels) {
    // Simple line chart
    const maxValue = Math.max(...values, 1);
    const minValue = Math.min(...values, 0);
    const range = maxValue - minValue || 1;
    
    const padding = 30;
    const chartWidth = width - (padding * 2);
    const chartHeight = height - (padding * 2);
    
    // Draw grid lines
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padding + (i / 4) * chartHeight;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
    }
    
    // Draw line
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
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
    });
    
  } else if (type === 'bar' && data.labels) {
    // Simple bar chart
    const maxValue = Math.max(...values, 1);
    const padding = 30;
    const barWidth = (width - padding * 2) / values.length - 8;
    
    ctx.fillStyle = '#3b82f6';
    
    values.forEach((value, index) => {
      const barHeight = (value / maxValue) * (height - padding * 2);
      const x = padding + index * (barWidth + 8);
      const y = height - padding - barHeight;
      
      // Draw bar with rounded corners
      const radius = 4;
      ctx.beginPath();
      ctx.roundRect(x, y, barWidth, barHeight, radius);
      ctx.fill();
    });
    
  } else if (type === 'pie' || type === 'doughnut') {
    // Simple pie/doughnut chart
    const total = values.reduce((sum, val) => sum + val, 0);
    if (total === 0) {
      ctx.fillText('No data to display', width / 2, height / 2);
      return;
    }
    
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 3;
    const innerRadius = type === 'doughnut' ? radius * 0.6 : 0;
    
    let currentAngle = -Math.PI / 2;
    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];
    
    values.forEach((value, index) => {
      const sliceAngle = (value / total) * 2 * Math.PI;
      
      ctx.fillStyle = colors[index % colors.length];
      ctx.beginPath();
      
      if (innerRadius > 0) {
        // Doughnut chart
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.arc(centerX, centerY, innerRadius, currentAngle + sliceAngle, currentAngle, true);
      } else {
        // Pie chart
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
      }
      
      ctx.closePath();
      ctx.fill();
      
      currentAngle += sliceAngle;
    });
  }
}

export default ChartComponent;