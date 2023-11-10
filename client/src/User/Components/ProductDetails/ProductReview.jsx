import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Rating, Typography } from "@mui/material";

function ProductReview() {
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };
  return (
    <div>
        <section>
      <Grid container className="p-10">
        <Grid item >
          <div className="text-start font-bold text-2xl ">Customer reviews</div>

          <Grid container className="text-lg font-bold mt-5">
            <Grid item xs={3}>
              <Rating name="read-only" value={5} readOnly />
            </Grid>
            <Grid item xs={2} className="text-start">
              <p>GOOD</p>
            </Grid>
          </Grid>

          <Grid container  rowGap={1}>
            <Grid container className="text-lg font-semibold  ps-5">
              <Grid item xs={2}>
                <p>5⭐</p>
              </Grid>
              <Grid item xs={8} className="text-start">
                <progress
                  class="progress progress-warning w-56"
                  value="100"
                  max="100"
                ></progress>
              </Grid>
            </Grid>
            <Grid container className="text-lg font-semibold  ps-5">
              <Grid item xs={2}>
                <p>4⭐</p>
              </Grid>
              <Grid item xs={8} className="text-start">
                <progress
                  class="progress progress-warning w-56"
                  value="75"
                  max="100"
                ></progress>
              </Grid>
            </Grid>
            <Grid container className="text-lg font-semibold  ps-5">
              <Grid item xs={2}>
                <p>3⭐</p>
              </Grid>
              <Grid item xs={8} className="text-start">
                <progress
                  class="progress progress-warning w-56"
                  value="25"
                  max="100"
                ></progress>
              </Grid>
            </Grid>
            <Grid container className="text-lg font-semibold  ps-5">
              <Grid item xs={2}>
                <p>2⭐</p>
              </Grid>
              <Grid item xs={8} className="text-start">
                <progress
                  class="progress progress-warning w-56"
                  value="50"
                  max="100"
                ></progress>
              </Grid>
            </Grid>
            <Grid container className="text-lg font-semibold  ps-5">
              <Grid item xs={2}>
                <p>1⭐</p>
              </Grid>
              <Grid item xs={8} className="text-start">
                <progress
                  class="progress progress-warning w-56"
                  value="9"
                  max="100"
                ></progress>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid></section>

    </div>
  );
}

export default ProductReview;
