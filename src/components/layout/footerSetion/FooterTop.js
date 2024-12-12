import Container from "../../ui/Container";
import classes from "./FooterTop.module.css"
const FooterTop=()=>{
    return(
        <div className={classes.footerTop}>
<Container>
    <div className={classes.form}>
<h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
<form action="">
    
    <input type="text" placeholder="Enter your email address"/>
    <button type="button">Subscribe to Newsletter</button>
</form>
    </div>
</Container>
        </div>

    )
}
export default FooterTop;