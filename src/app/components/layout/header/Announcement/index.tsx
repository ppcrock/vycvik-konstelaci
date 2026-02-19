import Link from "next/link";
import { Icon } from '@iconify/react'

const Announcement = () => {
    return (
        <div className="announcement-gradient py-2 px-4 flex gap-3 items-center justify-center whitespace-nowrap overflow-x-auto">

            <p className="text-base text-white">🎉 Big news, we reduced our fees</p>
            <Link href="/pricing" className="flex gap-1 items-center text-white/80 hover:text-white hover:underline">
                Learn more
                <Icon icon='solar:arrow-right-linear' width='20' height='20' />
            </Link>
        </div>
    );
};

export default Announcement;
