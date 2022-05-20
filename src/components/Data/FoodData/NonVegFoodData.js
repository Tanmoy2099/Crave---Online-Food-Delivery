
const random = () => Math.floor(Math.random() * (300 - 200 + 1) + 200);

let tempId = 1000;

const customId = () => {
    tempId =  tempId + 1
    return tempId
};

const NonVegFoodData = [
    {
        id: customId(),
        src: 'https://b.zmtcdn.com/data/pictures/4/19754134/06753e3d0a4bf12acb673af12acd47d3_o2_featured_v2.jpg',
        title: 'Chicken Biryani',
        description: 'Chicken Bengali,Biryani',
        price: random()-50,
    },
    {
        id: customId(),
        src: 'https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg',
        title: 'Mutton Biryani',
        description: 'Mutton Bengali,Biryani',
        price: random(),
    },
    {
        id: customId(),
        src: 'https://b.zmtcdn.com/data/pictures/4/19754134/06753e3d0a4bf12acb673af12acd47d3_o2_featured_v2.jpg',
        title: 'Chicken Polao',
        description: 'Chicken polao, Polao',
        price: random(),
    },
    {
        id: customId(),
        src: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Mutton-Pulao.jpg',
        title: 'Mutton polao',
        description: 'Mutton polao, Polao',
        price: random(),
    },
    {
        id: customId(),
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Catla_fish_in_mustard_curry_-_Kolkata_-_West_Bengal.jpg/1024px-Catla_fish_in_mustard_curry_-_Kolkata_-_West_Bengal.jpg',
        title: 'Shorshe maach',
        description: 'Mustard Fish (Shorshe maach) ',
        price: random(),
    },
    {
        id: customId(),
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Pabda_Jhaal_-_Home-_Kolkata_-_West_Bengal.jpg/1280px-Pabda_Jhaal_-_Home-_Kolkata_-_West_Bengal.jpg',
        title: 'Pabda Jhaal',
        description: 'Pabda macher jhal',
        price: random(),
    },
    {
        id: customId(),
        src: 'https://www.holidify.com/images/cmsuploads/compressed/Ilish_macher_paturi_20170829115529.jpg',
        title: 'Ilish Macher Jhol',
        description: 'One of the much-favoured fishes in the region, Hilsa or ilish fish curry is something that you have got to try your hands on',
        price: random(),
    },
    {
        id: customId(),
        src: 'https://lh3.googleusercontent.com/-03mJLjIEhw0/W1oqu3Gtl3I/AAAAAAAAc8w/8JVKQ9yyNacCL72ruLRiDkPvDrPe36r1QCHMYCw/s640/blogger-image--1077600911.jpg',
        title: 'Tangra Macher Jhol',
        description: 'The fish is prepared with freshly ground spices, and the thin curry is light on the stomach and also supremely tasty too',
        price: random(),
    },
    {
        id: customId(),
        src: 'https://www.playfulcooking.com/wp-content/uploads/2021/10/kosha-mangsho-10-720x405.jpg',
        title: 'Kosha Mangsho',
        description: 'Kosha Mangsho is a quintessential Bengali rich goat meat curry.',
        price: random(),
    },
    {
        id: customId(),
        src: 'https://media.vogue.in/wp-content/uploads/2020/11/Chilli-chicken-1920x1080.jpg',
        title: 'chilli chicken',
        description: 'chilli chicken a delicious dice',
        price: random(),
    },
    {
        id: customId(),
        src: 'http://2.bp.blogspot.com/-FZ8vqtW5yF0/VBLbhg5rDeI/AAAAAAAAAHs/HPUfOM_C43Q/s1600/Chingri-Malakari.jpg',
        title: 'Chingri Malaikari ',
        description: ' It is simply a marvelous dish made up of jumbo prawns also known as Golda Chingri',
        price: random(),
    },
    // {
    //     id: customId(),
    //     src: '',
    //     title: '',
    //     description: '',
    //     price: random(),
    // },

] 

export default NonVegFoodData;