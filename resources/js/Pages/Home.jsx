import {Link} from "@inertiajs/react";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-5xl font-bold">Welcome to the Home Page</h1>
            <p className="mt-4 text-lg">This is a simple React component styled with Tailwind CSS.</p>
            <ul className="mt-6 text-lg flex flex-row items-center space-x-4">
                <li className="flex items-center">
                    <Link href="/posts" className="text-blue-500 hover:underline">
                        Go to Post Page
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link href="/tasks" className="text-blue-500 hover:underline">
                        Go to Task Page
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;
