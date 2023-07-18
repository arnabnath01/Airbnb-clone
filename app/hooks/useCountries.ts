// 1) download word-countries
import countries from "world-countries";

const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

const useContries = () => {
  const getAll = () => formattedCountries;

  const getByValue = (value: string) => {
    //finds the item in the formatteed items
    return formattedCountries.find((item) => item.value === value);
  };

  return {
    getAll,
    getByValue,
  };
};

export default useContries;