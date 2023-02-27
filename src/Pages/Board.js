import Box from "../Components/Box";
import "./Board.css";
export default function Board(props) {
  let pwin = props.pwin(props.item);

  return (
    <div class="con">
      <span className="x1"> X-{props.xcount}</span>
      <span className="y1"> O-{props.ycount}</span>

      {pwin && <div className="w">Player {pwin} Won</div>}
      <div className="row">
        {props.item.map((value, ind) => (
          <div className="col-3">
            {" "}
            <Box
              value={value}
              onClick={() => value === null && props.onClick(ind)}
            />
          </div>
        ))}
      </div>

      <center>
        {" "}
        <button onClick={props.gameover} className="btn btn-danger mt-3">
          Rest
        </button>
      </center>
    </div>
  );
}
