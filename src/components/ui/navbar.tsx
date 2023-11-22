import Image from 'next/image';
import * as React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}
// classname optional added
interface NavbarProps {
  className?: string;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '#', current: true },
  { name: 'About us', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
];

export default function Navbar({ className }: NavbarProps) {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <nav className={`bg-gray-800 ${className || ''}`}>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          {/* Logo on the left side for larger screens */}
          <div className='flex-shrink-0'>
            <Image
              className='h-8 w-auto'
              src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
              alt='ADRIG'
              width={100}
              height={40}
            />
          </div>
          {/* Mobile menu button for smaller screens */}
          <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
            <button
              className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              onClick={handleToggle}
            >
              <span className='sr-only'>Open main menu</span>
              {open ? (
                <FaTimes className='block h-6 w-6' aria-hidden='true' />
              ) : (
                <FaBars className='block h-6 w-6' aria-hidden='true' />
              )}
            </button>
          </div>
          {/* Navigation links for larger screens */}
          <div className='hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-yellow-700 hover:text-black',
                  'rounded-md px-3 py-2 text-sm font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile menu content */}
      <div className={`sm:hidden ${open ? 'block' : 'hidden'}`}>
        <div className='space-y-1 px-2 pb-3 pt-2'>
          <div className='sm:flex sm:items-center sm:space-x-4'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-yellow-700 hover:text-black',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}
