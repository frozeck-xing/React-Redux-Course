import axios from 'axios';

const searchImages = async (searchText) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 4ajoklmB6cqzsaNYeRvDGPCMOqLw6KCAHmPS1jvqyjo'
        },
        params: {
            query: searchText
        }
    });


    return response.data.results;
};

export default searchImages;