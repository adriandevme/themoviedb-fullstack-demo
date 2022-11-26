//Cargo los parametros de entorno necesarios @WARNING validate
const movieDatabaseRootURL: string | undefined =
  process.env.MOVIEDB_API_ROOT_URL;
const movieDatabaseAPIKey: string | undefined = process.env.MOVIEDB_API_KEY;

export const utils = {
  buildTheMovieDBURL: (
    stub: string,
    paramKey?: string,
    paramValue?: string
  ) => {
    const url = new URL(`${movieDatabaseRootURL}${stub}`);
    if (movieDatabaseAPIKey)
      url.searchParams.append("api_key", movieDatabaseAPIKey);
    if (paramKey && paramValue) {
      //let params = new URLSearchParams(url.search);
      url.searchParams.append(paramKey, paramValue);
    }
    console.log(url.toString());
    console.log("-------------------------------");
    return url.toString();
  },
};
