import React, { useEffect, useState } from "react";
import GeneralInfo from "./GeneralInfo";
import UltimoProducto from "./UltimoProducto";
import CantidadCategorias from "./CantidadCategorias";
import Articulos from "./Articulos";
import api from "../../services/api";

const Dashboard = () => {
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
    <div className="dashboard">
      {dashboardData && (
        <>
          <GeneralInfo data={dashboardData} />
          <UltimoProducto product={dashboardData.product} />
          <CantidadCategorias categories={dashboardData.categories} />
          <Articulos categories={dashboardData.categories} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
