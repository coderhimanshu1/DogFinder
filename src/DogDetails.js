import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dog = dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());

  return (
    <>
      <div className="DogDetails">
        <img src={dog.src} />
        <p>
          <b>Dog Name: </b>
          {dog.name}
        </p>
        <p>
          <b>Age:</b>
          {dog.age} years
        </p>
        <ul>
          <h3>Fun facts about {dog.name}:</h3>
          {dog.facts.map((fact) => (
            <li>
              <FontAwesomeIcon icon={faBone} />
              {fact}
            </li>
          ))}
        </ul>
      </div>
      <Link to="/dogs" className="DogDetails-link">
        Go Back!
      </Link>
    </>
  );
};

export default DogDetails;
