import Card from "../Card/Card";
import { useState, useEffect, useMemo } from "react";
import { fetchData } from "../servise/fetchData";
import "./Content.css";


function Content() {

    const [data, setData] = useState([]);
    const URL = "https://jsonplaceholder.typicode.com/users"

    useEffect(() => {
        fetchData(URL, setData); 

        //РАСКОМЕНТИРУЙТЕ КОД НИЖЕ ЧТОБ ПОЛУЧИТЬ ОБНОВЛЕНИЕ ДАННЫХ КАЖДЫЕ 5 СЕКУНД 
        //-------------------------------------------

        // const intervalId = setInterval(() => {
        //     fetchData(URL, setData); 
        // }, 5000);

        // return () => {
        //     clearInterval(intervalId) 
        // };
        
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
