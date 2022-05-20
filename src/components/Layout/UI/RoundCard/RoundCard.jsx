import classes from './RoundCard.module.css';

const Roundcard = (props) => {


    return (
        <div className={`${classes.cardContainer}`} >
        
            <div className={classes.Roundcard} style={{textDecoration : "none"}}>
                <img src={props.src} alt="categories" />
            </div>

            <h3 className={`${classes.tagname}`} >{props.children}</h3>
        </div>
    );
}

export default Roundcard;
