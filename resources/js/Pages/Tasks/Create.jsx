import {Link, useForm} from "@inertiajs/react";

const Create = () => {

    const {
        data,
        post,
        errors,
        processing,
        setData
    } = useForm({
        title: '',
        description: ''
    })

    console.log(errors)

    const handleSubmit = (e) => {
        e.preventDefault()

        post('/tasks', {
            onSuccess: () => {
                // Handle success, e.g., redirect or show a success message
            },
            onError: () => {
                // Handle error, e.g., show an error message
            }
        })
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create Task</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700">Title</label>
                    <input
                        onChange={(e) => setData('title', e.target.value)}
                        type="text"
                        name="title"
                        id="title"
                        className="mt-1 block w-full border-gray-900 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                    {
                        errors.title && (
                            <span className="text-red-500 text-sm">{errors.title}</span>
                        )
                    }
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700">Description</label>
                    <textarea
                        onChange={(e) => setData('description', e.target.value)}
                        name="description"
                        id="description"
                        rows="4"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200">

                    </textarea>
                    {
                        errors.description && (
                            <span className="text-red-500 text-sm">{errors.description}</span>
                        )
                    }
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Create Task</button>
                <Link className="ml-4 px-4 py-2 bg-gray-300 text-gray-700 rounded" href="/tasks">Cancel</Link>
            </form>
        </div>
    )
}

export default Create
