'use client';

import React, { useState } from 'react';
import {API_BASE_URL} from "@/app/constants";
import axios from "axios";

const PlaceTrade = () => {
    const [symbol, setSymbol] = useState('');
    const [tradeResults, setTradeResults] = useState([]);
    const [message, setMessage] = useState('');

    const handleSymbolChange = (e) => {
        setSymbol(e.target.value);
    };

    const handleTradeSubmit = async (e) => {
        e.preventDefault();
        setMessage('Placing your trade, please wait...');
        try {
            const response = await axios.post(`${API_BASE_URL}/place_trade/${symbol}`);
            if (response.data.date) {
                response.data.symbol = symbol;
                setTradeResults((prevResults) => [...prevResults, response.data]);
            }
            alert(response.data.return);
            setMessage('');
        } catch (error) {
            setMessage('Error placing trade. Please try again later.');
        } finally {
            setSymbol('');
        }
    };

    return (
        <div>
            <h2 className="text-xl font-bold">Trade Form</h2>
            <form onSubmit={handleTradeSubmit} className="mt-4 space-x-4">
                <input
                    type="text"
                    value={symbol}
                    onChange={handleSymbolChange}
                    placeholder="Enter symbol"
                    className="px-2 py-1 border border-gray-300 rounded-md text-black"
                />
                <button type="submit" className="px-4 py-1 bg-green-500 text-white rounded-md">
                    Buy
                </button>
            </form>

            {message && <p>{message}</p>}

            {tradeResults.length > 0 && (
                <div className="mt-4">
                    <h3 className="mt-12 text-white">Trade Results</h3>
                    <table className="w-full">
                        <thead>
                        <tr>
                            <th className="py-2 border-b-2 border-gray-300 text-white font-bold">Symbol</th>
                            <th className="py-2 border-b-2 border-gray-300 text-white font-bold">Price</th>
                            <th className="py-2 border-b-2 border-gray-300 text-white font-bold">Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tradeResults.map((trade, index) => (
                            <tr key={index}>
                                <td className="py-2 border-b border-gray-300 text-center">{trade.symbol}</td>
                                <td className="py-2 border-b border-gray-300 text-center">{trade.price}</td>
                                <td className="py-2 border-b border-gray-300 text-center">{trade.date}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>

    );
};

export default PlaceTrade;
