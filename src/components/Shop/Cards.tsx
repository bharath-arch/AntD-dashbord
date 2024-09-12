import withPremium from "../HOC/withPremium";

const Cards = ({ ...props }) => {
  return (
    <div>
      <ul key={props.id} style={{ listStyle: "none", display: "flex" }}>
        <li>{props.title}</li>
        <li>{props.price}</li>
      </ul>
    </div>
  );
};

const Component = withPremium(Cards);

export default Component;
