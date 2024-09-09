const StatCard = ({ title, value, icon }) => {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 flex items-center justify-between space-x-4">
        <div>
          <h3 className="text-lg font-medium text-gray-600">{title}</h3>
          <p className="text-4xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
        <div className="text-blue-600 text-5xl">{icon}</div>
      </div>
    );
  };
  
  export default StatCard;
  