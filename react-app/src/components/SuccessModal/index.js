import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import Countdown from "../Countdown";

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

  const targetDate = '2023-12-29T20:00:00';

  return (
    <>
      <h1>Congrats On Reserving Your Seat!</h1>
      <Countdown targetDate={targetDate} />
    </>
  );
}

export default SuccessModal;
