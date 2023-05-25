'use client';

import React, {useEffect, useState} from 'react';
import {API_BASE_URL} from "@/app/constants";
import axios from "axios";

const Returns = () => {
    const [symbols, setSymbols] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTopSymbols = async () => {
            try {
                let returns = {}
                const {data: {top_10}} = await axios.get(`${API_BASE_URL}/top_10`);

                await axios.all(top_10.map(async (symbol) => {
                    const response = await axios.get(`${API_BASE_URL}/return_${symbol}`);

                    returns[symbol] = response.data.return;
                }));
                setLoading(false)
                setSymbols(returns);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchTopSymbols();
    }, []);

    if (loading) return <><h2>Top 10 Symbols</h2><h3>Loading symbols, please wait...</h3></>

    return (<div className="h-screen text-white">
            <h2 className="text-2xl font-bold mb-4">Returns</h2>
            <table className="w-full">
                <thead>
                <tr>
                    <th className="text-left">Symbol</th>
                    <th className="text-left">Price</th>
                </tr>
                </thead>
                <tbody>
                {Object.keys(symbols).map((symbolData) => (
                    <tr key={symbolData}>
                        <td className="py-2 border-b-2 text-left">{symbolData}</td>
                        <td className="py-2 border-b-2 text-left">{symbols[symbolData]}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>);
};

export default Returns;
