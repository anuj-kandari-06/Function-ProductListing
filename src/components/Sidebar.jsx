function Sidebar() {
    return (
        <aside className="w-74 min-h-screen bg-gray-900 text-white p-5 ">
            <h2 className="text-2xl font-bold mb-8">
                Office Admin
            </h2>
            <nav className="space-y-2">
                <a href="#" className="block px-4 py-3 rounded-lg bg-blue-600">
                    Dashboard
                </a>
                <a href="#" className="block px-4 py-3 rounded-lg hover: bg-gray-800">
                    Employees

                </a>
                <a href="#" className="block px-4 py-3 rounded-lg hover: bg-gray-800">
                    Attendance
                </a>
                <a href="#" className="block px-4 py-3 rounded-lg hover: bg-gray-800">
                    Leave
                </a>
                <a href="#" className="block px-4 py-3 rounded-lg hover: bg-gray-800">
                    Settings
                </a>
            </nav>
        </aside>
    )
}
export default Sidebar