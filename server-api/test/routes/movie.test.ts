import { test } from "tap";
//import { IMovieDetail } from "../../src/interfaces";
//import { IMovieDetail } from "../../src/interfaces";
import { build } from "../helper";

import movieDetailMock from "../_mocks/movieDetail447404.mock";
import moviePreviewsMock from "../_mocks/moviePreviewsJackReacher.mock";

test("movie/447404 carga correctamente", async (t) => {
  const app = await build(t);
  const res = await app.inject({
    url: "/movie/447404",
  });
  //Test
  t.same(res.payload, movieDetailMock);
});

test("movie/search/pokemon busca correctamente", async (t) => {
  const app = await build(t);
  const res = await app.inject({
    url: "/movie/search/jack+reacher",
  });
  //Test
  t.same(res.payload, moviePreviewsMock);
});
