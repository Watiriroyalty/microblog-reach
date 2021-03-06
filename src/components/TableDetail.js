import React, { useState } from 'react';
import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import Image from '@material-tailwind/react/Image';
import USDC from '../assets/img/USDC.png'
import AlgoLogo from '../assets/img/algo_logo.png';
import Button from '@material-tailwind/react/Button';

export default function TableDetail({ returnInput, header, name, mode }) {

    return (
        <>
            <Card className="mb-8" >
                <h2 className="text-black text-md">{header}</h2>
                <CardBody>
                    <div className="overflow-x-auto">
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                    <th className="px-2  align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                        Assets
                                    </th>
                                    <th className="px-2  align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                        {header === 'Your Supply' ? 'Supplied': 'Gift Pool'}
                                    </th>
                                                                    
                                    
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <div className="flex">
                                            <div className="w-10 h-10 rounded-full border-2 border-white">
                                                <Image
                                                    src={USDC}
                                                    rounded
                                                    alt="..."
                                                />
                                            </div>
                                            <div className="w-13 h-10 mt-1">
                                                <span className="text-sm" >
                                                    USDC
                                                </span>
                                            </div>
                                            

                                        </div>
                                    </th>
                                    <th className=" align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        0.00 USDC
                                        <p className="text-xs">($0.00)</p>
                                    </th>
                                   
                                    

                                    <th className=" align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        {
                                            mode === 'send' ?
                                                    <div className="flex">
                                                        <div className="w-20 h-20 ml-4">
                                                            <Button
                                                                color="transparent"
                                                                className="flex-1 border border-solid border-green-500 py-4  ml-8 rounded-full"
                                                                ripple="dark"
                                                                onClick={() => returnInput(name[0])}
                                                            >
                                                                <span className="text-new-green normal-case text-sm" >
                                                                    {name[0]}
                                                                </span>
                                                            </Button>
                                                        </div>

                                                    </div>
                                                :
                                                <div className="flex">

                                                    <div className="w-20 h-20 ml-4">
                                                        <Button
                                                            color="transparent"
                                                            className="flex-1 border border-solid border-purple-500 py-4  ml-8 rounded-full"
                                                            ripple="dark"
                                                            onClick={() => returnInput(name[0])}
                                                        >
                                                            <span className="text-new-purple normal-case text-sm" >
                                                                {name[0]}
                                                            </span>
                                                        </Button>
                                                    </div>

                                                </div>
                                        }
                                    </th>
                                </tr>

                                <tr>
                                    <th className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <div className="flex">
                                            <div className="w-10 h-10 rounded-full border-2 border-white">
                                                <Image
                                                    src={AlgoLogo}
                                                    rounded
                                                    alt="..."
                                                />
                                            </div>
                                            <div className="w-13 h-10 mt-1">
                                                <span className="text-sm" >
                                                    Algo
                                                </span>
                                            </div>
                                            

                                        </div>
                                    </th>
                                    <th className=" align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        0.00 ALGO
                                        <p className="text-xs">($0.00)</p>
                                    </th>
                                   
                                    

                                    <th className=" align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        {
                                            mode === 'send' ?
                                                    <div className="flex">
                                                        <div className="w-20 h-20 ml-4">
                                                            <Button
                                                                color="transparent"
                                                                className="flex-1 border border-solid border-green-500 py-4  ml-8 rounded-full"
                                                                ripple="dark"
                                                                onClick={() => returnInput(name[0])}
                                                            >
                                                                <span className="text-new-green normal-case text-sm" >
                                                                    {name[0]}
                                                                </span>
                                                            </Button>
                                                        </div>

                                                    </div>
                                                :
                                                <div className="flex">

                                                    <div className="w-20 h-20 ml-4">
                                                        <Button
                                                            color="transparent"
                                                            className="flex-1 border border-solid border-purple-500 py-4  ml-8 rounded-full"
                                                            ripple="dark"
                                                            onClick={() => returnInput(name[0])}
                                                        >
                                                            <span className="text-new-purple normal-case text-sm" >
                                                                {name[0]}
                                                            </span>
                                                        </Button>
                                                    </div>

                                                </div>
                                        }
                                    </th>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </CardBody>
            </Card>
        </>
    )

}