import { DropdownItem, DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavbarDropdownButton() {
  const navigate = useNavigate(); 

  function handleClick(exercise) {
    console.log("handle click clicked")
    navigate(`/${exercise}-exercises`);
  }
  
  return (
    <>
      <DropdownButton variant="danger" title="Exercise Library">
        <DropdownItem onClick={() => handleClick("push")}>Push Exercises</DropdownItem>
        <DropdownItem onClick={() => handleClick("pull")}>Pull Exercises</DropdownItem>
        <DropdownItem onClick={() => handleClick("hip")}>Hip Exercies</DropdownItem>
        <DropdownItem onClick={() => handleClick("knee")}>Knee Exercises</DropdownItem>
        <DropdownItem onClick={() => handleClick("core")}>Core Exercises</DropdownItem>
      </DropdownButton>
    </>
  );
}

export default NavbarDropdownButton;
