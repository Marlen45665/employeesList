import { useState, useEffect, useMemo } from "react";
import Card from "../Card/Card";
import "./Content.css";

function Content() {
    console.log("рендер Content");

    const [data, setData] = useState([]);
    
    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Ошибка при запросе');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error('Ошибка при запросе:', error);
            });
    };

    useEffect(() => {
        fetchData(); 
        // const intervalId = setInterval(() => {
            fetchData(); 
        // }, 50000);

        return () => {
            // clearInterval(intervalId) // Очистить интервал при размонтировании компонента
        };
    }, []);

    const memoizedCards = useMemo(() => {
        return data.map((item) => <Card key={item.id} data={item}/>);
    }, [data]);

    return (
        <div className="content-wrapper">
            <div className="content-grid">
                {memoizedCards}
            </div>
        </div>
    );
}

export default Content;
