import './App.css'
import Header from "./components/Header"
import '../../public/stylesheets/styles.css'
import DashboardExclusive from "./components/DashboardExclusive"
import ContainerSections from "./components/ContainerSections"
import Footer from "./components/Footer"

function App() {

  return (
    <body className="body_home">
      <Header></Header>
      <main>
      <DashboardExclusive></DashboardExclusive>
      <ContainerSections></ContainerSections>
      </main>
      <script src="../../public/js/dashboardReact/dashboard.js"></script>
      <Footer></Footer>
    </body>
  )
}

export default App
