import React from 'react'
import Image from 'next/image';

interface Props{
    theme:String;
    imgPath:string;
    name:string;
    description:String
}

function Card(props:Props){
    

    return (
        <div className={` p-3 w-64 h-56 rounded-2xl ${props.theme}`}>
            <div className='mb-3 h-2/3 overflow-hidden rounded-2xl'>
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


export default function page() {
  return (
    <div className="px-24 py-16 bg-[#F5F5F5] w-full">
        <div className='mb-20'>
            <h1 className='text-2xl font-bold'>Cocktail</h1>
            <div className='overflow-x-scroll flex scroll-smooth mt-5'>
                <div className='flex flex-nowrap gap-10'>
                    <Card theme={"bg-gradient-to-b from-[#5E1675] to-[#B9E6E2]"} name={"Classic Mojito"} description={"Description"} imgPath='/mojito.jpg'></Card>
                    <Card theme={"bg-gradient-to-b from-[#B029DB] to-[#EE9322]"} name={"Old Fashioned"} description={"Description"}imgPath='/mojito.jpg'></Card>
                    <Card theme={"bg-gradient-to-b from-[#FFD23F] to-[#219C90]"} name={"Margarita"} description={"Description"}imgPath='/mojito.jpg'></Card>
                    <Card theme={"bg-gradient-to-b from-[#B9E6E2] to-[#FF3A3A]"} name={"Pina Colada"} description={"Description"}imgPath='/mojito.jpg'></Card>
                    <Card theme={"bg-gradient-to-b from-[#3C42D1] to-[#D01F1F]"} name={"Sex on The Beach"} description={"Description"}imgPath='/mojito.jpg'></Card>
                    
                </div>
            </div>
        </div>
        <div>
            <h1 className='text-2xl font-bold'>Wine</h1>
            <div className='overflow-x-scroll flex scroll-smooth mt-5'>
                <div className='flex flex-nowrap gap-10'>
                    <Card theme={"bg-gradient-to-b from-[#FF3A3A] to-[#3C42D1]"} name={"Merlot"} description={"Description"}imgPath='/mojito.jpg'></Card>
                    <Card theme={"bg-gradient-to-b from-[#FFD23F] to-[#EE4269]"} name={"Sauvignon Blanc"} description={"Description"}imgPath='/mojito.jpg'></Card>
                    <Card theme={"bg-gradient-to-b from-[#EE4266] to-[#5E1675]"} name={"France Rose'"} description={"Description"}imgPath='/mojito.jpg'></Card>
                    <Card theme={"bg-gradient-to-b from-[#FFF3CC] to-[#EE9322]"} name={"Champagne Problem"} description={"Description"}imgPath='/mojito.jpg'></Card>
                    <Card theme={"bg-gradient-to-b from-[#337357] to-[#FFD23F]"} name={"Madeira"} description={"Description"}imgPath='/mojito.jpg'></Card>
                </div>
            </div>
        </div>



    </div>
  )
}
