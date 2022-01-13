import Link from "next/link";

function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <Link href="/profile/galfre.v">
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLTT7rvwoyRkEkSKmjmL82frX25GBITtG3QlA43L5Ck=s800-c-k-c0x00ffffff-no-rj"
          alt=""
          className="w-16 h-16 rounded-full border p-[2px] cursor-pointer "
        />
      </Link>

      <div className="flex-1 mx-4">
        <h2 className="font-semibold">Galfre.v</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <Link href="/login">
        <button href className="text-blue-400 text-sm">
          Sign out
        </button>
      </Link>
    </div>
  );
}

export default MiniProfile;
