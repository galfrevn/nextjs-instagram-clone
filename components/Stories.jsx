import { data } from "./data";
import Story from "./Story";

function Stories() {
  return (
    <div className="flex space-x-3 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-100">
      {data.map((profile) => (
        <Story key={profile.id} img={profile.avatar} username={profile.name} />
      ))}
    </div>
  );
}

export default Stories;
