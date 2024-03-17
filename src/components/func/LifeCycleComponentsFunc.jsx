import React, { useEffect } from "react";
import { useState } from "react";
import MemoComponentCount from './MemoComponentCount'

const fetchData = async () => {
    try {
        const resp = await fetch('https://todo-redev.herokuapp.com/api/auth/login', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: 'p9999s@gmail.com', password: 'Velcom2023!' })
        });
        const data = await resp.json();
        console.log(data.token);
    } catch (error) {
        console.error('Ошибка при получении данных:', error)
    }
}




const LifeCycleComponentsFunc = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetchData();

        return () => console.log('ComponentWillUnmount');
    }, [])

    useEffect(() => {
        console.log('Компонент обновился.');
    }, [count]);

    const handlePlus = () => setCount((count) => count + 1);


    return (
        <div>
            <h3>Вторая отрисовка.</h3>
            <MemoComponentCount count={count} />
            <button onClick={handlePlus}> +++ </button>
        </div>
    );

};







export default LifeCycleComponentsFunc;
