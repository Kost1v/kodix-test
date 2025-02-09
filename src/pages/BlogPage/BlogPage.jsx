import { useEffect, useState } from "react";
import DateAndUser from "../../components/DateAndUser/DateAndUser";
import PostsList from "../../components/PostsList/PostsList";
import ShareIcon from "../../components/ShareIcon/ShareIcon";
import css from "./BlogPage.module.css";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
const BlogPage = () => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        console.log(data);

        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div className={css.container}>
      <div className={css.header}>
        <div className={css.titleLogo}>
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 2.28711L11.3175 6.98211L16.5 7.73961L12.75 11.3921L13.635 16.5521L9 14.1146L4.365 16.5521L5.25 11.3921L1.5 7.73961L6.6825 6.98211L9 2.28711Z"
              stroke="#1FFF1A"
            />
          </svg>
          <p className={css.headerIcon}>Featured</p>
        </div>
        {error && error}
        {isLoading && <Loader />}
        <h1 className={css.title}>{post?.title}</h1>
        <p className={css.textHeader}>{post?.body}</p>
        <DateAndUser />
      </div>
      <div
        style={{
          borderRadius: 24,
          width: 894,
          height: 339,
          backgroundColor: "#f5f5f5",
        }}
      ></div>
      <ShareIcon />
      <PostsList />
    </div>
  );
};

export default BlogPage;
