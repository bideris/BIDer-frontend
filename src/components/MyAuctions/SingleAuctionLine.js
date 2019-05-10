import React from "react";
import { Alert, Button } from "react-bootstrap";

function SingleAuctionLine(props) {
  return (
    <tr>
      <th>{props.name}</th>
      <th>{props.house}</th>
      <th>{props.status}</th>
      <th>
        {props.status === "YES" ? (
          <Alert variant="success">SUCCESS</Alert>
        ) : (
          <Alert variant="danger">FAILURE</Alert>
        )}
      </th>
      <th>
        <Button variant="success" onClick={() => props.accept(props.index)}>
          Accept
        </Button>
      </th>
    </tr>
  );
}

export default SingleAuctionLine;
