import { Link } from "react-router-dom/cjs/react-router-dom.min";

const DogList = ({ dogs }) => {
  console.log(dogs);
  return (
    <>
      <div className="DogList">
        <div className="DogList-link">
          {dogs.map((dog) => (
            <Link to={`/dogs/${dog.name}`} className="DogList-dog">
              {dog.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default DogList;
