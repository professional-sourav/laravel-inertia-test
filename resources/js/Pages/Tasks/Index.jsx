import SingleTaskItem from "./SingleTaskItem.jsx";
import {Link} from "@inertiajs/react";

const Index = ({ tasks }) => {
    console.log(tasks, tasks.current_page)
    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold mb-4">All Tasks</h1>
                <a href="/tasks/create" className="px-4 py-2 bg-blue-500 text-white">Create Task</a>
            </div>
            {
                tasks.total === 0 ? (
                    <p className="text-gray-500">No tasks available.</p>
                ) : (
                    <>
                        <div className="grid grid-cols-1 gap-4">
                            {
                                tasks.data.map((task) => <SingleTaskItem key={task.id} task={task} />)
                            }
                        </div>
                        <div className="pagination flex justify-center mt-4">
                            {
                                tasks.prev_page_url ?
                                <Link
                                    href={tasks.prev_page_url}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-l"
                                    disabled={!tasks.prev_page_url}>
                                    Previous
                                </Link>
                                : <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded-l">
                                    Previous
                                </span>
                            }

                            <span
                                className="px-4 py-2 bg-gray-200 text-gray-700">
                                {tasks.current_page} / {tasks.last_page}
                            </span>

                            {
                                tasks.next_page_url ?
                                    <Link
                                        href={tasks.next_page_url}
                                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-l"
                                        disabled={!tasks.next_page_url}>
                                        Next
                                    </Link>
                                    : <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded-l">
                                    Next
                                </span>
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Index
