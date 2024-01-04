import classes from "./ExpItem.module.css";

const ExpItem = (props) => {
    return <div className={`${classes['wrapper']} ${(props.current && classes['current'])}`}>
        <h1 className={classes['title']}>{props.title}</h1>
        {props.desc && <p className={classes['desc']}>{props.desc}</p>}
        <span className={classes['date']}>{props.timeline}</span>
        <ul className={classes['list']}>
            {props.points && props.points.map((point, index) => <li key={props.title + index}>{point}</li>)}
        </ul>
    </div>

}

export default ExpItem;