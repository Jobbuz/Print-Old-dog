import React from 'react'
import Image from 'next/image'

const MyComponent: React.FC = () => {
    return (
        <div style={{ border: '1px solid black', padding: '10px' }}>

        </div>
    );
};

export default function MainpicHome() {
    return (
        <div className="relative flex justify-center">
            <div className="w-[1512px] h-[578px]">
                <div className="relative">
                    <div className="flex justify-center">
                        <div className="top-[210px] absolute font-bold text-4xl text-white">
                            <h1 className="flex justify-center bg-clip-text bg-gradient-to-r from-[#FFD23F] to-[#D2BBE4] text-transparent">
                                Cocktail Bliss, Sealed with kiss
                            </h1>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="top-[240px] absolute font-bold text-white text-xl">
                            <h1 className="flex justify-center bg-clip-text bg-gradient-to-r from-[#FFD23F] to-[#D2BBE4] text-transparent">
                                Find a partner? You may get one here!
                            </h1>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button className="bottom-48 absolute hover:border-0 bg-transparent hover:bg-gradient-to-r from-[#5E1675] to-[#FFB355] px-4 py-2 border border-red-300 rounded-2xl text-lg text-white"
                        >
                            Find one now!
                        </button>
                    </div>

                    <Image src={"/pichome.png"} alt="pichome" height={578} width={1512} className="w-full h-full"></Image>
                </div>

            </div >
        </div>
    )
}
