import React from "react";
import millionaire from "../../images/millionaire.jpeg";
import pfp from "../../images/pfp.jpeg";

import './LandingPage.css'

export default function LandingPage() {
  return (
    <div className='landing-wrapper'>
      <div className='landing-first-container'>
        <div id='lfc-first-text'>
          Unleash Your Inner Millionaire - Start Thinking Like One and Grow Into
          One Today!
        </div>
        <div id='lfc-second-text'>
          Unlock The Secret Of Millionaire Thinking - Take Your Life To The Next
          Level By Joining This Transformation Webinar!
        </div>
      </div>
      <div className='landing-second-container'>
        <iframe
            id='lsc-video'
          src="https://www.youtube.com/embed/UXOh264pWn8?si=6BuGNJ39lQ1K3FBQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className='landing-third-container'>
        <div>
          <img src={millionaire}></img>
          <div>THINK & GROW INTO A MILLIONAIRE 2 DAY MINDSET EVENT</div>
          <div>
            Want to know what it takes to be a Millionaire? It takes more than
            money! Learn how to Create a Millionaire Mindset during our Live
            Virtual Webinar. Your Kick Ass Coach, Christina CooperFoster, will
            teach you how Millionaires are different from most, by the way they
            Think, Act and Grow, their minds before, they make the money! If you
            aren't already a millionaire, then this is the time for you to learn
            what it takes, before you have too much money
          </div>
        </div>
        <div>
          <div className='pfp-section-container'>
            <img id='pfp' src={pfp}></img>
            <div>
              Take it from someone who has made a million dollars and lost a
              million dollars! I don't want anyone to go through what I did, all
              because i didn't know that more important than the money, is to
              have the mindset before you make the money! Learn from my
              mistakes, and begin NOW, to Think and Grow into your Inner
              Millionaire! - Christina CooperFoster
            </div>
          </div>
          <div>
            <div>Title</div>
            <div>Now - text here</div>
            <div>Now - text here</div>
            <div>Now - text here</div>
            <button>Register</button>
          </div>
        </div>
      </div>
      <div className='landing-4th-container'>
        Christina CooperFoster is a transformation coach & ceo of kick ass
        coaching. She coaches women to Kick Ass in the boardroom and the
        bedroom, by learning how to turn their Power into Profit. She has made
        it her mission to coach as many as she can to become Millionaires, by
        coaching women to learn what they need to know to increase their value,
        build their own coaching business and Kick Ass Coaching.
      </div>
    </div>
  );
}
