import "./main.css";
import Flag from "../hwimg/germany.png";
const Main = () => {
  return (
    <li className="card">
      <img className="card-img" src={Flag} />
      <div className="card-text">
        <h3 className="card-title">Germany</h3>
        <p className="card-desc">Population: 81,770,900</p>
        <p className="card-desc">Region: Europe</p>
        <p className="card-desc">Capital: Berlin</p>
      </div>
    </li>
  );
};
export default Main;
