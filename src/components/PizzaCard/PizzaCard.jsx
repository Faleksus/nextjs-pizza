import Image from 'next/image'
import React from 'react'
import styles from './PizzaCard.module.css'

const PizzaCard = () => {
  return (
    <div className={styles.container}>
        <Image src="/img/pizza.png" alt='' width={200} height={200} />
        <h1 className={styles.title}>FIORI DI ZUCCA</h1>
        <span className={styles.price}>$19.90</span>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iste accusantium vero amet dolores fugiat distinctio consequatur tempore? Doloribus, voluptates harum. Autem, doloremque odio. Porro harum mollitia corporis asperiores a!</p>
    </div>
  )
}

export default PizzaCard