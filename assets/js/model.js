const languageFolder = "./assets/lang/";

export const readJsonData = async function (path, language) {
  const dataFile = `${path}${language}.json`;
  try {
    const response = await fetch(dataFile);

    if (!response.ok) {
      throw new Error(
        `Ошибка получения данных, отсутствует запрошеный языковый пакет`
      );
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const getData = async function (language) {
  return await readJsonData(languageFolder, language);
};
