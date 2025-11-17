'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();
    
    return (
        <div className="text-4xl font-bold hidden md:block cursor-pointer text-rose-500">Nomlya</div>
    );
}

export default Logo;