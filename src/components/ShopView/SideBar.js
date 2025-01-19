import classes from "./SideBar.module.css";
import filter from "../../assets/filter.png"
import Categories from "./Categories";

const SideBar = () => {
  return (<div className={classes.sideBar}>
<div className={classes.head}><span>Filters</span><img src={filter} alt="filters" /></div>
<Categories/>
  </div>);
};
export default SideBar;
