import StatCard from "../components/StatCard"
import EmployeeTable from "../components/EmployeeTable"
function Dashboard() {
    return (
        <main className="flex-1 p-6">
            <h1 className=" text-2xl sm:text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-500 mt-3">
                Welcome to your office management dashboard.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard
                 title="Total Employees"
                value="120"
                />
                 <StatCard
                 title="Present Today"
                value="96"
                />
                 <StatCard
                 title="On Leave"
                value="12"
                />
                 <StatCard
                 title="Departments"
                value="6"
                />
            </div>
            <EmployeeTable/>
        </main>
    )
}
export default Dashboard