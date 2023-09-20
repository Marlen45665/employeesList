export const fetchData = (url, setFunc) => {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Ошибка при запросе');
            }
            return response.json();
        })
        .then((data) => {
            setFunc(data);
        })
        .catch((error) => {
            console.error('Ошибка при запросе:', error);
        });
};