
// import InfiniteScroll from "react-infinite-scroll-component";
import AllFoodData from '../../Data/FoodData/AllFoodData';
import Container from "../UI/Container/Container";
import Ordercard from '../UI/OrderCard/OrderCard';
// import LoadingSpinner from "../UI/Spinner/LoadingSpinner";

const AllTypeFood = () => {

    const AllFood = AllFoodData.map(allFood => {
        return <Ordercard
            key={allFood.id}
            id={allFood.id}
            src={allFood.src}
            title={allFood.title}
            description={allFood.description}
            price={allFood.price} />
    })

    // const fetchMoreData = () => {
    //     setTimeout(() => {
    //         this.setState({
    //             items: this.state.items.concat(Array.from({ length: 20 }))
    //         });
    //     }, 10500);
    // };

    return (
        // <InfiniteScroll
        //     dataLength={20}
        //     next={fetchMoreData}
        //     hasMore={true}
        //     loader={
        //         <Container>
        //             <LoadingSpinner />
        //         </Container>
        //     }>
            <Container>
                {AllFood}
            </Container>
        // </InfiniteScroll>
    )
}

export default AllTypeFood;