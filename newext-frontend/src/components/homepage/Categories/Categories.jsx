import React, { useEffect, useState } from "react";
import Category from "./Category";
import "./Style/Category.css";
import axios from "axios";
import data from "./news";
function Categories() {
  // const [news, setNews] = useState([]);
  // useEffect(() => {
  //   const fnc = async () => {
  //     const res = await axios.post("http://localhost:9876/getnews", {
  //       lang: "en",
  //       category: "all",
  //     });
  //     setNews(res.data);
  //   };
  //   fnc();
  // }, []);
  // function Category(element,index){
  //   return (
  //     <Category
  //       Index={index}
  //       gradientIndex={index}
  //       categoryTitle="Sports" 
  //       imgHeadline={element.title}
  //       imgStatus="1 day ago"
  //       subchildkey="1"
  //       img1key="1"
  //       img2key="2"
  //       subchild1Headline="F1 News: Valtteri Bottas evaluates potential Audi involvement in
  //       Sauber before 2026"
  //       subchild1Summary="Bottas evaluates what lies ahead for Sauber. “The two seasons
  //       that, for now, the team is non-branded, If I was Audi, I'd
  //       already ..."
  //       subchild1Status="1 day ago"
  //       subchild2Headline="Mick Schumacher Given Ray of Hope as Audi Reveals Major Plans for Top Step Glory"
  //       subchild2Summary="Do you think Mick Schumacher will have a chance to join another elite squad given the time it will take for the new engine ..."
  //       subchild2Status="2 day ago"
  //     />

  //   )

  // }
  return (
    <div>
    {/* {data[0].title} */}
      <Category
        Index="1"
        categoryTitle="Sports"
        imageUrl={data[2].image}
        imgHeadline={data[2].title}
        imgStatus={data[2].postedAt}
        subchild1ImageUrl={data[3].image}
        subchild1Headline={data[3].title}
        subchild1Summary={data[3].content.slice(0,110)+"..."}
        subchild1Status={data[3].postedAt}
        subchild2ImageUrl={data[4].image}
        subchild2Headline={data[4].title}
        subchild2Summary={data[4].content.slice(0,110)+"..."}
        subchild2Status={data[4].postedAt}
      />
      <Category
        Index="2"
        categoryTitle="Technology"
        imageUrl={data[5].image}
        imgHeadline={data[5].title}
        imgStatus={data[5].postedAt}
        subchild1ImageUrl={data[6].image}
        subchild1Headline={data[6].title}
        subchild1Summary={data[6].content.slice(0,110)+"..."}
        subchild1Status={data[6].postedAt}
        subchild2ImageUrl={data[7].image}
        subchild2Headline={data[7].title}
        subchild2Summary={data[7].content.slice(0,110)+"..."}
        subchild2Status={data[7].postedAt}
      />
      <Category
        Index="3"
        categoryTitle="Politics"
        imageUrl={data[8].image}
        imgHeadline={data[8].title}
        imgStatus={data[8].postedAt}
        subchild1ImageUrl={data[9].image}
        subchild1Headline={data[9].title}
        subchild1Summary={data[9].content.slice(0,110)+"..."}
        subchild1Status={data[9].postedAt}
        subchild2ImageUrl={data[10].image}
        subchild2Headline={data[10].title}
        subchild2Summary={data[10].content.slice(0,110)+"..."}
        subchild2Status={data[10].postedAt}
      />
    </div>
  );
}

export default Categories;
