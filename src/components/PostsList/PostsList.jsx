import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import axios from "axios";
import Post from "../Post/Post";
import css from './PostsList.module.css'

const PostsList = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(data);
        
        setPosts(data);        
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className={css.listCont}>
      {error && error}
      {isLoading && <Loader />}
      {/* <h1>PostsList</h1> */}
      {posts !== null && <Post posts={posts} />}
    </div>
  );
}

export default PostsList