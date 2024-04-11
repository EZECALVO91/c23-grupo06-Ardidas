import Header from "./components/Header"
import '../../public/stylesheets/styles.css'
import DashboardExclusive from "./components/DashboardExclusive"
import ContainerSections from "./components/ContainerSections"
import Footer from "./components/Footer"
import { useState, useEffect } from "react"

function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const callApi = () => {
      fetch("http://localhost:3000/api/dashboardReact")
      .then(response => response.json())
      .then(data => setApiData(data))
        // .then(data => console.log(data))
      .catch(error => console.error('Error fetching data:', error));
    }
    callApi();
  }, [])

  return (
    <>
      <Header />
      <main className="main_react">
        <section className="section_products_main_index" >
          <DashboardExclusive />
          <ContainerSections apiData={apiData} />
        </section>
      </main>
      <script src="../../public/js/dashboardReact/dashboard.js"></script>
      <Footer />
    </>
  )
}

export default App
