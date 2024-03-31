import React from 'react';
import Image from 'next/image';
const text1 = "Our story"
const text2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu dictum ipsum. Phasellus aliquet, nisl eget faucibus iaculis, orci velit malesuada dolor, eget bibendum massa nulla sed mi. Donec molestie euismod eros id pretium. Morbi in leo vel augue volutpat tempus. Pellentesque interdum, est ac consectetur consequat, velit sem vestibulum tellus, sed consequat sapien lorem ac elit. Maecenas aliquam odio a eros vehicula feugiat. Quisque molestie finibus justo id tempus. Etiam tristique et turpis eu porttitor. Morbi augue justo, suscipit sit amet quam sit amet, auctor rutrum nulla. In fermentum massa at sapien tristique sodales. Mauris placerat elementuatm elit eu euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas viverra rhoncus erat ac eleifend. Ut eleifend laoreet nibh sed suscipit. Sed commodo ultrices ex non sodales.Vivamus risus mauris, ultricies sed tristique sit amet, pellentesque quis purus. Nam eget eros ac velit porttitor iaculis sed vel erat. Donec a hendrerit neque. Sed in dui non lacus pellentesque dictum ac at nibh. Fusce ut venenatis quam, non faucibus quam. Nunc ultrices urna vel mattis ullamcorper. Ut fermentum blandit hendrerit. Sed sed augue sit amet sem tempor maximus. Pellentesque diam ligula, sollicitudin aliquet ante id, pretium accumsan velit. Pellentesque mauris massa, cursus at sodales nec, tempus id mauris. Quisque urna elit, vulputate vitae augue eu, molestie tincidunt ligula. Vivamus ut volutpat metus."
const text3 = "Napat Niamla-ong"
const text4 = "Founder of 90s liquid lush cocktail bar"

export default function page() {
    return (
        <div>
            <div><Image src={"/aboutus1.png"} height={638} width={1512} className="h-full -full w" alt={''}></Image></div>
            <div className="align-top flex flex-row px-5">
                <div className="w-[70vw]">
                    <h1 className="my-10 text-3xl">{text1}</h1>
                    <p className="text-xl">{text2}</p> </div>
                <div className="my-10 w-[30vw} h- {30vw}">
                    <div><Image src={"/aboutus2.png"} height={294} width={284} className="w-full h-full" alt={''}></Image></div>
                    <div className="text-right mt-20 font-Alata">{text3}</div>
                    <div className="text-right mt-18 font-Alata">{text4}</div> </div>
            </div>

        </div>






    );
}
