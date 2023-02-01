const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "?api_key=6ccec14d73ff9d9bcf849462fec5f62d",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
