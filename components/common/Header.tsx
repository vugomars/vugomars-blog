import { Menus } from "contants/Menu";
import Link from "next/link";
import SwitchLogo from "./SwitchLogo";
import SwitchThemeButton from "./SwitchThemeButton";
import { Bars3Icon } from "@heroicons/react/24/solid";
import ConnectButton from "./ConnectButton";

function Header() {
  return (
    <header className="sticker top-0 z-10">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-center max-w-[1440px] mx-auto py-4 justify-between px-2 lg:px-0">
        <Link href="/">
          <SwitchLogo />
        </Link>
        <div className="items-center justify-center hidden lg:flex space-x-4 divide-x divide-gray-700">
          {Menus.map((menu, i) => (
            <Link href="#" key={i} className="flex items-center pl-3">
              <ul className="uppercase tracking-widest relative group cursor-pointer ">
                <li className="font-light text-center">{menu}</li>
                <div className="absolute w-full h-0.5 bg-gray-700  dark:bg-white/80 scale-x-0 group-hover:scale-x-100 transition-transform" />
              </ul>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-end space-x-2 ">
          <SwitchThemeButton />
          <ConnectButton />
          <Bars3Icon className="w-8 h-8 flex md:hidden" />
        </div>
      </div>
    </header>
  );
}

export default Header;
