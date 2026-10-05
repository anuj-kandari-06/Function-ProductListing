function StatusBadge({ status }) {
    const statusStyles  = {
        Active: "bg-green-100 text-green-700",
        Leave: "bg-yellow-100 text-yellow-700",
    }

    return (
        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${statusStyles[status]}`}>{status}</span>
    )
}
export default StatusBadge