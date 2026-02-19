import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
    return (
        <Link href="/" className='w-fit inline-block'>
            <Image
                src="/images/logo/logo.svg"
                alt="logo"
                width={117}
                height={34}
                style={{ width: 'auto', height: 'auto' }}
                quality={100}
                priority={true}
                className='dark:hidden block'
            />
            <Image
                src="/images/logo/DarkModeLogo.svg"
                alt="logo"
                width={160}
                height={50}
                style={{ width: 'auto', height: 'auto' }}
                quality={100}
                className='dark:block hidden'
            />
        </Link>
    );
};

export default Logo;
