function EmployeeTable() {
    const employees = [
        {
            id: "EMP001",
            name: "Rahul Sharma",
            department: "IT",
            position: "Developer",
            status: "Active",
        },
        {
            id: "EMP002",
            name: "Priya Singh",
            department: "HR",
            position: "Manager",
            status: "Active",
        },
        {
            id: "EMP003",
            name: "Amit Kumar",
            department: "Finance",
            position: "Accountant",
            status: "Leave",
        },
        {
            id: "EMP004",
            name: "Neha Joshi",
            department: "Marketing",
            position: "Executive",
            status: "Active",
        },
    ]
    return (
        <div className="mt-8 overflow-x-auto rounded-xl bg-white shadow-sm border border-gray-200">
            <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                            Employee ID
                        </th>
                        <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                            name
                        </th>
                        <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                            department

                        </th>
                        <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                            position
                        </th>
                        <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                            status

                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}
                            className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm text-gray-700">{employee.id}</td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800">{employee.name}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{employee.department}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{employee.position}</td>
                            <td className="px-6 py-4 text-sm">{employee.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default EmployeeTable