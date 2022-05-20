
import { Link } from 'react-router-dom'

import classes from './PageNotFound.module.css'

const PageNotFound = () => {


    return (
        <div className={classes.pageNotfound}>
            <p> 404. Page Not Found</p>
            <Link to='/Home' className='btn-warning btn lg fs-1'>Go to Home</Link>
        </div>
    )
}

export default PageNotFound