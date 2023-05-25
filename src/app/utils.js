const today = new Date();
const currentYear = today.getFullYear();

export const last24HoursData = (navData) => navData.filter(data => {
    const dataDate = new Date(data.x);
    const startDate = new Date(today);
    startDate.setHours(0, 0, 0, 0);
    return dataDate >= startDate;
});

export const sevenDaysData = (navData) => navData.filter(data => {
    const dataDate = new Date(data.x);
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 7);
    startDate.setHours(0, 0, 0, 0);
    return dataDate >= startDate;
});

export const thirtyDaysData = (navData) => navData.filter(data => {
    const dataDate = new Date(data.x);
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 30);
    startDate.setHours(0, 0, 0, 0);
    return dataDate >= startDate;
});

export const ytdData = (navData) => navData.filter(data => {
    const dataYear = new Date(data.x).getFullYear();
    return dataYear === currentYear;
});
