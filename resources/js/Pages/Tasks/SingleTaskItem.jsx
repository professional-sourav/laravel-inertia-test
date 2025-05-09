const SingleTaskItem = ({ task }) => {

    return (
        <div className="flex flex-col gap-2 p-4 border-bottom border-gray-300 rounded-lg shadow-sm mb-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{task.title}</h2>
                <span className="text-sm text-gray-500">{new Date(task.created_at).toLocaleDateString()}</span>
            </div>
            <p className="text-gray-700">{task.description}</p>
            <div className="flex items-center gap-2 mt-2 justify-end">
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Edit</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
            </div>
        </div>
    )
}

export default SingleTaskItem
