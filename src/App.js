import "./App.css";
import Signup from "./components/Signup";
// import { useFormik } from "formik";

function App() {
  // const { handleChange, handleSubmit, values } = useFormik({
  //   initialValues: {
  //     firstName: "mustafa",
  //     lastName: "yılmaz",
  //     email: "musta.yilmaz@gmail.com",
  //     gender: "male",
  //     hobies: [],
  //     country: "",
  //   },
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });
  return (
    <div className="App">
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          placeholder="Jane"
        />

        <br />
        <br />

        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          placeholder="doe"
        />

        <br />
        <br />

        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="email"
        />
        <br />
        <br />

        <span>Male</span>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={values.gender === "male"}
          onChange={handleChange}
        />

        <span>Female</span>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={values.gender === "female"}
          onChange={handleChange}
        />
        <br />
        <br />
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Football"
            onChange={handleChange}
          />
          Football
        </div>

        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Cinema"
            onChange={handleChange}
          />
          Cinema
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Photography"
            onChange={handleChange}
          />
          Photography
        </div>
        <br />
        <br />
        <select name="country" value={values.country} onChange={handleChange}>
          <option value="turkey">Turkey</option>
          <option value="england">England</option>
          <option value="usa">USA</option>
        </select>
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />

        <code>{JSON.stringify(values)}</code>
      </form> */}

      <Signup />
    </div>
  );
}

export default App;
