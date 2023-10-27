import React from "react";
import SectionTitleS2 from "../SectionTitleS2";
import sImg1 from "../../images/event-shape-1.png";
import sImg2 from "../../images/event-shape-2.png";
import LocationMap from "../Modal";

const Events = [
  {
    Simg1: sImg1,
    Simg2: sImg2,
    title: "TBD",
    li1: "Saturday, January 13, 2024",
    li2: "7:00 PM – 12:00 AM",
    li3: "TBD",
    li4: "TBD",
  },
  {
    Simg1: sImg1,
    Simg2: sImg2,
    title: "THE CEREMONIES",
    li1: "Sunday, January 14, 2024",
    li2: "5:00 PM – 6:00 PM",
    li3: "Jacaranda Country Club",
    li4: "9200 W Broward Blvd, Plantation, FL 33324",
  },
  {
    Simg1: sImg1,
    Simg2: sImg2,
    title: "Cocktail Hour",
    li1: "Sunday, January 14, 2024",
    li2: "6:00 PM – 7:00 PM",
    li3: "Jacaranda Country Club",
    li4: "9200 W Broward Blvd, Plantation, FL 33324",
  },
  {
    Simg1: sImg1,
    Simg2: sImg2,
    title: "The Reception",
    li1: "Sunday, January 14, 2024",
    li2: "7:00 PM – 12:00 AM",
    li3: "Jacaranda Country Club",
    li4: "9200 W Broward Blvd, Plantation, FL 33324",
  },
];

const EventSection = (props) => {
  return (
    <section className={`wpo-event-section section-padding ${props.eClass}`} id="events">
      <div className="container">
        <SectionTitleS2 MainTitle={"TIME AND PLACE"} />
        <div className="wpo-event-wrap">
          <div className="row">
            {Events.map((event, eitem) => (
              <div className="col col-md-6 col-12" key={eitem}>
                <div className="wpo-event-item">
                  <div className="wpo-event-text">
                    <h2>{event.title}</h2>
                    <ul>
                      <li>{event.li1}</li>
                      <li>{event.li2}</li>
                      <li>{event.li3}</li>
                      <li>{event.li4}</li>
                      <li>
                        <LocationMap />
                      </li>
                    </ul>
                  </div>
                  <div className="event-shape-1">
                    <img src={event.Simg1} alt="" />
                  </div>
                  <div className="event-shape-2">
                    <img src={event.Simg2} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
