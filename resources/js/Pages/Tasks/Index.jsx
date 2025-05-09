import SingleTaskItem from "./SingleTaskItem.jsx";

const Index = ({ tasks }) => {
    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold mb-4">All Tasks</h1>
                <a href="/tasks/create" className="px-4 py-2 bg-blue-500 text-white">Create Task</a>
            </div>
            {
                tasks.length === 0 ? (
                    <p className="text-gray-500">No tasks available.</p>
                ) : (
                    <div className="grid grid-cols-1 gap-4">
                        {
                            tasks.map((task) => <SingleTaskItem key={task.id} task={task} />)
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Index
