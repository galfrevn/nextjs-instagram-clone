import { data } from "./data";

const dummyData = data.splice(0, 5);

function Suggestions() {
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-semibold text-gray-400">
          Suggestions for you
        </h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>

      {dummyData.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3 cursor-pointer"
        >
          <img
            src={profile.avatar}
            alt=""
            className="w-10 h-10 rounded-full border p-[2px]"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.name}</h2>
            <h3 className="text-xs text-gray-400" >Works at {profile.company}</h3>
          </div>

          <button className="text-blue-400 text-sm" >Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
