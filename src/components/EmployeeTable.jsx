import StatusBadge from "../components/StatusBadge"
function EmployeeTable() {
    const employees = [
        {
            Id: "EMP001",
            Name: "Rahul Sharma",
            Department: "IT",
            Position: "Developer",
            Status: "Active",
        },
        {
            Id: "EMP002",
            Name: "Priya Singh",
            Department: "HR",
            Position: "Manager",
            Status: "Active",
        },
        {
            Id: "EMP003",
            Name: "Amit Kumar",
            Department: "Finance",
            Position: "Accountant",
            Status: "Leave",
        },
        {
            Id: "EMP004",
            Name: "Neha Joshi",
            Department: "Marketing",
            Position: "Executive",
            Status: "Active",
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
                            Name
                        </th>
                        <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                            Department

                        </th>
                        <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                            Position
                        </th>
                        <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                            Status

                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.Id}
                            className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm text-gray-700">{employee.Id}</td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800">{employee.Name}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{employee.Department}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{employee.Position}</td>
                            <td className="px-6 py-4 text-sm"><StatusBadge status={employee.Status}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default EmployeeTable