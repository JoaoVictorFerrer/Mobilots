import { formatText } from "../helper/formatText.js";

export class CitiesController {

    static getCities = async (req, res) => {
        const urlCities = "http://worldtimeapi.org/api/timezone/Europe ";
        try {
          const response = await fetch(urlCities);
          if (!response.ok) {
            return res.status(404).send("Ciudades no encontradas");
          }
          const cities = await response.json();
          res.status(200).json(formatText(cities));
        } catch (error) {
          res.status(500).json({ error: "Hubo un error" });
        }
      }
}