import Link from "next/link";

function login() {
  return (
    <div>
      <div className="flex justify-center items-center w-screen h-screen flex-col">
        <img className="w-24" src="https://links.papareact.com/ocw" alt="" />

        <Link href="/">
          <button className="mt-4 bg-blue-400 px-8 py-3 rounded-md text-white">
            Sign into Instagram
          </button>
        </Link>
        <div className="text-xs text-gray-400 text-center absolute bottom-5" >
          <p>This is an Instagram UI Clone built with NextJS + TailwindCSS </p>
          <p>Made for educational purposes</p>
          <p>Follow me on the <a className="text-blue-400" href="https://instagram.com/galfre.v" target="_blank" rel="noreferrer">real instagram</a> </p>
        </div>
      </div>
    </div>
  );
}

export default login;
