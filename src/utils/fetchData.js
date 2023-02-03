import axios from "axios";

const URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    // "X-RapidAPI-Key": "12a0cf228emsha08113ec4981a4bp1c5bb4jsn3257c9bad288",
    "X-RapidAPI-Key": "f45682ebdcmsh03cb86adc0e8f8cp11d3dfjsn46832adf6556",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (params) => {
  const { data } = await axios.get(`${URL}/${params}`, options);

  return data;
};
