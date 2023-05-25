import {useState, useEffect} from 'react';
import axios from 'axios';
import {API_BASE_URL} from "@/app/constants";

const useNavApi = () => {
    const [navData, setNavData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/navs`);
                const data = response.data;
                const formattedData = Object.keys(data.daily_navs[1]).map(item => {
                    return {x: item, y: data.daily_navs[1][item]};
                });

                setNavData(formattedData.sort((a, b) => new Date(a.x) - new Date(b.x)));
            } catch (error) {
                console.error('Error fetching nav data:', error);
            }
        };

        fetchData();
    }, []);

    return navData;
};

export default useNavApi;
