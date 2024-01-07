// links
import Link from 'next/link';

//icons
import {
  RiLinkedinBoxLine, 
  RiInstagramLine, 
  RiFacebookBoxLine, 
  RiTwitterFill, 
  RiGithubLine, 
  RiYoutubeLine
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg '>
      <Link href={'https://www.linkedin.com/in/usm003/'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinBoxLine />
      </Link>
      <Link href={'https://www.instagram.com/shadow.senpai.1108/'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.facebook.com/udaysankar.mukherjee.319/'} className="hover:text-accent transition-all duration-300">
        <RiFacebookBoxLine/>
      </Link>
      <Link href={'https://twitter.com/F2Uday'} className="hover:text-accent transition-all duration-300">
        <RiTwitterFill />
      </Link>
      <Link href={'https://github.com/UdaySMukherjee'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={'https://www.youtube.com/channel/UCfEboeu1CzRO-1pmRa7ETsA'} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
    </div>
  );
};

export default Socials;
