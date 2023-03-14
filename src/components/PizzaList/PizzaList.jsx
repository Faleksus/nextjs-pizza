import React from "react";
import PizzaCard from "../PizzaCard/PizzaCard";
import styles from "./PizzaList.module.css";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN CITY</h1>
      <p className={styles.desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima facilis
        excepturi natus tempore laboriosam eligendi doloremque, totam id quod
        harum delectus aut sequi ea, nemo at mollitia unde corrupti explicabo.
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
