import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = () => {
    return (
        <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
        <p className={styles.desc}>
        The Alma Pizza Store is a local, family-owned business based out of Placentia, CA. Providing world class italian pizza and many popular dishes for over 30 years to the local residents of Orange County. We use the freshest and high quality ingredients for all of our dishes.
        </p>
        <div className={styles.wrapper}>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
        </div>
        </div>
    );
};

export default PizzaList;