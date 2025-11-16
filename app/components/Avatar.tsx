'use client';

import Image from "next/image";

const Avatar = () => {
    return (
        <Image
            src="/images/user.jpg"
            alt="Avatar"
            width={30}
            height={30}
            className="rounded-full text-red-200"
        />
    );
}

export default Avatar;