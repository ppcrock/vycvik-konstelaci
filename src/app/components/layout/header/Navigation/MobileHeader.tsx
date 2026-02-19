'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '@iconify/react';

interface LinkItem {
    label?: string;
    href?: string;
    name?: string;
    url?: string;
}

interface SubmenuGroup {
    label: string;
    type: 'group';
    links: LinkItem[];
}

interface MenuItem {
    label: string;
    href: string;
    submenu?: SubmenuGroup[];
}

interface MobileHeaderProps {
    item: MenuItem;
    onNavigate: () => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ item, onNavigate }) => {
    const [open, setOpen] = useState(false);

    const hasSubmenu = !!item.submenu;

    const toggleSubmenu = () => setOpen(prev => !prev);

    return (
        <li className="w-full">
            {hasSubmenu ? (
                <div className="flex flex-col w-full">
                    <button
                        onClick={toggleSubmenu}
                        className="flex justify-between items-center w-full rounded-md p-2 px-4 text-black dark:text-white text-base font-medium transition-all"
                    >
                        {item.label}
                        <Icon
                            icon={open ? 'mdi:chevron-up' : 'mdi:chevron-down'}
                            className="text-xl"
                        />
                    </button>

                    {open && (
                        <div className="mt-1 pl-8 flex flex-col gap-3">
                            {item.submenu?.map((group, i) => (
                                <div key={i}>
                                    <p className="text-sm font-semibold text-dark/60 dark:text-white/60 pb-1 mb-1 border-b border-dark/10 dark:border-white/10">
                                        {group.label}
                                    </p>
                                    <ul className="flex flex-col gap-1">
                                        {group.links.map((link, j) => {
                                            const label = link.label || link.name;
                                            const href = link.href || link.url || '#';
                                            return (
                                                <li key={j}>
                                                    <Link
                                                        href={href}
                                                        onClick={onNavigate}
                                                        className="text-sm text-dark hover:text-opacity-60 dark:text-white dark:hover:text-opacity-60"
                                                    >
                                                        {label}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <Link
                    href={item.href}
                    onClick={onNavigate}
                    className="block w-full rounded-md p-2 px-4 text-black hover:text-opacity-60 dark:text-white dark:hover:text-opacity-60 text-base font-medium transition-colors duration-150 ease-in-out"
                >
                    {item.label}
                </Link>
            )}
        </li>
    );
};

export default MobileHeader;
