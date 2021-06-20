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

// export const getItemInfo = async (lang, itemNo) => {
//   try {
//     if (!lang || !itemNo) {
//       throw new Error('Not Required parameters');
//     }
//     const response = axios.get(
//       `https://www.garlandtools.org/db/doc/item/${lang}/3/${itemNo}.json`
//     );
//     return response;
//   } catch (e) {
//     throw e;
//   }
// };

export const getLevelingItemInfo = async (lang, jobID, minLv, maxLv) => {
  try {
    if (!lang || !jobID || !minLv || !maxLv) {
      throw new Error('Not Required parameters');
    }
    const response = axios.get(`https://xivapi.com/search`, {
      params: {
        filters: `Recipes.Level>=${minLv},Recipes.Level<=${maxLv},Recipes.ClassJobID=${jobID},ItemKind.ID<7`,
        language: lang,
        sort_field: 'Recipes.Level',
        columns: 'Icon,Name,ID',
        snake_case: '1',
      },
    });
    return response;
  } catch (e) {
    throw e;
  }
};

export const getItemInfo = async (lang, itemNo) => {
  try {
    if (!lang || !itemNo) {
      throw new Error('Not Required parameters');
    }
    const response = axios.get(`https://xivapi.com/item/${itemNo}`, {
      columns:
        'ClassJobUse,Name,Recipes,IconHD,ID,ItemUICategory,LevelEquip,LevelItem',
      language: lang,
    });
    return response;
  } catch (e) {
    throw e;
  }
};
