import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO DOMINO'S</h1>
            <p>
            It all started in 1972, when owner Alon Musk opened her first Indian Pizza
            Company in a burned out clock shop in Levy, AR. Armed with a unique recipe
            for thin crust pizza and an old fashioned stone hearth oven, Indian
            Pizza embarked on a quarter-of-a-century journey that has
            done everything but dwindle.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/pizza.jpg" alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
