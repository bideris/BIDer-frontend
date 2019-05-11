import React from "react";
import { Button } from "react-bootstrap";
import DateCountdown from "react-date-countdown-timer";

function SingleActiveAuctionLine(props) {
  return (
    <tr>
      <th>{props.name}</th>
      <th>{props.house}</th>
      <th>{props.sum}</th>
      <th>
        <DateCountdown dateTo={props.startDate} />
      </th>
      <th>
        <Button
          disabled={props.bidStarted}
          variant="success"
          onClick={() => props.participate(props.index)}
        >
          Participate
        </Button>
      </th>
    </tr>
  );
}

export default SingleActiveAuctionLine;
