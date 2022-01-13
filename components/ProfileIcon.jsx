import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  BookmarkIcon,
  CogIcon,
  SwitchHorizontalIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

export default function ProfileIcon() {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div className="transform w-8 translate-y-1">
          <Menu.Button>
            <img
              src="https://yt3.ggpht.com/ytc/AKedOLTT7rvwoyRkEkSKmjmL82frX25GBITtG3QlA43L5Ck=s800-c-k-c0x00ffffff-no-rj"
              alt="Profile pic"
              className="h-8 rounded-full cursor-pointer object-cover"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="">
              <Link href="/profile/galfre.v">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-50" : "text-gray-900"
                      } group flex items-center w-full px-2 py-2 text-xs`}
                    >
                      {active ? (
                        <UserCircleIcon
                          className="w-5 h-5 mr-2.5"
                          aria-hidden="true"
                        />
                      ) : (
                        <UserCircleIcon
                          className="w-5 h-5 mr-2.5"
                          aria-hidden="true"
                        />
                      )}
                      Edit
                    </button>
                  )}
                </Menu.Item>
              </Link>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-50" : "text-gray-900"
                    } group flex items-center w-full px-2 py-2 text-xs`}
                  >
                    {active ? (
                      <BookmarkIcon
                        className="w-5 h-5 mr-2.5"
                        aria-hidden="true"
                      />
                    ) : (
                      <BookmarkIcon
                        className="w-5 h-5 mr-2.5"
                        aria-hidden="true"
                      />
                    )}
                    Saves
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-50" : "text-gray-900"
                    } group flex items-center w-full px-2 py-2 text-xs`}
                  >
                    {active ? (
                      <CogIcon className="w-5 h-5 mr-2.5" aria-hidden="true" />
                    ) : (
                      <CogIcon className="w-5 h-5 mr-2.5" aria-hidden="true" />
                    )}
                    Settings
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-50" : "text-gray-900"
                    } group flex items-center w-full px-2 py-2 text-xs`}
                  >
                    {active ? (
                      <SwitchHorizontalIcon
                        className="w-4 h-4 mr-2.5"
                        aria-hidden="true"
                      />
                    ) : (
                      <SwitchHorizontalIcon
                        className="w-4 h-4 mr-2.5"
                        aria-hidden="true"
                      />
                    )}
                    Change account
                  </button>
                )}
              </Menu.Item>
            </div>

            <div className="">
              <Link href="/login">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-50" : "text-gray-900"
                      }  group flex items-center w-full px-3 py-2 text-xs`}
                    >
                      Log out
                    </button>
                  )}
                </Menu.Item>
              </Link>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
