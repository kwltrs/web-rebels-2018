import React from "react";

import Panel from "../components/panel";
import imageryCutUrl from "../graphics/imagery-cut.png";
import "./sponsors.scss";

const Sponsors = () => (
  <div className="page-sponsors">
    <img src={imageryCutUrl} alt="Simplified Oslo city scape" />
    <div className="page-content">
      <h1>Sponsors</h1>
      <p>
        We are looking for sponsors to our developer conference Web Rebels. We
        have over 300 attendees of people interested in web development and the
        conference goes over two days.
      </p>
      <p>
        This year we are offering 3 different sponsorship packages, Bronze,
        Silver and Gold.
      </p>
      <p>Benefits for all sponsors:</p>
      <ul>
        <li>Logo on website</li>
        <li>Our thanks on Twitter</li>
        <li>Mention in opening & closing talks</li>
        <li>Displayed logo during breaks</li>
        <li>Logo displayed in online videos</li>
        <li>Open positions listed in newsletters</li>
        Recruiting shout-outs on Twitter
      </ul>

      <Panel title={<h2>Bronze – 30 000 NOK</h2>}>
        <p>(with mva 37 500 NOK)</p>
        <ul>
          <li>
            Flag, banner or poster inside the venue (provided by you) but no
            stand
          </li>
          <li>Lanyard from your company (provided by you)</li>
          <li>Bigger logo</li>
          <li>1 ticket</li>
        </ul>
      </Panel>

      <Panel title={<h2>Silver – 40 000 NOK </h2>}>
        (with mva 50 000 NOK)
        <p>
          Bronze with a stand at the venue and one of the following options
          (first come basis):
        </p>
        <ul>
          <li>
            Coffee sponsor - you bring branded cups that will be used for coffee
          </li>
          <li>
            Ice cream sponsor - you bring ice cream with a branded sticker from
            your company
          </li>
          <li>Soda sponsor - You bring Coca cola for all</li>
        </ul>
      </Panel>

      <Panel title={<h2>Gold – 64 000 NOK</h2>}>
        ( with mva 80 000 NOK) – 5 spots
        <ul>
          <li>3 tickets in total</li>
          <li>Biggest logo</li>
          <li>
            If you pick a package you also get to have a stands / booth or other
            kind of presence at the venue, or hold a free workshop the day after
            (we promote it through our channels)
          </li>
        </ul>
        <p>
          We only have these 5 spots on a first come, first serve basis for the
          gold tier:
        </p>
        <ul>
          <li>
            Breakfast sponsor - You can sponsor the lovely breakfast we'll be
            serving everyone each morning. Your brand could be there greeting
            the Rebels!
          </li>
          <li>
            Lunch sponsor - Everyone attending the conference gets a prepaid
            card to use in the magnificent Mathallen. You can have your company
            name on the cards as our exclusive lunch sponsor.
          </li>
          <li>
            Media Sponsor - Sponsor our live streaming and recording of all the
            talks.
          </li>
          <li>
            Chill Out Sponsor - Sponsor bean bags. We will add signs and brand
            the chill out zone with your company logo and brand.
          </li>
          <li>
            Water bottle sponsor - we provide branded bottles of water to
            everyone
          </li>
        </ul>
        <p>
          Questions or want to discuss other options? Please don’t hesitate to
          contact us.
        </p>
      </Panel>
    </div>
  </div>
);

export default Sponsors;
