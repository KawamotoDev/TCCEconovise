"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
function Header() {

    const {user, isSignedIn} = useUser();
    return (
        <div className='p-5 flex justify-between items-center border shadow-sm bg-gray-100'>
            <Image src={'./econo.svg'}
            alt='logo'
            width={200}
            height={100}
            />
            {isSignedIn ?
                <UserButton/> : 
                <Link href={'/sign-in'}>
                    <Button>Começar</Button>
                </Link>
            }
        </div>
    )
}

export default Header
