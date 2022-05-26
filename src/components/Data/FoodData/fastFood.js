
let tempId = 4000;

const customId = () => {
    tempId = tempId + 1
    return tempId
}

const FastFood = [
    {
        id: customId(),
        src: 'https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2016/1-Archana/Spicy_Vegetable_Noodles_Recipe-1.jpg',
        title: 'Vegetable Noodles',
        description: 'Spicy vegetable noodles is a one pot meal that is spicy and delicious with the goodness of fresh spring vegetables like snow peas, sweet corn, carrots, baby corn, broccoli and other ingredients like scrambled eggs, button mushrooms, and spring onions.',
        price: 80,
    },
    {
        id: customId(),
        src: 'https://myvegetarianroots.com/wp-content/uploads/2020/08/DSC_0060.jpeg',
        title: 'Hakka Noodles',
        description: 'Hakka noodles are one the most popular and favorite Indo-Chinese street foods of India. Any where you go within India, you will surely find a stall in every neighborhood, making this street style goodie fresh in front of your eyes within minutes!',
        price: 100,
    },
    {
        id: customId(),
        src: 'https://static.toiimg.com/photo/75356205.cms',
        title: 'Chicken Hakka Noodles',
        description: 'A bowl full of warm and freshly made noodles can turn your whole day upside down if you had been having a bad one! While we do not leave any chance of getting yourself a large serving of noodles every time',
        price: 120,
    },
    {
        id: customId(),
        src: 'https://1.bp.blogspot.com/-FtlrI6vhMww/X2jDWCb9zUI/AAAAAAAAMPQ/TmUrBHkFo6Ui-uPBi4D6KHKhKwq6-zebQCLcBGAsYHQ/s16000/Kolkata%2Begg%2Broll.JPG',
        title: 'EGG ROLL ',
        description: ' paratha is covered with egg on one side. It is then filled with onion-cucumber salad with hint of lemon juice, dollop of tomato ketchup and by sprinkling a little bit of chaat masala and black salt for flavouring. ',
        price: 80,
    },
    {
        id: customId(),
        src: 'https://static.toiimg.com/thumb/53977854.cms?width=400&height=300',
        title: 'Kathi Kebab Roll',
        description: 'Kathi Kebab Roll is a North Indian recipe made using mutton, onions, green chillies and coriander leaves rolled into paranthas. On days you do not want to prepare an elaborate meal, this delectable dish can be a saviour',
        price: 100,
    },
    {
        id: customId(),
        src: 'https://static.toiimg.com/thumb/62426407.cms?imgsize=661912&width=400&height=400',
        title: 'Pesto Chicken Rolls',
        description: 'Chicken rolls recipe is a delectable snack and is quite popular across the world. This is such a versatile dish that many people have come out with their own version of chicken roll. One such version is Pesto Chicken Rolls, ',
        price: 140,
    },
    {
        id: customId(),
        src: 'https://www.crazymasalafood.com/wp-content/images/fried-momos.jpg',
        title: 'Fried Momos',
        description: 'These crispy Momos attain their lovely texture because they are filled with sauteed vegetables and are then deep fried until they turn to beautiful golden brown. Dip them into some garlic mayonnaise, and you will have a volcano of flavours bursting in your mouth!',
        price: 120,
    },
    {
        id: customId(),
        src: 'https://www.crazymasalafood.com/wp-content/images/fried-momos.jpg',
        title: 'Tandoori Momos',
        description: 'This Indian version of the Momos is very famous and is loved by almost everyone! How else could you prove your “Desiness” if you don’t eat everything topped with gravy, including momos! The rich flavour of these momos is sure to tempt your taste buds.',
        price: 140,
    },
    {
        id: customId(),
        src: 'https://www.crazymasalafood.com/wp-content/images/steamed-momos.jpg',
        title: 'Steamed Momos',
        description: 'These thickly wrapped Momos are stuffed to the core with Paneer, Vegetables and Soya Chunks. A filling plate of these Momos is the perfect comfort food for chilly winter evenings.',
        price: 110,
    },
    {
        id: customId(),
        src: 'https://www.crazymasalafood.com/wp-content/images/chocolate-momos.jpg',
        title: 'Chocolate Momos',
        description: 'This is for the sweet tooth fanatics out there. If you are confused about whether you should have snacks or sweets, go for some Chocolate Momos because it is a combination of both! The bitter-sweet chocolate filling wrapped by some savoury dough brings instant delight to your mouth!',
        price: 150,
    },
    {
        id: customId(),
        src: 'https://www.crazymasalafood.com/wp-content/images/chilly-momos.jpg',
        title: 'Chilly Momos',
        description: 'This plate of Momos is going to set your tongue on fire with its hot and tangy flavour. Soya Sauce, Chilli Sauce and Ketchup make an exquisite fusion as a topping to these Momos and are sure to bring your taste buds alive!',
        price: 125,
    },
    {
        id: customId(),
        src: 'https://www.crazymasalafood.com/wp-content/images/kothe-momos.jpg',
        title: 'Kothe Momos',
        description: 'This is the Himalayan take on Momos. These Momos are pan fried and come with a variety of fillings to choose from like Vegetables, Meat, Pork, etc. One of the key ingredients that make these Momos unique and brings about the flavour is Fried Ginger, and the best part about these Momos is that they are not only tasty but are also very healthy!',
        price: 120,
    },
    {
        id: customId(),
        src: 'https://www.crazymasalafood.com/wp-content/images/soup-momos.jpg',
        title: 'Soup Momos',
        description: 'Brace yourselves, winter is coming! And so is this suggestion to make your evenings warm and cosy. Enjoy your Momos in a big bowl of Hot, Tangy and Spicy Chicken/Vegetable Broth and devour the yummy goodness.',
        price: 90,
    },
    {
        id: customId(),
        src: 'https://www.crazymasalafood.com/wp-content/images/cheese-momos.jpg',
        title: 'Cheese Momos',
        description: 'These Creamy, Steamy Momos are filled with Fried Onions, Baby Carrots, Crispy Potatoes and of course Oozy Cheese. This fusion of flavours is sure to create wonders in your mouth.',
        price: 135,
    },
    {
        id: customId(),
        src: 'https://www.crazymasalafood.com/wp-content/images/EGG.jpg',
        title: 'Egg Noodles',
        description: 'It is a food in many cultures made from dough which is extruded, stretched. This dish is made by adding egg to the noodles. Eggs added to the noodles make it healthy as eggs contain a good amount of protein in it which is required by the body. The egg noodles contains some vegetables like capsicum, cabbage, onion, carrot and tossed with some spices and chili with added soy sauce.',
        price: 60,
    },
    {
        id: customId(),
        src: 'https://www.crazymasalafood.com/wp-content/images/oats-9.jpg',
        title: 'Oats Noodles',
        description: 'Oats Noodles is a nutrient-rich dish, which you can eat at anytime because it is yummy as well as healthy. Its spicy taste is so good that you can this dish whole day and is healthy also because is made up of Oats. You can also cook Oats with maggi masala, taste of magic masala oats is amazing.',
        price: 100,
    },
    {
        id: customId(),
        src: 'https://www.crazymasalafood.com/wp-content/images/paneer-14.jpg',
        title: 'Paneer Noodles',
        description: 'This dish which is paneer noodles are made by adding cottage cheese to the noodles. Cottage cheese added to the noodles makes it healthy as cottage cheese contain a good amount of protein in it which is required by the body. The noodle contains some vegetables like capsicum, cabbage, onion, etc.',
        price: 120,
    },

    {
        id: customId(),
        src: 'https://static.wixstatic.com/media/05c508_8057d3e49c39427ba93abf8d9b9a63f2~mv2.png/v1/fit/w_800%2Ch_800%2Cal_c/file.png',
        title: 'Reshmi Kabab',
        description: 'Gorgeous kababs that make an amazing meal with bold flavours and is packed full of freshness! ',
        price: 200,
    },
    {
        id: customId(),
        src: 'https://www.spiceindiaonline.com/wp-content/uploads/2021/05/Tandoori-Chicken-20.jpg',
        title: 'Tandoori Chicken',
        description: 'Skinless legs and thighs are marinated in a tenderizing mixture of yogurt, lemon juice, and spices and the meat is slashed to the bone in several places helping the marinade penetrate and the chicken cook more quickly.',
        price: 210,
    },
    {
        id: customId(),
        src: 'https://hamariweb.com/recipes/images/recipeimages/9910.jpg',
        title: 'Chicken Manchurian ',
        description: 'Chicken Manchurian Recipe is the most popular and all time favorite dishes from the Chinese cuisine. It is usually served along with Chinese Chicken Fried rice as a regular meal. It is a famous Indo- Chinese dish. For making this recipe you require boneless chicken,',
        price: 200,
    },
    // {
    //     id: customId(),
    //     src: '',
    //     title: '',
    //     description: '',
    //     price: ,
    // },

]



export default FastFood