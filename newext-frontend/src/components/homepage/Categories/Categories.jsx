import React from "react";
import Category from "./Category";
import "./Style/Category.css"
function Categories() {
  return (
    <div>
      <Category 
        Index="1"
        gradientIndex="1"
        categoryTitle="Sports"
        imgHeadline="“We will try to employ German drivers” - Audi make their F1 plans clear before 2026 entry"
        imgStatus="1 day ago"
        subchildkey="1"
        img1key="1"
        img2key="2"
        subchild1Headline="F1 News: Valtteri Bottas evaluates potential Audi involvement in
        Sauber before 2026"
        subchild1Summary="Bottas evaluates what lies ahead for Sauber. “The two seasons
        that, for now, the team is non-branded, If I was Audi, I'd
        already ..."
        subchild1Status="1 day ago"
        subchild2Headline="Mick Schumacher Given Ray of Hope as Audi Reveals Major Plans for Top Step Glory"
        subchild2Summary="Do you think Mick Schumacher will have a chance to join another elite squad given the time it will take for the new engine ..."
        subchild2Status="2 day ago"
      />
      <Category 
        Index="2"
        gradientIndex="2"
        categoryTitle="Technology"
        imgHeadline="This Indian startup wants to sell computers as a subscription service … at Rs 399 per month"
        imgStatus="Today"
        subchildkey="2"
        img1key="3"
        img2key="4"
        subchild1Headline="One Million Times Faster Than Current Technology: 
        New Optical Computing "
        subchild1Summary="Processing devices based on polarized light run one million ti ..."
        subchild1Status="Today"
        subchild2Headline="Why are VCs getting so excited about generative AI?"
        subchild2Summary="Generative AI has made a big splash on social media via tools like DALL-E and ChatGPT, but why the hype among VCs?"
        subchild2Status="1 day ago"
      />
    </div>
  );
}

export default Categories;
