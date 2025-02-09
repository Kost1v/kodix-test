import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import css from "./BlogPostPage.module.css";
import ShareIcon from "../../components/ShareIcon/ShareIcon";
import DateAndUser from "../../components/DateAndUser/DateAndUser";
import BlogPostList from "../../components/BlogPostList/BlogPostList";

const BlogPostPage = () => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
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

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [id]);

  return (
    <div className={css.wrapper}>
      <div className={css.heroPostWrapper}>
        <div>
          {error && error}
          {isLoading && <Loader />}
          <h1 className={css.heroPostTitle}>{post?.title}</h1>
          <p className={css.heroPostText}>{post?.body}</p>
        </div>
        <DateAndUser />
        <div
          style={{
            borderRadius: 24,
            width: 553,
            height: 246,
            backgroundColor: "#f5f5f5",
          }}
        ></div>
        <ShareIcon />
      </div>
      <div style={{ width: 471 }}>
        <div className={css.morePosts}>
          <div className={css.morePostsIcon}>
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 2L4.5 2C4.10218 2 3.72064 2.15804 3.43934 2.43934C3.15804 2.72064 3 3.10218 3 3.5L3 15.5C3 15.8978 3.15804 16.2794 3.43934 16.5607C3.72064 16.842 4.10218 17 4.5 17H13.5C13.8978 17 14.2794 16.842 14.5607 16.5607C14.842 16.2794 15 15.8978 15 15.5L15 6.5M10.5 2L15 6.5M10.5 2V6.5L15 6.5M12 10.25L6 10.25M12 13.25L6 13.25M7.5 7.25H6"
                stroke="#FF4405"
              />
            </svg>

            <p className={css.titleList}>Related Articles</p>
          </div>
          <button type="button" className={css.readMore}>
            Read more
          </button>
        </div>
        <BlogPostList posts={posts} />
      </div>
    </div>
  );
};

export default BlogPostPage;
