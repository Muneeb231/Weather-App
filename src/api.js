export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

export const geoApiOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'MY_UNIQUE_API_KEY',
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
    }
};
