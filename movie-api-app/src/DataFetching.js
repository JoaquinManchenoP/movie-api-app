import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DataFetching() {
  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/auto-complete",
    params: { q: "game of thr" },
    headers: {
      "x-rapidapi-key": "6ce0dead97mshbd05d5716995c63p11c709jsn5836c4b7156e",
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return <div></div>;
}
