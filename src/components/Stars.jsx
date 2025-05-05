import OneStar from "./OneStar";

export default function Stars(props) {
  const { count = 0 } = props;
  console.log(count, ' - count');
  if (count < 1 || count > 5) {
    return console.log('Incorrect number of stars');
  }
  if (Number.isNaN(count)) {
    return console.log('The number of stars is not a number');
  }
  const starsList = [...Array(count)].map((_, index) => (OneStar(index)));
  return (<ul className="card-body-stars u-clearfix">{starsList}</ul>);
};
