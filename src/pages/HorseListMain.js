import React from "react";
import { Link } from "react-router-dom";
import ApiContext from "../ApiContext";
import { getHorsesForRider } from "../helper";
import AddButton from "../components/ui/AddButton";
import Horse from "../components/layout/Horse";
import "../styles/HorseListMain.css";
import "../styles/AddButton.css";

export default class HorseListMain extends React.Component {
  state = {
    shown: true,
  };
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = ApiContext;

  render() {
    const { riderId } = this.props.match.params;
    const { horses = [] } = this.context;
    const horsesForRider = getHorsesForRider(horses, riderId);
    return (
      <section className="HorseListMain">
        <ul>
          {horsesForRider.map((horse, index) => (
            <li key={horse.id}>
              {/* <InlineIcon icon={horseIcon} /> */}
              <Horse
                id={horse.id}
                name={horse.name}
                showname={horse.showname}
                age={horse.age}
                stall={horse.stall}
                breed={horse.breed}
              />
            </li>
          ))}
        </ul>
        <div className="button-container">
          <AddButton
            tag={Link}
            to="/add-horse"
            type="button"
            className="add-horse-button"
          >
            Add Horse
          </AddButton>
        </div>
      </section>
    );
  }
}
