import Link from 'next/link';
import SwitchLogo from './SwitchLogo';
import SwitchThemeButton from './SwitchThemeButton';

function Header() {
  return (
    <header>
      <div className='grid grid-cols-3 items-center'>
        <Link href='/'>
          <SwitchLogo />
        </Link>
        <div>Menu</div>
        <SwitchThemeButton />
      </div>
    </header>
  );
}

export default Header;
