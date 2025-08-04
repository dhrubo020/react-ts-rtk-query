import { Link } from 'react-router-dom';
import {
  useCreatePostMutation,
  useGetPostsQuery,
} from '../../redux/slices/post';

const Post = () => {
  const { data, isError, isLoading, refetch } = useGetPostsQuery({});

  const [createPostMutation, { isLoading: isCreatingPost, isSuccess }] =
    useCreatePostMutation({});

  return (
    <div>
      <h1>Post List</h1>

      {/* <button onClick={() => dispatch(getPosts())}>Get Todos</button> */}
      <button
        onClick={() => {
          const post = { title: 'New Post' };
          createPostMutation(post);
          isSuccess && refetch();
        }}
      >
        {isCreatingPost ? <span>Creating...</span> : <span>Create Post</span>}
      </button>
      <div
        style={{
          height: '200px',
          padding: '20px',
          overflowY: 'auto',
        }}
      >
        {isLoading && <p>Loading todos...</p>}
        {isError}
        {data && (
          <ul>
            {data.map((post: { id: number; title: string }) => (
              <li key={post.id}>
                <Link to="counter">{post.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Post;
