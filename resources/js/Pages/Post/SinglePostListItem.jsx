const SinglePostListItem = ({ id, title, slug, content, author, status }) => {
    return (
        <li className="p-4 border-b">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-2 text-gray-600">{content}</p>
            <p className="mt-2 text-sm text-gray-500">Author: {author}</p>
            <p className="mt-2 text-sm text-gray-500">Status: {status}</p>
            <a href={`/posts/${slug}`} className="text-blue-500 hover:underline mt-4 block">
                Read more
            </a>
        </li>
    );
}

export default SinglePostListItem;
