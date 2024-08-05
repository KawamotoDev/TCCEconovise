"use client"
import React, { useEffect } from 'react'
import Image from "next/image";
import {LayoutGrid,PiggyBank,ReceiptText,ShieldCheck} from 'lucide-react'
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
function SideNav() {
    const menuList=[
        {
            id:1,
            name:'Dashboard',
            icon:LayoutGrid,
            path:'/dashboard'
        },
        {
            id:2,
            name:'Orçamentos',
            icon:PiggyBank,
            path:'/dashboard/budgets'

        },
        {
            id:3,
            name:'Gastos',
            icon:ReceiptText,
            path:'/dashboard/expenses'

        },
    ]
    const path=usePathname();

    useEffect(()=>{
        console.log(path)
    },[path])
  return (
    <div className='h-screen p-5 border shadow-sm'>
        <Image src={'/econo.svg'}
        alt='logo'
        width={200}
        height={100}
        />
        <div className='mt-5'>
            {menuList.map((menu,index)=>(
                <Link href={menu.path} key={index}>
                    <h2 className={`flex gap-2 items-center
                    text-gray-500 font-medium
                    mb-2
                    p-5 cursor-pointer rounded-md
                    hover:text-primary hover:bg-slate-200
                    ${path==menu.path&&'text-primary bg-slate-200'}
                    `}>
                        <menu.icon/>
                        {menu.name}
                    </h2>
                </Link>
            ))}
        </div>
            <div className='fixed bottom-10 p-5 flex gap-2
            items-center'>
                <UserButton/>
                Meu perfil
            </div>
    </div>
  )
}

export default SideNav