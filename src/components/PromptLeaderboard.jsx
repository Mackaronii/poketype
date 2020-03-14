import React from "react";
import Table from "react-bootstrap/Table";

function PromptLeaderboard(props) {
  const leaderboard = props.leaderboard;

  // Convert returned date strings into Date objects
  leaderboard.map(entry => {
    entry["date"] = new Date(entry["date"]);
  });

  // Sort leaderboard by WPM
  leaderboard
    .sort((a, b) => {
      return a.wpm - b.wpm || a.acc - b.acc;
    })
    .reverse();

  return (
    <div>
      <p>Leaderboard (Prompt ID: {props.promptId})</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>WPM</th>
            <th>ACC (%)</th>
            <th>Attempted On</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{entry["username"]}</td>
              <td>{entry["wpm"]}</td>
              <td>{entry["acc"]}</td>
              <td>{entry["date"].toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default PromptLeaderboard;
