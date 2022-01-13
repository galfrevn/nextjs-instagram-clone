import { ClipboardCheckIcon, SaveAsIcon, VideoCameraIcon, ViewGridIcon } from "@heroicons/react/outline";

function ProfileGrid() {
  return (
    <div className="md:max-w-3xl xl:max-w-6xl mx-auto ">

      <div className="flex justify-center items-center w-full h-10 mt-2" >
        <div className="  flex space-x-5">
          <div className="flex items-center text-sm " >
            <ViewGridIcon className="w-5 h-5 mr-2" />
            <a href="#">Pictures</a>
          </div>
          <div className="flex items-center text-sm text-gray-400" >
            <VideoCameraIcon className="w-5 h-5 mr-2" />
            <a href="#">Reels</a>
          </div>
          <div className="flex items-center text-sm text-gray-400" >
            <SaveAsIcon className="w-5 h-5 mr-2" />
            <a href="#">Saved</a>
          </div>
          <div className="flex items-center text-sm text-gray-400" >
            <ClipboardCheckIcon className="w-5 h-5 mr-2" />
            <a href="#">Pinned</a>
          </div>
        </div>
      </div>
      

      <div className="grid grid-cols-3 lg:gap-y-8 lg:gap-5 gap-2 mt-3 mx-5">
        <div className="text-justify text-sm bg-white xl:w-[340px] xl:h-[340px]  md:h-64 w-auto h-[200px]">
          <img
            className="w-full h-full object-cover "
            src="https://c4.wallpaperflare.com/wallpaper/55/157/309/mountains-cliff-peak-doi-inthanon-wallpaper-preview.jpg"
            alt=""
          />
        </div>
        <div className="text-justify text-sm bg-white xl:w-[340px] xl:h-[340px]  md:h-64 w-auto h-[200px]">
          <img
            className="w-full h-full object-cover "
            src="https://c4.wallpaperflare.com/wallpaper/55/157/309/mountains-cliff-peak-doi-inthanon-wallpaper-preview.jpg"
            alt=""
          />
        </div>
        <div className="text-justify text-sm bg-white xl:w-[340px] xl:h-[340px]  md:h-64 w-auto h-[200px]">
          <img
            className="w-full h-full object-cover "
            src="https://c4.wallpaperflare.com/wallpaper/55/157/309/mountains-cliff-peak-doi-inthanon-wallpaper-preview.jpg"
            alt=""
          />
        </div>
        <div className="text-justify text-sm bg-white xl:w-[340px] xl:h-[340px]  md:h-64 w-auto h-[200px]">
          <img
            className="w-full h-full object-cover "
            src="https://c4.wallpaperflare.com/wallpaper/55/157/309/mountains-cliff-peak-doi-inthanon-wallpaper-preview.jpg"
            alt=""
          />
        </div>
        <div className="text-justify text-sm bg-white xl:w-[340px] xl:h-[340px] md:h-64 w-auto h-[200px]">
          <img
            className="w-full h-full object-cover "
            src="https://c4.wallpaperflare.com/wallpaper/55/157/309/mountains-cliff-peak-doi-inthanon-wallpaper-preview.jpg"
            alt=""
          />
        </div>
        <div className="text-justify text-sm bg-white xl:w-[340px] xl:h-[340px] md:h-64 w-auto h-[200px]">
          <img
            className="w-full h-full object-cover "
            src="https://c4.wallpaperflare.com/wallpaper/55/157/309/mountains-cliff-peak-doi-inthanon-wallpaper-preview.jpg"
            alt=""
          />
        </div>
        <div className="text-justify text-sm bg-white xl:w-[340px] xl:h-[340px] md:h-64 w-auto h-[200px]">
          <img
            className="w-full h-full object-cover "
            src="https://c4.wallpaperflare.com/wallpaper/55/157/309/mountains-cliff-peak-doi-inthanon-wallpaper-preview.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileGrid;
