function Navbar() {
    return (
        <nav className="bg-white px-6 py-4 border-b-4 border-gray-300">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-800">Office Management</h1>
                <div className="flex items-center gap-8">
                    <a href="#" className="text-gray-600 hover:text-blue-500">Dashboard</a>
                    <a href="#"className="text-gray-600 hover:text-blue-500">Employees</a>
                    <a href="#"className="text-gray-600 hover:text-blue-500">Attendance</a>
                    <a href="#"className="text-gray-600 hover:text-blue-500">Settings</a>
                </div>
            </div>
        </nav>
    )
}
export default Navbar