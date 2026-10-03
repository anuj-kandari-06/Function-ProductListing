function StatCard({title,value}){
    return(
        <div className="bg-white rounded-l-lg p-5 shadow-sm border border-gray-200">
            <p className="text-sm text-gray-500 font-bold">{title}</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-800">{value}</h2>
        </div>
    )
}
export default StatCard