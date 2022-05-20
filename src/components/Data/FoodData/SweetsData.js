
const random = () => Math.floor(Math.random() * (20 - 10 + 1) + 10);

let tempId = 2000;

const customId = () => {
    tempId = tempId + 1
    return tempId
};


const SweetsData = [
    {
        id: customId(),
        src: 'https://www.holidify.com/images/cmsuploads/compressed/Butterscotch_Ice_Cream_Sandesh_-_Rajarhat_-_North_24_Parganas_2013-06-15_0624_20170829124004.jpg',
        title: 'Kacha Sandesh',
        description: 'This dish is made of khoya, a version of condensed milk and is heavenly in taste',
        price: random(),
    },
    {
        id: customId(),
        src: 'https://img-global.cpcdn.com/recipes/a554dbdc8d6a43fc/1200x630cq70/photo.jpg',
        title: 'Mishti Doi',
        description: ' It is made, with milk and sugar/Jaggery/Organic sugar',
        price: random(),
    },
    {
        id: customId(),
        src: 'https://www.holidify.com/images/cmsuploads/compressed/Nalen_Gurer_Rasgulla_-_Kolkata_2016-01-08_9092_20180523165629.JPG',
        title: 'Roshogulla',
        description: 'Roshogolla is a soft round mithai made out of Chhena and dipped into a sugary syrup.',
        price: random(),
    },
    {
        id: customId(),
        src: 'https://www.holidify.com/images/cmsuploads/compressed/Malpua_-_Howrah_2015-06-14_2868_20180523170250.JPG',
        title: 'Malpua',
        description: 'Malpua is a syrup-drenched concoction made from flour and sugar and additional ingredients',
        price: random(),
    },
    {
        id: customId(),
        src: 'https://www.holidify.com/images/cmsuploads/compressed/Ras-Malai_20180523170446.jpg',
        title: 'Rasmalai',
        description: 'asmalai is quite a hit in India. It is made with small sugary balls of chhena soaked in malai and with a dash of cardamom',
        price: random(),
    },
    {
        id: customId(),
        src: 'https://www.holidify.com/images/cmsuploads/compressed/Payesh_-_Rice_Boiled_in_Milk_-_Howrah_2013-10-18_3520_20180523170631.JPG',
        title: 'Payesh',
        description: 'ayesh is made with milk, rice, sugar, ghee along with spices such as cardamom and bay leaf and also dry fruits and nuts',
        price: random(),
    },
    {
        id: customId(),
        src: 'https://pikturenama.com/wp-content/uploads/2019/10/with-logo-Pantua-9.jpg',
        title: 'Pantua',
        description: 'Pantua is made from a yummy combination of milk, semolina, ghee, khoya and sugar',
        price: random(),
    },
    {
        id: customId(),
        src: 'https://hindusthansweets.com/public/data/product/Ghee%20Amriti.jpg',
        title: 'Amriti',
        description: 'It is designed into spirals with decorative curlicues around the edges.',
        price: random(),
    },
    {
        id: customId(),
        src: 'https://www.bigbasket.com/media/uploads/p/l/800432232_1-mukharuchi-sweets-langcha.jpg',
        title: 'Langcha',
        description: 'It is fried before being dipped into the sugar syrup',
        price: random(),
    },
    {
        id: customId(),
        src: 'https://i.ytimg.com/vi/z0Vtd1oTRYs/maxresdefault.jpg',
        title: 'Chhenar Jilipi',
        description: 'Made from chhenna, khoya and flour, it resembles the spiral of a jalebi but boasts a new and delicious taste',
        price: random(),
    },
    {
        id: customId(),
        src: 'https://www.holidify.com/images/cmsuploads/compressed/SWEET_KHIRER_CHOM_CHOM_20180523172403.JPG',
        title: 'Chomchom',
        description: 'The sweet is oval in shape and often has a brownish hue to it.',
        price: random(),
    },
    {
        id: customId(),
        src: 'https://www.holidify.com/images/cmsuploads/compressed/Mihidana_-_Saktigarh_2014-06-29_5578_20180523173643.JPG',
        title: 'Mihidana',
        description: 'The dish is made with powdered rice, flour and saffron which is blended with water',
        price: random(),
    },
    {
        id: customId(),
        src: 'https://www.holidify.com/images/cmsuploads/compressed/IMAG1106[1]_20180523173936.jpg',
        title: 'Kheer Kadam',
        description: ' this is made of small chhena spheres cocooned in khoya and powdered sugar',
        price: random(),
    },
    {
        id: customId(),
        src: 'https://www.holidify.com/images/cmsuploads/compressed/maxresdefault_20180523174132.jpg',
        title: 'Sar Bhaja',
        description: 'This delicious dessert is made of deep-fried milk cream. The recipe takes a while to create, ',
        price: random(),
    },
    {
        id: customId(),
        src: 'https://www.holidify.com/images/cmsuploads/compressed/DQmbVKpQoHHbGFzBGicaK7yG3UdGTiwyMxiXWJ2wD6XuvEZ_20180523174615.jpeg',
        title: 'Kacha Golla',
        description: 'Kacha Golla is one of the healthiest desserts and is often preferred during religious ceremonies and festivals.',
        price: random(),
    },

] 

export default SweetsData;