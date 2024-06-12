import React from "react";
import Button from "../shared/Button";
import TextInput from "../shared/TextInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserEdit from "./UserEdit";

const UserAdd = () => {
  const [podaci, setPodaci] = useState({ ime: "", email: "" });
  const navigate = useNavigate();
  const handleUser = () => {
    console.log(podaci);
    setPodaci({ ime: "", email: "" });
    navigate("/");
  };
  return (
    <div>
      <TextInput
        label="ime"
        inputProps={{ type: "text", placeholder: "ime" }}
        value={podaci.ime}
        onChange={(e) => setPodaci({ ...podaci, ime: e.target.value })}
      />
      <TextInput
        label="email"
        inputProps={{ type: "email", placeholder: "E-mail" }}
        value={podaci.email}
        onChange={(e) => setPodaci({ ...podaci, email: e.target.value })}
      />
      <Button onClick={handleUser} />
    </div>
  );
};

export default UserAdd;
