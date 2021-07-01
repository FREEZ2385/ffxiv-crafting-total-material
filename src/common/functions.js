export const calculateCraftingListInRecipe = (recipeData, crystalData) => {
  const resultData = {
    materialData: {},
    crystal: crystalData,
    anotherRecipeData: [],
  };
  if (recipeData.length === 0) return resultData;
  // material level 1
  for (const recipe of recipeData) {
    for (let num = 0; num < 9; num++) {
      if (recipe[`amount_ingredient${num}`] !== 0) {
        const itemdata = {
          amount: Math.ceil(
            (recipe[`amount_ingredient${num}`] * recipe.ea) /
              recipe[`amount_result`]
          ),
          info: recipe[`item_ingredient${num}`],
          checked: false,
        };
        if (recipe[`item_ingredient_recipe${num}`][0]['id'])
          resultData.anotherRecipeData.push({
            recipe: recipe[`item_ingredient_recipe${num}`][0]['id'],
            ea: itemdata.amount,
          });
        if (num >= 8) {
          const crystalData = {
            amount: recipe[`amount_ingredient${num}`] * recipe.ea,
            info: recipe[`item_ingredient${num}`],
            checked: false,
          };
          if (resultData.crystal[crystalData.info.name]) {
            resultData.crystal[crystalData.info.name].amount +=
              crystalData.amount;
          } else resultData.crystal[crystalData.info.name] = crystalData;
        } else {
          if (resultData.materialData[itemdata.info.name]) {
            resultData.materialData[itemdata.info.name].amount +=
              itemdata.amount;
          } else resultData.materialData[itemdata.info.name] = itemdata;
        }
      }
    }
  }

  // eslint-disable-next-line no-undef
  resultData.anotherRecipeData = [...new Set(resultData.anotherRecipeData)];

  // material level 2

  return resultData;
};

export function moveDuplicatingRecipeInRecipe(levelLowData, levelHighData) {
  for (const itemname in levelLowData) {
    if (levelHighData[itemname]) {
      levelHighData[itemname].amount += levelLowData[itemname].amount;
      delete levelLowData[itemname];
    }
  }
}
