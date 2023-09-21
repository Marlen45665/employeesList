export const fetchData = async (url, setFunc) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Ошибка при запросе');
        }
        const data = await response.json();
        setFunc(data);
    } catch (error) {
        console.error('Ошибка при запросе:', error);
    }
};