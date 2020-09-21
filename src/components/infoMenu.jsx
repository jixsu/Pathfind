import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWeightHanging,
  faCircle,
  faPlayCircle,
  faStopCircle,
  faSquareFull,
} from "@fortawesome/free-solid-svg-icons";
import "../css/infoMenu.css";

const InfoMenu = () => {
  return (
    <div className="info-menu">
      <div className="legend">
        <div className="legend legend-item">
          <FontAwesomeIcon icon={faPlayCircle} size="2x" />
          <p className="legend-item-label">Start</p>
        </div>
        <div className="legend legend-item">
          <FontAwesomeIcon icon={faStopCircle} size="2x" />
          <p className="legend-item-label">End</p>
        </div>
        <div className="legend legend-item">
          <FontAwesomeIcon
            icon={faSquareFull}
            className="barrier-icon"
            size="2x"
          />
          <p className="legend-item-label">Barrier</p>
        </div>
        <div className="legend legend-item">
          <FontAwesomeIcon
            icon={faWeightHanging}
            size="2x"
            className="weight-icon"
          />
          <p className="legend-item-label">Weight</p>
        </div>
        <div className="legend legend-item">
          <FontAwesomeIcon
            icon={faCircle}
            size="2x"
            className="checkpoint-icon"
          />
          <p className="legend-item-label">Checkpoint</p>
        </div>
        <div className="legend legend-item">
          <FontAwesomeIcon
            icon={faSquareFull}
            className="visited-icon"
            size="2x"
          />
          <p className="legend-item-label">Visited</p>
        </div>
        <div className="legend legend-item">
          <FontAwesomeIcon
            icon={faSquareFull}
            className="shortest-path-icon"
            size="2x"
          />
          <p className="legend-item-label">Shortest Path</p>
        </div>
      </div>
      <div className="quick-guide">
        <h2 className="header">Quick Guide</h2>
        <table className="menu-table">
          <tr>
            <td className="table-column">
              <div className="list-item">
                <p className="list-item-label">
                  Select an algorithm along the top left and click visualize!
                </p>
                <div className="content-separator" />
              </div>

              <div className="list-item">
                <p className="list-item-label">
                  Select an addon on the top right and left click/drag along the
                  board to add addons.
                </p>
                <div className="content-separator" />
              </div>
              <div className="list-item">
                <p className="list-item-label">
                  Right click/drag along the board to remove any addons.
                </p>
              </div>
            </td>
            <td className="table-column">
              <div className="list-item">
                <p className="list-item-label">
                  Click reset to change the board or perform another
                  visualization.
                </p>
                <div className="content-separator" />
              </div>
              <div className="list-item">
                <p className="list-item-label">
                  Click and drag the start and end nodes to move the starting
                  and ending points of the visualization.
                </p>
                <div className="content-separator" />
              </div>
              <div className="list-item">
                <p className="list-item-label">
                  While visualizing, changing the board will be disabled. Click
                  reset to make any changes.
                </p>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default InfoMenu;
