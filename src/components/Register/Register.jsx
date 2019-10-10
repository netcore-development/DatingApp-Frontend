import React from "react";
import Button from "../UI/Button";

const Register = ({onCancel}) => {
  return (
    <div>
      <h2 className="text-center text-primary">Sign Up</h2>
      <hr/>
      <form>
          <div className="form-group text-center">
          <Button
              inputClasses="btn-info btn-lg"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
      </form>
    </div>
  );
};

export default Register;
