import React, { Component } from "react";

class DataTab extends Component {
  renderAlgorithmData = (algorithm) => {
    if (algorithm === "dijkstra") {
      return (
        <table>
          <tbody>
            <tr>
              <td>
                <p style={{ fontWeight: "bold", marginRight: "5px" }}>
                  Dijkstra:
                </p>
              </td>
              <td>
                <p>Finds the shortest path, supports weighted nodes</p>
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
  };

  renderShortestDistance = (shortestDistance, animateCompletion) => {
    const displayDistance =
      animateCompletion === 4 && shortestDistance !== 0
        ? shortestDistance
        : "N/A";
    return (
      <div>
        <p style={{ fontWeight: "bold" }}>
          {"Shortest Distance: " + displayDistance}
        </p>
      </div>
    );
  };
  render() {
    const { shortestDistance, animateCompletion, algorithm } = this.props;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "20px",
          fontSize: "20px",
        }}
      >
        <div>{this.renderAlgorithmData(algorithm)}</div>
        <div>
          {this.renderShortestDistance(shortestDistance, animateCompletion)}
        </div>
      </div>
    );
  }
}

export default DataTab;
