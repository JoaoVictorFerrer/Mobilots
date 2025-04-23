import { formatHour } from "../helper/formatHour.js";

export class HourCityController {

    static getHour = async (req, res) => {
        const {city} = req.body
        const urlHour = `http://worldtimeapi.org/api/timezone/Europe/${city}`;
        try {
          const response = await fetch(urlHour);
          if (!response.ok) {
            return res.status(404).send("Hora no encontradas");
          }
          const hour = await response.json();
          
          res.status(200).json(formatHour(hour.datetime));
        } catch (error) {
          res.status(500).send('la api es inestable vuelve a cargar');
        }
      }
}