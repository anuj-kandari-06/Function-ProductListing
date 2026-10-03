import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Dashboard from "./Pages/Dashboard"
import StatCard from "./components/StatCard"

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Dashboard/>
        <StatCard/>
      </div>
    </>
  )
}

export default App
StatCard