import FooterTop from "./FooterTop";
import FooterCenter from "./FooterCenter";
import classes from "./Footer.module.css"
const Footer=()=>{
    return(<div className={classes.footer}>
    <FooterTop/>
    <FooterCenter/>
    </div>
    )
}
export default Footer;