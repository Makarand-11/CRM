import { useEffect, useState } from 'react';

const FetchChartData = ({ onDataLoaded, timePeriod }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://mocki.io/v1/cbbd1c0d-bae8-4137-b330-99c2c246663c');
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        
        const selectedData = {
          pieData: data.charts.pieData[timePeriod],
          lineData: data.charts.lineData[timePeriod],
          barData: data.charts.barData[timePeriod]
        };
        
        onDataLoaded(selectedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, [timePeriod, onDataLoaded]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center">
        <p>{error}</p>
      </div>
    );
  }

  return null;  
};

export default FetchChartData;
