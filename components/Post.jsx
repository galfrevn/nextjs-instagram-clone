import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5">
        <Link href={`/profile/${username}`}>
          <img
            src={userImg}
            alt=""
            className="rounded-full h-12 w-12 object-contain border p-1 mr-3 cursor-pointer"
          />
        </Link>
        <p className="flex-1 font-semibold cursor-pointer">{username} </p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* Image */}
      <img src={img} alt="" className="object-cover w-full" />

      {/* Buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* Caption */}
      <p className="p-5 truncate">
        <span className="font-semibold mr-1">{username} </span>
        {caption}
      </p>

      {/* Comments */}

      {/* Input Box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7 " />
        <input
          type="text"
          placeholder="Add a comment... "
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
}

export default Post;
