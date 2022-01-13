import { data } from "./data";
import Story from "./Story";

function ProfileStories() {
  return (
    <div className="md:max-w-3xl xl:max-w-6xl mx-auto ">
      <div className="mt-5 ml-5 flex space-x-5 p-6 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-100">

        {data.map((profile) => (
          <Story
            key={profile.id}
            img={profile.avatar}
            username={profile.name}
          />
        ))}

      </div>
    </div>
  );
}

export default ProfileStories;
