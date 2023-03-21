export interface pos {
  lat: string;
  lon: string;
}
export async function getCurrentPosition(navigator: Navigator) {
  return new Promise<pos>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude + "",
          lon: position.coords.longitude + "",
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
}

export async function getTemperature(location: pos) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=1f6f46916250fbc1fb80808e2aa5cc7d`
    );
    const data = await response.json();
    return data.main.temp;
  } catch (error) {
    console.error(error);
  }
}
