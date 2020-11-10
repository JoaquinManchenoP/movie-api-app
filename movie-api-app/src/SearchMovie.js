import React, { useState } from "react";

export default function SearchMovie() {
  const [input, setInput] = useState("");

  let nba = [
    { name: "Lebron James", team: "Lakers" },
    { name: "Jason Tatum", team: "Celtics" },
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    console.log(input);
  };

  if (input.length > 0) {
    nba = nba.filter((i) => {
      return i.name.match(input);
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="search for a player"
        />
      </form>

      {nba.map((player, index) => {
        return (
          <div key={index}>
            <ul>
              <li>
                {player.name} - {player.team}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
