import Button from "./Button";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      onClick={(e) => {
        // we created a back button using URL
        e.preventDefault();
        navigate(-1); // Number represent how much you want to go back or forth
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
