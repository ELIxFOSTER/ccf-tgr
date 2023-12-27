import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import millionaire from "../../images/millionaire.jpeg";
import pfp from "../../images/pfp.jpeg";
import { subscribeToMailchimp } from "../../store/mailchimp";
import SuccessModal from "../SuccessModal";
import AutoOpenModal from "../AutoOpenModal";

// Import necessary components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import "./LandingPage.css";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const mailchimpState = useSelector((state) => state.mailchimpReducer);
  const isSubscribed = mailchimpState?.subscribed || false;

  const handleSubscribe = async () => {
    try {
      // Dispatch the subscribe action
      await dispatch(subscribeToMailchimp({ email }));

    } catch (error) {
      console.error("Error subscribing to Mailchimp:", error);
    }
  };

  useEffect(() => {
    // Check if mailchimpState is defined and either the dispatch was successful or no errors occurred
    if (mailchimpState && (mailchimpState.subscribed)) {
      // If yes, open the modal
      setModalOpen(true);
    }
  }, [mailchimpState]);

  const closeModal = () => {
    // Close the modal
    setModalOpen(false);
  };

  // Use useEffect to watch for changes in mailchimpState


  return (
    <div className="landing-wrapper">
      <div className="landing-first-container">
        <div id="lfc-first-text">
          Unleash Your Inner Millionaire - Start Thinking Like One and Grow Into
          One Today!
        </div>
        <i id="lfc-second-text">
          Unlock The Secrets Of Millionaire Thinking - Take Your Life To The Next
          Level By Joining This Transformation Webinar!
        </i>
      </div>
      <div className="landing-second-container">
        <iframe
          id="lsc-video"
          src="https://www.youtube.com/embed/UXOh264pWn8?si=6BuGNJ39lQ1K3FBQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="landing-third-container">
        <div id="ltc-box-one">
          <img src={millionaire}></img>
          <div id="tagr-title">
            THINK & GROW INTO A MILLIONAIRE 2 DAY MINDSET EVENT
          </div>
          <div id="tagr-text">
            Want to know what it takes to be a Millionaire? It takes more than
            money! Learn how to Create a Millionaire Mindset during our Live
            Virtual Webinar. Your Kick Ass Coach, Christina CooperFoster, will
            teach you how Millionaires are different from most, by the way they
            Think, Act and Grow, their minds before, they make the money! If you
            aren't already a millionaire, then this is the time for you to learn
            what it takes, before you have too much money
          </div>
        </div>
        <div id="ltc-box-two">
          <div className="pfp-section-container">
            <img id="pfp" src={pfp}></img>
            <div id="profile-text">
              Take it from someone who has made a million dollars and lost a
              million dollars! I don't want anyone to go through what I did, all
              because i didn't know that more important than the money, is to
              have the mindset before you make the money! Learn from my
              mistakes, and begin NOW, to Think and Grow into your Inner
              Millionaire! - Christina CooperFoster
            </div>
          </div>
          <div className="form-container">
            <div style={{ fontSize: "40px", fontWeight: "600" }}>
              IT'S NOW OR NEVER
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: '15px' }}>
              <div style={{ display: "flex", gap: "20px" }}>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "blue", fontSize: "30px" }}
                />
                <div style={{ fontWeight: "600", fontSize: "30px" }}>NOW: </div>
                <div style={{ fontSize: "25px" }}>
                  You Don't Have to Have Money to Learn
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "blue", fontSize: "30px" }}
                />
                <div style={{ fontWeight: "600", fontSize: "30px" }}>NOW: </div>
                <div style={{ fontSize: "25px" }}>
                  I's Free! What Do You Have to Lose?
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "blue", fontSize: "30px" }}
                />
                <div style={{ fontWeight: "600", fontSize: "30px" }}>NOW: </div>
                <div style={{ fontSize: "25px" }}>If Not Now, When?</div>
              </div>
            </div>
            <form
              id="form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubscribe();
              }}
            >
              <input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                id="form-input"
              />
              <button id="form-button" type="submit">
                REGISTER HERE
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="landing-fourth-container">
        <strong>
          CHRISTINA COOPERFOSTER IS A TRANSFORMATION COACH & CEO OF KICK ASS
          COACHING.
        </strong>{" "}
        She coaches women to Kick Ass in the boardroom and the bedroom, by
        learning how to turn their Power into Profit. She has made it her
        mission to coach as many as she can to become Millionaires, by coaching
        women to learn what they need to know to increase their value, build
        their own coaching business and Kick Ass Coaching.
      </div>
      <AutoOpenModal
        modalComponent={<SuccessModal />}
        openOnSuccess={isModalOpen} // Automatically open on Mailchimp success
      />
    </div>
  );
}
