import { Form, Link } from "react-router-dom";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="john" labelText="Name" />
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
          defaultValue="smith"
        />
        <FormRow
          type="text"
          name="location"
          defaultValue="earth"
          labelText="Location"
        />
        <FormRow
          type="email"
          name="email"
          defaultValue="john@gmail.com"
          labelText="Email"
        />
        <FormRow
          type="password"
          name="password"
          defaultValue="secret123"
          labelText="Password"
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
