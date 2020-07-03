import axios from 'axios';

const getImages = (query) => {
    if(!query) {
        return Promise.resolve([]);
    } else {
        return(
            axios.get('https://images-api.nasa.gov/search', {
                params: {
                  q: query
                }
              })
            .then(response => {
            const results = response.data.collection.items
            const resultImages = results.filter(img => {
               return img.data[0].media_type === 'image'
            })  
            const images = resultImages.map(img => {
                return img.links[0].href
            })
            console.log(images);
            return images;
            })
            .catch(error => {
                console.log(error)
            })
        )
    }
};

export default getImages;
