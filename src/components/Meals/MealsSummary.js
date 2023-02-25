import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  document.addEventListener("scroll", function () {
    // Get scroll position
    let scrollPosition = window.pageYOffset;
    let header = document.getElementById("header");

    // Calculate whether the scroll it 350px or not then set the opacity to face the header out
    if (scrollPosition <= 550) {
      header.style.opacity = 1 - scrollPosition / 550;
    } else {
      header.style.opacity = 0;
    }
  });
  return (
    <section id="header" className={classes.summary}>
      <h2>Take some rest, We prepare your meal!</h2>
      <p>Delivering Best Food Services all over the nation. </p>
      <p>Our Highly Qualified Chefs are always here for you!</p>
    </section>
  );
};

export default MealsSummary;
