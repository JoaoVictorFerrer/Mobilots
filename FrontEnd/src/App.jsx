import { useEffect, useState } from "react";
import { getCitiesApi, getHourApi } from "./Api/services";

function App() {
  const [cities, setCities] = useState([]);
  const [selectCity, setSelectCity] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  console.log(currentTime)
  useEffect(() => {
    const getCities = async () => {
      const citiesApi = await getCitiesApi();
      if (citiesApi) setCities(citiesApi);
    };
    getCities();
  }, []);

  const handleChangeSelect = (e) => {
    const city = e.target.value;
    setSelectCity(city);
    const getHourCity = async () => {
      const hour = await getHourApi(city);
      setCurrentTime(hour);
    };
    getHourCity();
  };

  return (
    <>
      <div className="fixed w-full text-8xl font-bold text-center p-6 text-gray-700">
        Mobilots - Test
      </div>

      <div className=" flex h-screen justify-center items-center">
        <div className="flex flex-col justify-center items-center  bg-white p-8 rounded shadow-lg">
          {!Array.isArray(cities) || cities.length === 0 ? (
            <p className="text-red-300 font-bold">
              Hubo un error en la Api vuelve cargar
            </p>
          ) : (
            <>
              <h2 className="text-2xl mb-4">Selecciona una ciudad:</h2>
              <select
                className="border px-4 py-2 rounded"
                value={selectCity}
                onChange={handleChangeSelect}
              >
                <option value="">-- Elige una ciudad --</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </>
          )}

          {currentTime && (
            <div className="flex flex-col justify-center items-center mt-4 bg-gray-200 p-2 rounded-lg shadow-2xl">
              <p>
                Hora actual en <span className="font-bold">{selectCity}</span>:
              </p>
              <p>{currentTime}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
