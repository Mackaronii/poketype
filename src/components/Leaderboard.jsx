import React from "react";
import Table from "react-bootstrap/Table";

function Leaderboard(props) {
  const leaderboard = props.leaderboard;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Username</th>
          <th>WPM</th>
          <th>ACC (%)</th>
        </tr>
      </thead>
      <tbody>
        {leaderboard.map((entry, i) => (
          <tr key={i}>
            <td>{entry["date"]}</td>
            <td>{entry["username"]}</td>
            <td>{entry["wpm"]}</td>
            <td>{entry["acc"]}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Leaderboard;
