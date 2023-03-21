import { useEffect, useState } from "react";
import {
  getCurrentPosition,
  pos,
  getTemperature,
} from "../services/serviceTemperature";

interface GeolocationPositionError {
  code: number;
  message: string;
}
export const useTemperature = (navigator: Navigator) => {
  const [temperature, setTemperature] = useState();
  const [location, setLocation] = useState<pos>();
  const [error, setError] = useState<Error | unknown>(null);

  useEffect(() => {
    async function getLocation() {
      try {
        const currentPosition = await getCurrentPosition(navigator);
        setLocation(currentPosition);
      } catch (error) {
        const e = error as GeolocationPositionError;
        setError(e);
        alert(e?.message);
      }
    }
    getLocation();
  }, [navigator]);

  useEffect(() => {
    async function getTemp() {
      if (!location) return;
      try {
        const currentTemperature = await getTemperature(location);
        setTemperature(currentTemperature);
      } catch (error) {
        setError(error);
      }
    }
    getTemp();
  }, [location]);

  return { temperature, location, error };
};
