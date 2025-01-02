import "./current-weather.css";

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="City">Belgrade</p>
                    <p className="weather_description">Sunny</p>
                </div>
                <img alt="weather" className="weather-icon" src="Icons/01d.png" />
            </div>

            <div className="bottom">
                <p className="temperature">18°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-label">22</span>

                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-label">2 m/s</span>

                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-label">50%</span>

                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-label">15 hpa</span>

                    </div>


                </div>

            </div>
        </div>
    );
}

export default CurrentWeather;