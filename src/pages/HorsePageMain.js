import React from "react";
import ApiContext from "../ApiContext";
import Horse from "../components/layout/Horse";
import { findHorse } from "../helper";
import { Link } from "react-router-dom";
import "../styles/HorsePageMain.css";

export default class HorsePageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = ApiContext;

  handleDeleteHorse = (horseId) => {
    this.props.history.push(`/`);
  };
  render() {
    const { horses = [] } = this.context;
    const { horseId } = this.props.match.params;
    const horse = findHorse(horses, horseId) || { age: "", stall: "" };
    return (
      <section className="HorsePageMain">
        <Horse
          id={horse.id}
          name={horse.name}
          age={horse.age}
          stall={horse.stall}
          showname={horse.showname}
          onDeleteHorse={this.handleDeleteHorse}
        />
        <Link to={`/edit/${horse.id}`}>
          <button className="delete">Edit Horse</button>
        </Link>
      </section>
    );
  }
}
