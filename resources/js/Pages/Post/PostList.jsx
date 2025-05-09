import SinglePostListItem from "./SinglePostListItem.jsx";
import {Link} from "@inertiajs/react";

const PostList = ({ posts }) => {
    console.log(posts);
    return (
        <div>
            <ul>
                <li>
                    <Link href="/" className="text-blue-500 hover:underline">Home</Link>
                </li>
                <li>
                    <Link href="/posts" className="text-blue-500 hover:underline">Posts</Link>
                </li>
            </ul>
            <h1 className="text-5xl font-bold">Post List</h1>
            <p className="mt-4 text-lg">This is a simple React component styled with Tailwind CSS.</p>
            <ul className="mt-4">
                {
                    posts?.length === 0 && (
                        <li className="p-4 border-b">No posts available</li>
                    )
                }
                {
                    posts?.map((post) => <SinglePostListItem {...post} key={post.id} />)
                }
            </ul>
        </div>
    );
}

export default PostList;
