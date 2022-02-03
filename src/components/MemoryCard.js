import React from "react";
import "./MemoryCard.css";

// function clickHandler() {
//   this.setState({ isFlipped: !this.state.isFlipped });
// }

class MemoryCard extends React.Component {
  render() {
    let memoryCardInnerClass = this.props.isFlipped
      ? "MemoryCardInner flipped"
      : "MemoryCardInner";
    return (
      <div>
        <div className="MemoryCard">
          <div className={memoryCardInnerClass} onClick={this.props.pickCard}>
            <div className="MemoryCardBack">
              <img src={require("../images/digital.png")} alt="" />
            </div>
            <div className="MemoryCardFront">{this.props.symbol}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MemoryCard;
