import {
  HomeIcon,
  BookOpenIcon,
  InboxStackIcon,
  CodeBracketIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

function MobileNavbar() {
  return (
    <nav className="relative lg:hidden">
      <div className="fixed left-0 bottom-0 flex border-t border-gray-200 dark:border-gray-700 h-14 w-full py-2 items-center justify-between px-4 text-center">
        <Link
          href="#"
          className="text-center items-center flex-col justify-center flex"
        >
          <BookOpenIcon className="w-6 h-6 items-center text-center" />
          <span className="font-light text-[10px] md:text-xs">Projects</span>
        </Link>
        <Link
          href="#"
          className="text-center items-center flex-col justify-center flex"
        >
          <InboxStackIcon className="w-6 h-6 items-center text-center" />
          <span className="font-light text-[10px] md:text-xs">Courses</span>
        </Link>
        <Link
          href="#"
          className="text-center items-center flex-col justify-center flex"
        >
          <HomeIcon className="w-10 h-10 bg-yellow-500 p-1 rounded-full items-center text-center" />
        </Link>
        <Link
          href="#"
          className="text-center items-center flex-col justify-center flex"
        >
          <CodeBracketIcon className="w-6 h-6 items-center text-center" />
          <span className="font-light text-[10px] md:text-xs">Sources</span>
        </Link>
        <Link
          href="#"
          className="text-center items-center flex-col justify-center flex"
        >
          <UserCircleIcon className="w-6 h-6 items-center text-center" />
          <span className="font-light text-[10px] md:text-xs">About Me</span>
        </Link>
      </div>
    </nav>
  );
}

export default MobileNavbar;
