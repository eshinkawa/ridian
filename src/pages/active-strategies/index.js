import React from 'react';
import arrowup from "../../app/assets/arrowup.svg";
import dots from "../../app/assets/dots.svg";
import arrowleft from "../../app/assets/arrowleft.svg";
import Image from 'next/image';
import {Strategies} from "@/utils/getStrategies";

const ActiveStrategies = () => {
    return (<>
            <h3 className="text-xl font-bold mb-4">Active Strategies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                {Strategies.map((strategy, index) => (
                    <div key={index}
                         className="bg-171618 h-36 rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex-col max-w-[200px] p-1.5 m-1 mb-2">
                        <div className="bg-gray-800 back flex-col items-start p-3">
                            <div className="flex flex-row mb-1">
                                <h2 className="text-xs text-white text-left font-bold">{strategy.name.toUpperCase()}</h2>
                                <div className="mt-0.5 ml-3">
                                    <Image
                                        priority
                                        src={arrowleft}
                                        alt="arrowleft"
                                    />
                                </div>
                            </div>
                            <h1 className="text-2xl text-white text-left font-normal">${strategy.amount.toFixed(2)}</h1>
                        </div>
                        <div className="bg-gray-800 flex flex-row justify-between">
                            <div className="bg-gray-800 flex flex-row items-start p-5 px-3">
                                <Image
                                    priority
                                    src={arrowup}
                                    alt="arrowup"
                                />
                                <div className="text-sm text-[#1FE072] mt-[-4px] ml-1">{strategy.percentage}% 24h</div>
                            </div>
                            <div className="mr-4 flex self-center">
                                <Image
                                    priority
                                    src={dots}
                                    alt="dots"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ActiveStrategies;
