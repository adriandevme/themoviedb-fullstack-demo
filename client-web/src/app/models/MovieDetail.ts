export class MovieDetail {
  id?: number;
  title?: string;
  posterPath?: string;
  releaseDate?: string;
  voteAverage?: number;
  //Extra
  overview?: string;
  tagline?: string;
  revenue?: number;
  runtime?: number;
}

// La respuesta por defecto que trae TheMovieDB
// {
//     "adult": false,
//     "backdrop_path": "/2v3pC01rf0uXnECOM94pjfqk1TY.jpg",
//     "belongs_to_collection": {
//         "id": 403374,
//         "name": "Jack Reacher Collection",
//         "poster_path": "/qtafXiYDUMKxzsssU41qWey5oiT.jpg",
//         "backdrop_path": "/vViRXFnSyGJ2fzMbcc5sqTKswcd.jpg"
//     },
//     "budget": 60000000,
//     "genres": [
//         {
//             "id": 80,
//             "name": "Crime"
//         },
//         {
//             "id": 18,
//             "name": "Drama"
//         },
//         {
//             "id": 53,
//             "name": "Thriller"
//         },
//         {
//             "id": 28,
//             "name": "Action"
//         }
//     ],
//     "homepage": "http://www.jackreachermovie.com/",
//     "id": 75780,
//     "imdb_id": "tt0790724",
//     "original_language": "en",
//     "original_title": "Jack Reacher",
//     "overview": "When a gunman takes five lives with six shots, all evidence points to the suspect in custody. On interrogation, the suspect offers up a single note: \"Get Jack Reacher!\" So begins an extraordinary chase for the truth, pitting Jack Reacher against an unexpected enemy, with a skill for violence and a secret to keep.",
//     "popularity": 54.428,
//     "poster_path": "/uQBbjrLVsUibWxNDGA4Czzo8lwz.jpg",
//     "production_companies": [
//         {
//             "id": 4,
//             "logo_path": "/gz66EfNoYPqHTYI4q9UEN4CbHRc.png",
//             "name": "Paramount",
//             "origin_country": "US"
//         },
//         {
//             "id": 21777,
//             "logo_path": null,
//             "name": "TC Productions",
//             "origin_country": "US"
//         },
//         {
//             "id": 82819,
//             "logo_path": "/zlFa3VNua4hJyGEI4X2sqDrtEH9.png",
//             "name": "Skydance Media",
//             "origin_country": "US"
//         },
//         {
//             "id": 117362,
//             "logo_path": null,
//             "name": "Mutual Films",
//             "origin_country": ""
//         },
//         {
//             "id": 128585,
//             "logo_path": null,
//             "name": "H2L Media \"AKA\" Mutual Film Company",
//             "origin_country": ""
//         },
//         {
//             "id": 128586,
//             "logo_path": null,
//             "name": "H2L Media Group",
//             "origin_country": ""
//         }
//     ],
//     "production_countries": [
//         {
//             "iso_3166_1": "US",
//             "name": "United States of America"
//         }
//     ],
//     "release_date": "2012-12-20",
//     "revenue": 218340595,
//     "runtime": 130,
//     "spoken_languages": [
//         {
//             "english_name": "English",
//             "iso_639_1": "en",
//             "name": "English"
//         }
//     ],
//     "status": "Released",
//     "tagline": "The Law Has Limits. He Does Not.",
//     "title": "Jack Reacher",
//     "video": false,
//     "vote_average": 6.577,
//     "vote_count": 6068
// }
