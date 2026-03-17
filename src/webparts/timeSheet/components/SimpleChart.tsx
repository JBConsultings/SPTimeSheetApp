import * as React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TooltipItem,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { IChartData } from '../services/AnalyticsService';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ISimpleChartProps {
  data: IChartData;
  type: 'line' | 'pie' | 'bar' | 'doughnut';
  title: string;
  className?: string;
  height?: number;
  width?: number;
}

// Palette shared across charts
const PALETTE = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];

const SimpleChart: React.FC<ISimpleChartProps> = ({ data, type, className, height = 200 }) => {
  const labels = data.labels || [];
  const rawValues = (data.datasets?.[0]?.data as number[]) || [];

  if (!rawValues.length) {
    return (
      <div className={className} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height }}>
        <span style={{ color: '#94a3b8', fontSize: 13 }}>No data available</span>
      </div>
    );
  }

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    height,
    width: '100%',
  };

  if (type === 'line') {
    const chartData = {
      labels,
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
        backgroundColor: (context: { chart: ChartJS }) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return 'rgba(99,102,241,0.08)';
          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, 'rgba(99,102,241,0.22)');
          gradient.addColorStop(1, 'rgba(99,102,241,0.01)');
          return gradient;
        },
      }],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 900, easing: 'easeInOutQuart' as const },
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
            label: (ctx: TooltipItem<'line'>) => ` ${ctx.parsed.y}h`,
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
            callback: (val: number | string) => `${val}h`,
          },
          beginAtZero: true,
        },
      },
    };

    return (
      <div className={className} style={containerStyle}>
        <Line data={chartData} options={options} />
      </div>
    );
  }

  if (type === 'bar') {
    const barColors = rawValues.map((_, i) => PALETTE[i % PALETTE.length]);
    const chartData = {
      labels,
      datasets: [{
        label: data.datasets[0].label || 'Hours',
        data: rawValues,
        backgroundColor: barColors.map(c => c + 'cc'),
        borderColor: barColors,
        borderWidth: 1.5,
        borderRadius: 6,
        borderSkipped: false as const,
      }],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 800, easing: 'easeOutBounce' as const },
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
            label: (ctx: TooltipItem<'bar'>) => ` ${ctx.parsed.y}h`,
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
            callback: (val: number | string) => `${val}h`,
          },
          beginAtZero: true,
        },
      },
    };

    return (
      <div className={className} style={containerStyle}>
        <Bar data={chartData} options={options} />
      </div>
    );
  }

  // doughnut / pie
  const doughnutColors = rawValues.map((_, i) => PALETTE[i % PALETTE.length]);
  const chartData = {
    labels,
    datasets: [{
      data: rawValues,
      backgroundColor: doughnutColors.map(c => c + 'd9'),
      borderColor: doughnutColors,
      borderWidth: 2,
      hoverOffset: 6,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 900, easing: 'easeInOutQuart' as const },
    cutout: type === 'doughnut' ? '62%' : '0%',
    plugins: {
      legend: {
        position: 'right' as const,
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
          label: (ctx: TooltipItem<'doughnut'>) => ` ${ctx.label}: ${ctx.parsed}h`,
        },
      },
    },
  };

  return (
    <div className={className} style={containerStyle}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default SimpleChart;
