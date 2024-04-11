// const BASE_URL = "http://localhost:3000/api";

const api = {
  async fetchDashboardData() {
    try {
      const response = await fetch(`http://localhost:3000/api/dashboardReact`);
      if (!response.ok) {
        throw new Error("Error fetching dashboard data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      throw error;
    }
  },

  // Agrega más funciones para otras solicitudes a la API según sea necesario
};

export default api;
