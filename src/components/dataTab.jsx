import React, { Component } from "react";

class DataTab extends Component {
  renderAlgorithmDetails = () => {
    const { algorithm } = this.props;
    let algorithmTitle = "";
    let algorithmBody = "";
    if (algorithm === "dijkstra") {
      algorithmTitle = "Dijkstra:";
      algorithmBody = "Finds the shortest path, supports weighted nodes";
    } else if (algorithm === "a*") {
      algorithmTitle = "A*";
      algorithmBody =
        "Finds the shortest path, supports weighted nodes, improves on Dijkstra's by adding an additional heuristic";
    }
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <p style={{ fontWeight: "bold", marginRight: "5px" }}>
                {algorithmTitle}
              </p>
            </td>
            <td>
              <p>{algorithmBody}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  renderShortestDistance = () => {
    const { shortestDistance, animateCompletion } = this.props;
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

  renderRuntime = () => {
    const { runtime, animateCompletion } = this.props;
    const displayRuntime =
      animateCompletion === 4 && runtime !== 0
        ? runtime.toString() + "ms"
        : "N/A";
    return (
      <div>
        <p style={{ fontWeight: "bold" }}>{"Runtime: " + displayRuntime}</p>
      </div>
    );
  };

  renderNodesVisited = () => {
    const { nodesVisited, animateCompletion } = this.props;
    const displayNodesVisited =
      animateCompletion === 4 && nodesVisited !== 0 ? nodesVisited : "N/A";
    return (
      <div>
        <p style={{ fontWeight: "bold" }}>
          {"Nodes Visited: " + displayNodesVisited}
        </p>
      </div>
    );
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "20px",
          fontSize: "20px",
        }}
      >
        <div>{this.renderAlgorithmDetails()}</div>
        <div>{this.renderShortestDistance()}</div>
        <div>{this.renderRuntime()}</div>
        <div>{this.renderNodesVisited()}</div>
      </div>
    );
  }
}

export default DataTab;
