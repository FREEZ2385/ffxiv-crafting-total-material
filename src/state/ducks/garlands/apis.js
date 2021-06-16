import axios from 'axios';

export const testApi = async () => {
  try {
    const response = axios.get(
      `https://www.garlandtools.org/db/doc/equip/ja/2/leveling-drk.json`
    );
    return response;
  } catch (e) {
    return false;
  }
};
