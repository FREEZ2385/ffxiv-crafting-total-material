/* eslint-disable no-useless-catch */
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

export const getItemInfo = async (lang, itemNo) => {
  try {
    if (!lang || !itemNo) {
      throw new Error('Not Required parameters');
    }
    const response = axios.get(
      `https://www.garlandtools.org/db/doc/item/${lang}/3/${itemNo}.json`
    );
    return response;
  } catch (e) {
    throw e;
  }
};
