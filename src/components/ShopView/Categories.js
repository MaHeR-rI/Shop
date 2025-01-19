import classes from "./Style.module.css";
import ToggleDisplay from "../ui/ToggleDisplay";

const Categories = () => {

    const catData=['T-Shirts','Shorts','Shirts','Hoodie','Jeans'];
    const sizeData=['XX-Small','X-Small','Small','Medium','Large','X-Large','XX-Large','3X-Large','4X-Large',]

  return (<div className={classes.sideBar}>
        <ToggleDisplay title={'Categories'} data={catData} />
        <ToggleDisplay title={'Sizes'} data={sizeData} />
</div>);
};
export default Categories;
