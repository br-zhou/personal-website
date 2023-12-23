import classes from "./ExpItem.module.css";

const ExpItem = (props) => {
    return <div className={classes['wrapper']}>
        <h1 className={classes['title']}>{props.title}</h1>
        <span className={classes['date']}>{props.timeline}</span>
        <ul className={classes['list']}>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
        </ul>
    </div>
    
}

export default ExpItem;