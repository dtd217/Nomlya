'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    return (
        // <Image
        //     alt="Logo"
        //     className="hidden md:block cursor-pointer"
        //     height="100"
        //     width="100"
        //     src="/images/logo.jpg"
        // />
        <div className="text-4xl font-bold hidden md:block cursor-pointer text-blue-700">Nomlya</div>
    );
}

export default Logo;