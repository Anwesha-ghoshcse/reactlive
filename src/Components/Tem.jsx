import React, { useEffect, useState } from "react";
import "./index.css";
const Tem = () => {
    const [city, setcity] = useState();
    const [search, setsearch] = useState("Mumbai");

    useEffect(() => {
        const fetchapi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4940eb5e9aecd0d3fa95a303fe5bc18b`
            const response = await fetch(url);
            const resJson = await response.json();
            setcity(resJson.main);
        }

        fetchapi();
    }, [search])
    return (
        <>
        <div className="main"><h1>Check Weather</h1></div>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        value={search}
                        className="inputField "
                        onChange={(event) => { setsearch(event.target.value) }} />
                </div>
                {!city ? (
                    <p className="errorMsg">No data found</p>
                ) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i class="fa-solid fa-street-view"></i>{search}
                            </h2>
                            <h1 className="temp">{city.temp}°Cel</h1>
                            <h3 className="tempmin-max">Min:{city.temp_min}°cel | Max {city.temp_max}°cel</h3>
                        </div>
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </div>

                )}

            </div>
        </>
    )
}
export default Tem;