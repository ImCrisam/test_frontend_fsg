export interface country {
  country_name: string;
  country_phone_code: number;
  country_short_name: string;
}

export interface state {
  state_name: string;
}

export async function loginApi() {
  try {
    const response = await fetch(
      "https://www.universal-tutorial.com/api/getaccesstoken",
      {
        headers: {
          Accept: "application/json",
          "api-token":
            "u1wX5YwuI4V5Z7h0WekWtUMC4VH5b2OMh3h-HQUqlnKxGApu25bEz1EBFk9jIRcpApo",
          "user-email": "em43rtz@bentsgolf.com",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function countriesApi(auth: string) {
  try {
    const response = await fetch(
      "https://www.universal-tutorial.com/api/countries/",
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + auth,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function stateApiByCountry(auth: string, country: string) {
  try {
    const response = await fetch(
      "https://www.universal-tutorial.com/api/states/" + country,
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + auth,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
