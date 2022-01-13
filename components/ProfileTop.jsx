import { CogIcon } from "@heroicons/react/outline";

function ProfileTop() {
  return (
    <div className="md:max-w-3xl xl:max-w-6xl mx-auto ">
      <div className="lg:relative lg:mt-8 ">
        <div className="flex">
          <div className="p-5">
            <img
              src="https://yt3.ggpht.com/ytc/AKedOLTT7rvwoyRkEkSKmjmL82frX25GBITtG3QlA43L5Ck=s800-c-k-c0x00ffffff-no-rj"
              alt=""
              className="w-20 h-20 rounded-full border p-[2px] cursor-pointer lg:w-48 lg:h-48"
            />
          </div>

          <div className="flex flex-col lg:ml-11 lg:flex-row">
            <div className="mt-5 flex flex-row ">
              <p className="text-xl lg:text-3xl">galfre.v</p>
              <CogIcon className="w-5 h-5 mt-[5px] ml-4 lg:w-7 lg:h-7 " />
            </div>
            <button className="mt-2 border border-gray-400 rounded-md text-xs lg:text-lg text-gray-400 px-10 py-1 lg:h-10 lg:ml-4 lg:mt-5">
              Edit profile
            </button>
          </div>
        </div>

        <div className="px-5 text-xs lg:text-base lg:absolute lg:top-[80px] lg:left-64">
          <div className="flex space-x-4 ">
            <p> <strong>3</strong> pictures </p>
            <p> <strong>246</strong> followers </p>
            <p> <strong>42</strong> following</p>
          </div>

          <div className="mt-6" >
            <p className="font-semibold">Valentin Galfre 😎</p>
            <p className="text-gray-400 mt-1">Personal blog</p>
            <p>Welcome to my instagram clone profile!!</p>
            <p>Follow me!</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProfileTop;
