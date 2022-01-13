import Post from "./Post";
import { postData } from "./data";

function Posts() {
  return (
    <div>
      {postData.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.name}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
