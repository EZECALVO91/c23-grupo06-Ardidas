import Header from "./components/Header"
import './assets/css/styles.css'
import DashboardExclusive from "./components/DashboardExclusive"
import ContainerSections from "./components/ContainerSections"
import Footer from "./components/Footer"
import { useState, useEffect } from "react"

function App() {
  const [apiData, setApiData] = useState(null);


 //Creamos una api que se encarga de llamar a las apis que pedia el sprint. 
  useEffect(() => {
    const callApi = async () => {
      const response = await fetch("http://localhost:3000/api/dashboardReact")
      const consulta = await response.json()
      setApiData(consulta)
      // console.log(consulta.categories[3].category)
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
      <Footer />
    </>
  )
}

export default App
