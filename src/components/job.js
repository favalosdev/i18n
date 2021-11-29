import React from "react";
import { FormattedDate, FormattedMessage } from "react-intl";

const Job = (props) => {

  let units;
  let salary = parseInt(props.offer.salary);

  if (salary === 1) {
    units = <FormattedMessage id="MillionSingular"/>
  } else {
    units = <FormattedMessage id="MillionPlural"/>
  }

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{props.offer.salary} {units}</td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>{(props.offer.views).toLocaleString()}</td>
    </tr>
  );
};

export default Job;
