import {Link} from "@inertiajs/react";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-5xl font-bold">Welcome to the Home Page</h1>
            <p className="mt-4 text-lg">This is a simple React component styled with Tailwind CSS.</p>
            <Link href="/posts" className="text-blue-500 hover:underline">Posts</Link>
        </div>
    );
}

export default Home;
