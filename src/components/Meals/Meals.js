import { Fragment } from "react";
import Categories from "../categories/Categories";

import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <Categories />
    </Fragment>
  );
};

export default Meals;
