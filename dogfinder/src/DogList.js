import { Link } from "react-router-dom/cjs/react-router-dom.min";

const DogList = ({ dogs }) => {
  console.log(dogs);
  return (
    <>
      <div className="DogList">
        {dogs.map((dog) => (
          <Link to={`/dogs/${dog.name}`} className="DogList-dog">
            {dog.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default DogList;
