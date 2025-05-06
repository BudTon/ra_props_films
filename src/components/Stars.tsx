import React from 'react';
import OneStar from "./OneStar";
import StarsProps from "./StarsProps "

export default function Stars({ count = 0 }: StarsProps) {
  console.log(count, ' - count');
  if (count < 1 || count > 5) {
    return console.log('Incorrect number of stars');
  }
  if (Number.isNaN(count)) {
    return console.log('The number of stars is not a number');
  }
  const starsList = Array.from({ length: count }, (_, index) => {
    return <OneStar index={index} />;
  });
  return (<ul className="card-body-stars u-clearfix">{starsList}</ul>);
};
