import Header from "./components/Header"
import '../../public/stylesheets/styles.css'
import DashboardExclusive from "./components/DashboardExclusive"
import ContainerSections from "./components/ContainerSections"
import Footer from "./components/Footer"
import './App.css'

function App() {

  return (
    <body className="">
        <Header></Header>
      <main className="main_react">
        <DashboardExclusive></DashboardExclusive>
        <ContainerSections></ContainerSections>
      </main>
      <script src="../../public/js/dashboardReact/dashboard.js"></script>
        <Footer></Footer>
    </body>
  )
}

export default App
