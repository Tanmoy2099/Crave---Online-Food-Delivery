
// const random = () => Math.floor(Math.random() * (200 - 50 + 1) + 50);

let tempId = 3000;

const customId = () => {
    tempId = tempId + 1
    return tempId
};



const VegFoodData = [
    {
        id: customId(),
        src: 'https://www.holidify.com/images/cmsuploads/compressed/Alooposto_bhaat_20170829115400.jpg',
        title: 'Aloo Potol Posto',
        description: 'This preparation is made of poppy or Posto ',
        price: 80,
    },
    {
        id: customId(),
        src: 'https://img-global.cpcdn.com/recipes/df35c352a3655081/1200x630cq70/photo.jpg',
        title: 'Shukto',
        description: 'Shukto is a combination of different vegetables like Brinjals, Bitter Gourd, Crunchy Drumsticks and Bori.',
        price: 50,
    },
    {
        id: customId(),
        src: 'http://4.bp.blogspot.com/-g15x29hgLKM/UTUVEcyegBI/AAAAAAAAJwc/VHgjm2XRIc4/s1600/644670_10151258531771736_1196157466_n%255B1%255D.jpg',
        title: 'Kochuri (10p)',
        description: 'Koraishutir Kochuri / Peas Kachori / Matorshutir Kachori o Aloor Dom (hing diye)',
        price: 60,
    },
    {
        id: customId(),
        src: 'https://img-global.cpcdn.com/recipes/ee1469ddb9187823/1200x630cq70/photo.jpg',
        title: ' Lau Ghonto',
        description: 'This is a typical homemade style Bottle Gourd curry',
        price: 100,
    },
    {
        id: customId(),
        src: 'https://img-global.cpcdn.com/recipes/6292818077af1c28/1200x630cq70/photo.jpg',
        title: ' Mochar Ghonto',
        description: 'Here is my version of Mochar Ghonto where the banana blossom/flower is cooked in a delicious curry.',
        price: 120,
    },
    {
        id: customId(),
        src: 'https://5.imimg.com/data5/TV/MU/GLADMIN-48019022/bengali-special-veg-thali-500x500.jpg',
        title: 'Veg Thali',
        description: 'pure bengali veg thali prepared in home based vegetarian environment with no onion and garlic using best quality spices that serves 1.Shukta 2.Dal 3.Plain rice 4.Begun vaga/Beguni/aluvaja 5.2 Types of curry 6.Chatni 7.papad 6.Sweets',
        price: 220,
    },
    // {
    //     id: customId(),
    //     src: '',
    //     title: '',
    //     description: '',
    //     price: random(),
    // },

] 


export default VegFoodData;