import Button from "../Elements/Button";
import InputForm from "../Elements/Input/Index";
const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Register"
        name="Register"
        type="text"
        placeholder="Enter your full name ..."
      />

      <InputForm
        label="Email"
        name="Email"
        type="email"
        placeholder="Enter your email ..."
      />

      <InputForm
        label="Password"
        name="Password"
        type="password"
        placeholder="****"
      />

      <InputForm
        label="PasswordConfirm"
        name="PasswordConfirm"
        type="password"
        placeholder="Confirm your password ..."
      />

      <Button variant="bg-blue-600 w-full">Register</Button>
    </form>
  );
};


export default FormRegister;