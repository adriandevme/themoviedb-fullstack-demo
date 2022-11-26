import { test } from "tap";
import { build } from "../helper";

import movieMock from "../_mocks/movieDetail447404.mock";

test("movie/447404 is loaded", async (t) => {
  const app = await build(t);

  const res = await app.inject({
    url: "/movie/447404",
  });

  t.equal(res.payload, movieMock);
});
