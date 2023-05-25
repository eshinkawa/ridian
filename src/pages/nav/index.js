'use client';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Line} from "react-chartjs-2";
import {last24HoursData, sevenDaysData, thirtyDaysData, ytdData} from "@/app/utils";
import useNavApi from "@/app/hooks/useNavApi";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
import styles from './styles.module.css';

const Nav = () => {

    const navData= useNavApi();

    const datasets = [
        {label: 'Last 24 Hours', data: last24HoursData(navData)},
        {label: 'Last 7 Days', data: sevenDaysData(navData)},
        {label: 'Last 30 Days', data: thirtyDaysData(navData)},
        {label: 'YTD', data: ytdData(navData)}
    ];

    const chartData = {
        labels: navData.map(data => data.x),
        datasets: datasets.map(dataset => ({
            label: dataset.label,
            data: dataset.data.map(data => data.y),
            fill: false,
            borderColor: getRandomColor(),
            tension: 0.4
        }))
    };

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return <section className={styles.container}><Line  data={chartData}/></section>;


};

export default Nav;
