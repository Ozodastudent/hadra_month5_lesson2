import "./body.css";
const Body = () => {
  return (
    <div className="search-box">
      <form>
        <input className="input" placeholder="Search for a country…" />
      </form>
      <select className="select-btn">
        <option className="option-item" disabled selected>
          Filter by Region
        </option>
        <option className="option-item">Africa</option>
        <option className="option-item">America</option>
        <option className="option-item">Asia</option>
        <option className="option-item">Europe</option>
        <option className="option-item">Oceania</option>
      </select>
    </div>
  );
};
export default Body;
