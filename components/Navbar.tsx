// NavBar.tsx

import Link from "next/link";
import Image from "next/image";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>

      <Link href='/signin'>
        <div className='text-primary-blue rounded-full bg-white min-w-[130px] flex justify-center items-center px-4 py-2'>
          Sign In
        </div>
      </Link>
    </nav>
  </header>
);

export default NavBar;

