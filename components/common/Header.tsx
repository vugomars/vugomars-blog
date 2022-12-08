import { Menus } from 'contants/Menu';
import Link from 'next/link';
import SwitchLogo from './SwitchLogo';
import SwitchThemeButton from './SwitchThemeButton';

function Header() {
  return (
    <header>
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-center max-w-[1440px] mx-auto py-4 justify-between px-2 lg:px-0'>
        <Link href='/'>
          <SwitchLogo />
        </Link>
        <div className='items-center justify-center hidden lg:flex space-x-4'>
          {Menus.map((menu) => (
            <ul>
              <li>{menu}</li>
            </ul>
          ))}
        </div>
        <div className='flex items-center justify-end space-x-2'>
          <SwitchThemeButton />
          <button className='px-4 py-1.5 border-b-2 border-cyan-400 bg-gray-900 transition-all duration-200 cursor-pointer'>
            Connect
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
