import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import Countdown from "../Countdown";
import './SuccessModal.css'

function SuccessModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
        closeModal()
    }
  };

  const targetDate = '2023-12-29T19:00:00-05:00';

  return (
    <div className='success-wrapper'>
      <div id='success-box-one'>YOUR SEAT IS SAVED!</div>
      <i id='success-box-two'>And Your Email Is On The Way For The Link To Think & Grow Into A Millionaire</i>
      <div id='zoom-reminder'>Be Sure To Register on <span style={{ color: 'blue' }}>ZOOM</span> Using The Link in The Email</div>
      <div id='success-box-three'>DECEMBER 29TH AND 30TH <span style={{ color: 'green' }}>@ 7PM EST</span></div>
      <Countdown className='countdown' targetDate={targetDate} />
    </div>
  );
}

export default SuccessModal;
