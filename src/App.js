import React, { useState } from "react";
import { BehaviorSubject } from "rxjs";

export const App = props => {
  const heroes = [
    {
      name: "Captain America",
      secret_id: "Steve Rogers",
      team: "Avengers"
    },
    {
      name: "Hulk",
      secret_id: "Bruce Banner",
      team: "Avengers"
    },
    {
      name: "Spider Man",
      secret_id: "Peter Parker",
      team: "Avengers"
    },
    {
      name: "Ghost Rider",
      secret_id: "Johnny Blaze",
      team: "Champions"
    },
    {
      name: "Storm",
      secret_id: "Ororo Munroe",
      team: "X-Men"
    },
    {
      name: "Iceman",
      secret_id: "Bobby Drake",
      team: "X-Men"
    },
    {
      name: "Nighthawk",
      secret_id: "Kyle Richmond",
      team: "Squadron Supreme"
    }
  ];

  const [searchVal, setSearchVal] = useState("");
  let heroList = () => {};

  const handleChange = event => {
    setSearchVal(event.target.value);
  };

  const subj = new BehaviorSubject(searchVal);

  subj.subscribe(val => {
    heroList = heroes
      .filter(hero => {
        return val.length === 0
          ? true
          : hero.team.toLowerCase().includes(val.toLowerCase());
      })
      .map((hero, index) => <li key={index}>{hero.name}</li>);
  });

  return (
    <div className="App">
      <label for="teamSearch">
        Search by team:&nbsp;
        <input
          type="text"
          name="teamSearch"
          id="teamSearch"
          value={searchVal}
          onChange={handleChange}
        />
      </label>
      <ul>{heroList}</ul>
    </div>
  );
};
