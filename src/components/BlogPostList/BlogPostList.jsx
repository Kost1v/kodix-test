import { Link } from "react-router-dom";
import css from "./BlogPostList.module.css";
import SnippetForText from "../../utils/SnippetForText";
const BlogPostList = ({posts}) => {
  return (
    <ul className={css.postsList}>
      {posts !== null &&
        posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/blog/${post.id}`} key={post.id} className={css.post}>
                <div
                  style={{
                    borderRadius: 16,
                    width: 225,
                    height: 136,
                    backgroundColor: "#f5f5f5",
                  }}
                ></div>
                <div className={css.postDetails}>
                  <p className={css.postDate}>wednesday 12, march 2024</p>
                  <p className={css.postTitle}>
                    {post.title && <SnippetForText text={post.title} />}
                  </p>
                  <p className={css.postBody}>
                    {post.body && <SnippetForText text={post.body} />}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default BlogPostList;
