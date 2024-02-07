import reactImage from "../../assets/react-core-concepts.png";
const reactDescription = ["Fundamentals", "Crucial", "Core"];
import "./Header.css";
function genRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1));
}
export function Header() {
  const description = reactDescription[genRandomInt(2)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
