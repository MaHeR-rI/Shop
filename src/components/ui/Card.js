import classes from "./Card.module.css"
import img from "../../assets/product1.png"


const Card=()=>{

    return(<div className={classes.card}>
<img src={img} alt="product" />
<h4>T-shirt with Tape Details</h4>
<div></div>
<p><h3>$300</h3></p>
    </div>)
}
export default Card;