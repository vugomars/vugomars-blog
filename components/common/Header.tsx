import { Menus } from "contants/Menu";
import Link from "next/link";
import SwitchLogo from "./SwitchLogo";
import SwitchThemeButton from "./SwitchThemeButton";
import { Bars3Icon } from "@heroicons/react/24/solid";
import ConnectButton from "./ConnectButton";
import TopNavbar from "./TopNavbar";

function Header() {
  return (
    <header className="sticker top-0 z-10">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-center max-w-[1440px] mx-auto py-4 justify-between px-2 lg:px-0">
        <Link href="/">
          <SwitchLogo />
        </Link>
        <TopNavbar />
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
