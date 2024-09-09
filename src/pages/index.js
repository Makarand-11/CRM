import { useState } from 'react';
import Layout from '../components/Layout';
import LineBarChart from '../components/LineBarChart';
import PieChart from '../components/PieChart';
import StatCard from '../components/StatCard';
import TimeSelector from '../components/TimeSelector';
import FetchChartData from '../components/FetchChartData';
import { FaUser, FaChartLine, FaDollarSign } from 'react-icons/fa';

export default function Home() {
  const [pieData, setPieData] = useState(null);
  const [lineData, setLineData] = useState(null);
  const [barData, setBarData] = useState(null);
  const [timePeriod, setTimePeriod] = useState('1 week');

  const handleDataLoaded = (data) => {
    setPieData(data.pieData);
    setLineData(data.lineData);
    setBarData(data.barData);
  };

  const handleTimeChange = (newTimePeriod) => {
    setTimePeriod(newTimePeriod);
  };

  return (
    <Layout>
      <FetchChartData onDataLoaded={handleDataLoaded} timePeriod={timePeriod} />

      <TimeSelector onChange={handleTimeChange} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard title="New Users" value="150" icon={<FaUser size={32} />} />
        <StatCard title="Revenue" value="$12,345" icon={<FaDollarSign size={32} />} />
        <StatCard title="Performance" value="87%" icon={<FaChartLine size={32} />} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {pieData ? <PieChart data={pieData} /> : <div>Select Time period to load pie chart</div>}
        {lineData ? <LineBarChart type="line" data={lineData} /> : <div>Select Time Period to Load Line chart</div>}
        {barData ? <LineBarChart type="bar" data={barData} /> : <div>Select Time Period to Load Bar chart</div>}
      </div>
    </Layout>
  );
}
