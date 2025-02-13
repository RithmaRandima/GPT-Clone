import React from "react";
import "./Header.css";
import people from "../../assets/person-1.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header_content">
        <h1 className="gradient__tex">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus,
          quo, nemo similique molestias, ad debitis aspernatur quidem ex facere
          exercitationem consequuntur. Enim ducimus magni, sapiente possimus
          perferendis beatae consequatur ea!
        </p>
        <div className="header_content_input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="header-content_people">
          <img src={people} alt="people" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="gpt3-header-image">
        <img src={ai} alt="" />
      </div>
    </div>
  );
};

export default Header;
