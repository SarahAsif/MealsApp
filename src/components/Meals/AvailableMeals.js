import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const AvailableMeals = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://zenva.pk/wp-json/wc/v3/products?consumer_key=ck_16745cbec367be15c5cdb78911f70722a310bace&consumer_secret=cs_090695550b956ddc52f6be9cc8b0a7c12d44d04e"
      )
      .then((resp) => {
        console.log(resp);
        console.log(resp.data[0]);
        setPost([...resp.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // let mealsList = null;
  // if (Array.isArray(data)) {
  //   mealsList = data.map((meal) => (
  //     <MealItem
  //       key={meal.id}
  //       id={meal.id}
  //       name={meal.name}
  //       description={meal.description}
  //       price={meal.price}
  //     />
  //   ));
  // }

  return (
    <>
      <section className={classes.meals}>
        <Card>
          {post.map((meal, index) => {
            return (
              <div key={index}>
                <MealItem
                  id={meal.id}
                  description={meal.name}
                  price={+meal.price}
                  image={
                    meal.images[0]?.src ||
                    "data:image/jpeg;base64,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"
                  }
                />
              </div>
            );
          })}
        </Card>
      </section>
    </>
  );
};

export default AvailableMeals;
