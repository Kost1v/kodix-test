import { Link } from "react-router-dom";
import css from "./Post.module.css";
import TextSnippet from "../../utils/textSnippet";

const Post = ({ posts }) => {
  return (
    <ul className={css.postsList}>
      {posts !== null &&
        posts.map((post) => {
          return (
            <li key={post.id} className={css.post}>
              <Link to={`/blog/${post.id}`} key={post.id}>
                <div
                  style={{
                    borderRadius: 16,
                    width: 246,
                    height: 136,
                    backgroundColor: "#f5f5f5",
                  }}
                ></div>
                <p className={css.postDate}>wednesday 12, march 2024</p>
                <p className={css.postTitle}>
                  {post.title && <TextSnippet text={post.title} />}
                </p>
                <p className={css.postBody}>
                  {post.body && <TextSnippet text={post.body} />}
                </p>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Post;
