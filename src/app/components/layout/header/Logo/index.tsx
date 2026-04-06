import Link from 'next/link';
import Image from 'next/image';

const Logo: React.FC = () => {
    return (
        <Link
            href="/"
            className="hover:opacity-80 transition-opacity"
        >
            <Image
                src="/images/logo/vycvik-konstelaci-logo.png"
                alt="Výcvik konstelací"
                width={220}
                height={40}
                className="dark:hidden"
                priority
            />
            <Image
                src="/images/logo/vycvik-konstelaci-logo-white.png"
                alt="Výcvik konstelací"
                width={220}
                height={40}
                className="hidden dark:block"
                priority
            />
        </Link>
    );
};

export default Logo;
