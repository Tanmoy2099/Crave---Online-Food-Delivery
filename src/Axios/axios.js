// import { useState } from 'react'

// import axios from "axios"


// export const fetchFood = async (props) => {
//     const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${props.food}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&health=${props.veg ? 'vegetarian' : 'pork-free'}&cuisineType=Indian&imageSize=REGULAR&imageSize=SMALL&excluded=recipes&excluded=recipe&excluded=pakisthan&excluded=beef&excluded=pork&excluded=indian&field=label&field=images&field=dietLabels&field=healthLabels&field=cuisineType&field=mealType`
//     try {
//         const response = await axios.get(url)
//         console.log(response)
//     } catch (error) { console.log(error) }
// }



// const AxoisHandler = () => {
// const [timeoutId, setTimeoutId] = useState()

//     const onTextChange = (event) => {
//         clearTimeout(timeoutId)
//         const timeout = setTimeout(() => fetchFood(event.target.value), 500)
//         setTimeoutId(timeout)
//     }
// }

// export default AxoisHandler