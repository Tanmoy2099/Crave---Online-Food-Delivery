import React from 'react'
import classes from './FoodAdv.module.css'

const FoodAdv = () => {


    return (
        <div className={classes.containerMask}>
            <div className={classes.container}>
                <h3 className={classes.header}>OUR DISHES</h3>
                <div className={classes.dishContainer}>

                    <img className={classes.imagesResize} src="https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg" alt="mutton" draggable='false' />

                    <img className={classes.imagesResize} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Catla_fish_in_mustard_curry_-_Kolkata_-_West_Bengal.jpg/524px-Catla_fish_in_mustard_curry_-_Kolkata_-_West_Bengal.jpg" alt="Shorshe maach" draggable='false' />

                    <img className={classes.imagesResize} src="https://b.zmtcdn.com/data/pictures/4/19754134/06753e3d0a4bf12acb673af12acd47d3_o2_featured_v2.jpg" alt="Chicken" draggable='false' />

                    <img className={classes.imagesResize} src="https://www.holidify.com/images/cmsuploads/compressed/Ilish_macher_paturi_20170829115529.jpg" alt="Ilish" draggable='false' />

                    <img className={classes.imagesResize} src="https://static.toiimg.com/photo/75356205.cms" alt="Chicken Hakka Noodles" draggable='false' />

                    <img className={classes.imagesResize} src="https://static.toiimg.com/thumb/53977854.cms?width=300&height=200" alt="Kathi Kebab Roll" draggable='false' />

                    <img className={classes.imagesResize} src="https://www.holidify.com/images/cmsuploads/compressed/Alooposto_bhaat_20170829115400.jpg" alt="Posto" draggable='false' />

                    <img className={classes.imagesResize} src="https://5.imimg.com/data5/TV/MU/GLADMIN-48019022/bengali-special-veg-thali-500x500.jpg" alt="Thali" draggable='false' />

                    <img className={classes.imagesResize} src="https://www.holidify.com/images/cmsuploads/compressed/SWEET_KHIRER_CHOM_CHOM_20180523172403.JPG" alt="Chomchom" draggable='false' />

                    <img className={classes.imagesResize} src="http://2.bp.blogspot.com/-FZ8vqtW5yF0/VBLbhg5rDeI/AAAAAAAAAHs/HPUfOM_C43Q/s1600/Chingri-Malakari.jpg" alt="Malaikari" draggable='false' />

                    <img className={classes.imagesResize} src="http://4.bp.blogspot.com/-g15x29hgLKM/UTUVEcyegBI/AAAAAAAAJwc/VHgjm2XRIc4/s1600/644670_10151258531771736_1196157466_n%255B1%255D.jpg" alt="Kochuri" draggable='false' />

                </div>
            </div>
        </div>
    )
}

export default FoodAdv