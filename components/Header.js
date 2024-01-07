// Import necessary modules
import Image from 'next/image';
import Link from 'next/link';
import Socials from '../components/Socials';

// Define the Header component
const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className='container mx-auto overflow-y-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-2 py-4'>
          {/* Logo */}
          <Link href={'/'}>
            <div className="logo-container">
              <Image 
                src={'/logo-removebg-preview.png'} 
                width={270} 
                height={40}
                alt=''
                priority={true}
                className='logo-image'
              />
            </div>
          </Link>
          <div className="hidden lg:block">
          {/* Socials */}
          <Socials />
          </div>
        </div>
      </div>
      <style jsx>{`
        .logo-container {
          margin-top: 150px;
        }
        @media (max-width: 1267px) {
          .logo-container {
            margin-top: 0;
          }
        }
        @media (max-width: 767px) {
          .logo-container {
            margin-top: 0;
          }
          .hidden {
            display: none;
          }
          
        }
        @media (max-width: 600px) {
          .logo-container {
            margin-top: 0;
          }
          .hidden {
            display: none;
          }
          .
        }
      `}</style>
    </header>
  );
};

export default Header;
