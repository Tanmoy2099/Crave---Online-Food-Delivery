import classes from './Container.module.css';

const Container = (props) => {


    
    return <div className={`${classes.containerWrapper}`}>
        <div className={` ${classes.container}`}>
            {props.children}
        </div>
    </div>

}
export default Container;