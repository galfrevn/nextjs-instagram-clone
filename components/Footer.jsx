import { ChevronUpIcon } from "@heroicons/react/outline";

function Footer() {
  return (
    <div className="w-screen h-14 flex text-center justify-center items-center mb-10 text-sm text-gray-400" >
      <div className="">
        <ul className="flex space-x-5">
          <li>
            <a href="#">Meta</a>
          </li>
          <li>
            <a href="#">Information</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Conditions</a>
          </li>
          <li>
            <a href="#">Best accounts</a>
          </li>
          <li>
            <a href="#">Hastags</a>
          </li>
          <li>
            <a href="#">Places</a>
          </li>
          <li>
            <a href="#">Instagram Lite</a>
          </li>
        </ul>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center">
            <p className="mt-4">English (UK) </p>
            <ChevronUpIcon className="w-4 h-4 ml-2 transform translate-y-2" />
            <p className="transform translate-y-2 ml-5">
              © 2022 Instagram from Meta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
