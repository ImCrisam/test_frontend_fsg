import React, { useEffect, useState } from "react";

import {
  loginApi,
  countriesApi,
  country,
  state,
  stateApiByCountry,
} from "../services";

const useCountryState = () => {
  const [auth, setAuth] = useState<string>("");
  const [countries, setCountries] = useState<country[]>([]);
  const [states, setStates] = useState<state[]>([]);

  const [currentCountry, setCurrentCountry] = useState<string>("");

  useEffect(() => {
    loginApi().then((key) => {
      setAuth(key.auth_token);
    });
  }, []);

  useEffect(() => {
    if (!auth) return;
    countriesApi(auth).then((data: country[]) => {
      setCountries([...data]);
    });
  }, [auth]);

  useEffect(() => {
    if (!currentCountry) return;
    stateApiByCountry(auth, currentCountry).then((data: state[]) => {
      setStates([...data]);
    });
  }, [currentCountry]);

  return {
    countries,
    states,
    setCurrentCountry,
  };
};

export default useCountryState;
