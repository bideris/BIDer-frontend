import React from "react";
import { Button } from "react-bootstrap";
import ReviewModal from "../common/ReviewModal";

function SingleUserLine(props) {
  return (
    <tr>
      <th>
        {props.name} {props.surname}
      </th>
      <th>{props.house}</th>
      <th>{props.address}</th>
      <th>
        <Button variant="danger" onClick={() => props.delete(props.index)}>
          Delete
        </Button>
        <ReviewModal id={props.index} wrResponse={props.wrResponse} />
      </th>
    </tr>
  );
}

export default SingleUserLine;
