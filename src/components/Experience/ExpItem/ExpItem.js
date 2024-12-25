import classes from "./ExpItem.module.css";

const ExpItem = (props) => {
    return <div className={classes['item-container']}>
        <img
            src={props.img}
            alt={`${props.title} logo`}
            loading="lazy"
            width="78px" height="78px"
            draggable="false"
        >
        </img>
        <div className={classes['desc-container']}>
            <div className={classes['text-container']}>
                <h1 className={classes['title']}>{props.title}</h1>
                <span className={classes['optional-text']}>{props.timeline}</span>
            </div>
            <div className={classes['text-container']}>
                <p className={classes['desc']}>{props.desc}</p>
                <span className={classes['optional-text']}>{props.location}</span>
            </div>
        </div>


    </div>

}

export default ExpItem;