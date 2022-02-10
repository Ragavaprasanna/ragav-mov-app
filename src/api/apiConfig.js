const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'd4e9be29e0d301ccfe5807db7d289d0b',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;