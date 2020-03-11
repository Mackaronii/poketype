import React from "react";
import Table from "react-bootstrap/Table";

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function Leaderboard(props) {
  const leaderboard = props.leaderboard;

  // Convert returned date strings into Date objects
  leaderboard.map(entry => {
    entry["date"] = new Date(entry["date"]);
  });

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Attempted On</th>
          <th>Username</th>
          <th>WPM</th>
          <th>ACC (%)</th>
        </tr>
      </thead>
      <tbody>
        {leaderboard.map((entry, i) => (
          <tr key={i}>
            <td>{entry["date"].toLocaleString()}</td>
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
