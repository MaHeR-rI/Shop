import classes from "./Style.module.css";
import ToggleDisplay from "../ui/ToggleDisplay";
import ToggleColors from "../ui/ToggleColors";

const Categories = () => {

    const catData=['T-Shirts','Shorts','Shirts','Hoodie','Jeans'];
    const sizeData=['XX-Small','X-Small','Small','Medium','Large','X-Large','XX-Large','3X-Large','4X-Large',];
    const colorsData=['#00C12B','#F50606','#F5DD06','#F57906','#06CAF5','#063AF5','#F506A4','#FFFFFF','#000000'];

  return (<div className={classes.sideBar}>
        <ToggleDisplay title={'Categories'} data={catData} />
        <ToggleColors title={'Colors'} data={colorsData} />
        <ToggleDisplay title={'Sizes'} data={sizeData} />
</div>);
};
export default Categories;
