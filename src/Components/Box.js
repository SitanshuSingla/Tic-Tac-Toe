import "./Box.css";

export default function Box(props) {
  let style = props.value === "X" ? "bt x" : "bt o";

  return (
    <button onClick={props.onClick} className={style}>
      {props.value}
    </button>
  );
}
