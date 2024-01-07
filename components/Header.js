//next Image
import Image from 'next/image';

//next link
import Link from 'next/link';

//components
import Socials from '../components/Socials';

const Header = () => {
  return (
  <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
        {/*logo */}
        <Link href={'/'}>
        <div className="logo-container">
          <Image 
            src={'/logo-removebg-preview.png'} 
            width={300} 
            height={80}
            alt=''
            priority={true}
            className='logo-image'
          />
          </div>
        </Link>
        {/*Socials */}
          <Socials/>
      </div>
    </div>
    <style jsx>{`
        .logo-container {
          margin-top: 150px;
        },
        @media (max-width: 1267px) {
          .logo-container {
            margin-top: 0;
          }
        }
        @media (max-width: 967px) {
          .logo-container {
            margin-top: 0;
          }
        }
        @media (max-width: 767px) {
          .logo-container {
            margin-top: 0;
          }
        }
      `}</style>
  </header>
  );
};

export default Header;
