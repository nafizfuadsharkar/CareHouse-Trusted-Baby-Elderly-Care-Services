import Link from 'next/link';
import React from 'react';

const DashboardSidebar = () => {
    return (
        <div className='w-[200px] bg-purple-200 text-black h-screen px-3 py-4 fixed top-0 left-0'>
            <Link href={'/'}>Care House</Link>
            <div className='flex flex-col gap-2 mt-7'>
                <Link href={"/dashboard/profile"}>Profile</Link>
                <Link href={"/dashboard/my-bookings"}>My Booking</Link>
            </div>
        </div>
    );
};

export default DashboardSidebar;