import Link from 'next/link';

interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
    return (
        <Link
            href="/"
            className="text-xl font-semibold text-dark dark:text-white hover:opacity-80 transition-opacity"
        >
            Výcvik konstelací
        </Link>
    );
};

export default Logo;
