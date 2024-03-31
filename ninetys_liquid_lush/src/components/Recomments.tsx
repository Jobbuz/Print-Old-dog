import React from 'react'
import Image from 'next/image';
interface Props {
    theme: String;
    imgPath: string;
    name: string;
    description: String
}

function Card(props: Props) {
    return (
        <div className={` p-3 w-64 h-56 rounded-2xl ${props.theme}`}>
            <div className='mb-3 rounded-2xl h-2/3 overflow-hidden'>
                <Image alt={props.name} src={props.imgPath}
                    width={240}
                    height={100}
                ></Image>
            </div>
            <h1 className="font-bold text-xl">{props.name}</h1>
            <div>{props.description}</div>
        </div>
    )
}
export default function Recomments() {
    return (
        <div className="bg-[#F5F5F5] px-24 py-16 w-full">
            <div className='mb-20'>
                <h1 className='font-bold text-2xl'>Recomment Menu</h1>
                <div className='flex mt-5 overflow-x-scroll scroll-smooth'>
                    <div className='flex flex-nowrap gap-10'>
                        <Card theme={"bg-gradient-to-b from-[#5E1675] to-[#B9E6E2]"} name={"Merlot"} description={"Description"} imgPath='/mojito.jpg'></Card>
                        <Card theme={"bg-gradient-to-b from-[#B029DB] to-[#EE9322]"} name={"Margarita"} description={"Description"} imgPath='/mojito.jpg'></Card>
                        <Card theme={"bg-gradient-to-b from-[#FFD23F] to-[#219C90]"} name={"Sauvignon Blanc"} description={"Description"} imgPath='/mojito.jpg'></Card>
                        <Card theme={"bg-gradient-to-b from-[#B9E6E2] to-[#FF3A3A]"} name={"France Rose"} description={"Description"} imgPath='/mojito.jpg'></Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

