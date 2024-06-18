import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

//https://www.emailjs.com/docs/sdk/installation/
//https://www.emailjs.com/docs/examples/reactjs/

const App = () => {
  const initialValues = { user: " ", email: "", pass: "" };
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);

  const form = useRef();

  //jedna handle change funckija za sva 3!!!!
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value }); //ključ u objektu
    console.log(formValues);
  };

  const handleFormReset = () => {
    setFormErrors({});
    setFormValues(initialValues);
    setIsSubmit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (Object.keys(validate(formValues)).length === 0) {
      emailjs
        .sendForm("service_w2ykqfb", "template_3zj2baa", form.current, {
          publicKey: "j7ChY6RZm789qrlly",
        })
        .then(
          (result) => {
            console.log(result.text);
            console.log("SUCCESS!");
            handleFormReset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (v) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!v.user) {
      errors.user = "kor ime nije upisano";
    }
    if (!v.email) {
      errors.email = "email nije upisano";
    } else if (!regex.test(v.email)) {
      errors.email = "Niste unijeli ispravnu e-maila adresu.";
    }
    if (!v.pass) {
      errors.pass = "pass nije upisano";
    } else if (v.pass.length < 6) {
      errors.pas = "Lozinka mora imati više od 6 znakova";
    }
    return errors;
  };

  return (
    <div className="container">
      <form ref={form} onSubmit={handleSubmit}>
        <h1>Forma</h1>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <p className="ispis">Uspjeh</p>
        ) : (
          <p className="ispis">Ispunite formu</p>
        )}
        <hr />
        <div className="form">
          <div className="field">
            <label htmlFor="user">Username</label>
            <input
              type="text"
              name="user"
              placeholder="Username"
              value={formValues.user}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.user}</p>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              name="pass"
              placeholder="Password"
              value={formValues.pass}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.pass}</p>
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
