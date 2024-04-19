import { DropdownItem, DropdownButton } from "react-bootstrap";

function NavbarDropdownButton() {
  return (
    <>
      <DropdownButton variant="danger" title="Exercise Library">
        <DropdownItem href="/push-exercises">Push Exercises</DropdownItem>
        <DropdownItem href="pull-exercises">Pull Exercises</DropdownItem>
        <DropdownItem href="/hip-exercises">Hip Exercies</DropdownItem>
        <DropdownItem href="/knee-exercises">Knee Exercises</DropdownItem>
        <DropdownItem href="/core-exercises">Core Exercises</DropdownItem>
      </DropdownButton>
    </>
  );
}

export default NavbarDropdownButton;
