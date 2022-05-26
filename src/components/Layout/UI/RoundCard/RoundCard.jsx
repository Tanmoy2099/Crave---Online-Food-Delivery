import classes from './RoundCard.module.css';

const Roundcard = (props) => {


    return (
        <div className={`${classes.cardContainer}`} >
        
            <div className={classes.Roundcard} style={{textDecoration : "none"}}>
                <img src={props.src} alt="categories" />
            </div>

            <h4 className={`${classes.tagname}`} >{props.children}</h4>
        </div>
    );
}

export default Roundcard;
