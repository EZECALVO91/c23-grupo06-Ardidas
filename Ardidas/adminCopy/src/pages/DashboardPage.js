import React, { useEffect, useState } from "react";
import api from "../services/api";

const DashboardPage = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.fetchDashboardData();
        setDashboardData(data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-page">
      {dashboardData && (
        <div>
          <h1>{dashboardData.title}</h1>
          <p>Productos: {dashboardData.productsCount}</p>
          <p>Categorías: {dashboardData.categoriesCount}</p>
          {/* Agrega más datos del dashboard según sea necesario */}
        </div>
      )}
      {!dashboardData && <p>Cargando datos del dashboard...</p>}
    </div>
  );
};

export default DashboardPage;
