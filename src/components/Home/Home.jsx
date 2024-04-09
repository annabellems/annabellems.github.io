import React, { useState } from "react";
import classes from "./Home.module.css";
import sample from "../../mocks/sample.json";

export const Home = () => {
  const [showPopularSeries, setShowPopularSeries] = useState(false);
  const [showPopularMovies, setShowPopularMovies] = useState(false);

  const entriesReleaseYear = sample.entries.filter(
    (entry) => entry.releaseYear > "2010"
  );

  const entriesSortByAlphaNumeric = entriesReleaseYear.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const entriesSeries = entriesSortByAlphaNumeric.filter(
    (entry) => entry.programType === "series"
  );

  const entriesMovies = entriesSortByAlphaNumeric.filter(
    (entry) => entry.programType === "movie"
  );

  const entriesFirstTwentySeries = entriesSeries.slice(0, 21);

  const entriesFirstTwentyMovies = entriesMovies.slice(0, 21);

  const handleOnPopularSeriesClick = () => {
    setShowPopularSeries(true);
  };

  const handleOnPopularMoviesClick = () => {
    return setShowPopularMovies(true);
  };

  const popularText = () => {
    if (showPopularSeries) return "Popular Series";
    if (showPopularMovies) return "Popular Movies";
    return "Popular Titles";
  };
  return (
    <>
      <div className={classes.item}>
        <div className={classes.demo}>DEMO Streaming</div>
        <div className={classes.login}>Log in</div>
        <button className={classes.freetrial}>Start your free trial</button>
      </div>
      <div className={classes.secondRow}>
        <div className={classes.popularTitle}>{popularText()}</div>
      </div>
      {!showPopularSeries && !showPopularMovies && (
        <>
          <div className={classes.thirdRow}>
            <div className={classes.column2}>
              <div className={classes.columnText}>SERIES</div>
            </div>
            <div className={classes.column2}>
              <div className={classes.columnText}>MOVIES</div>
            </div>
          </div>
          <div className={classes.fourthRow}>
            <div
              className={classes.fourthColumn}
              onClick={handleOnPopularSeriesClick}
            >
              Popular Series
            </div>
            <div
              className={classes.fourthColumn}
              onClick={handleOnPopularMoviesClick}
            >
              Popular Movies
            </div>
          </div>
        </>
      )}
      <div className={classes.moviesSeries}>
        {showPopularSeries &&
          entriesFirstTwentySeries.map((entry) => {
            return (
              <div className={classes.movieSerie}>
                <div className={classes.movieSerieText}>{entry.title}</div>
              </div>
            );
          })}

        {showPopularMovies &&
          entriesFirstTwentyMovies.map((entry) => {
            return (
              <div className={classes.movieSerie}>
                <div className={classes.movieSerieText}>{entry.title}</div>
              </div>
            );
          })}
      </div>
    </>
  );
};
