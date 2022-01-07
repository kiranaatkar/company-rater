import React from "react";

class Company extends React.Component {
  constructor() {
    super();
    this.state = {
      upvote: 0,
      downvote: 0,
      percentage: 0,
      superlike: 0,
    };
  }

  onUpvote() {
    let newUpvote = this.state.upvote + 1;
    let newPercentage = (newUpvote * 100) / (newUpvote + this.state.downvote);

    this.setState({ upvote: newUpvote });
    this.setState({ percentage: newPercentage });
  }

  onDownvote() {
    let newDownvote = this.state.downvote + 1;
    let newPercentage =
      (this.state.upvote * 100) / (this.state.upvote + newDownvote);

    this.setState({ downvote: newDownvote });
    this.setState({ percentage: newPercentage });
  }

  onSuperLike() {
    let newLike = this.state.upvote * 2;
    this.setState({ upvote: newLike });
  }

  render() {
    return (
      <div>
        <h1>{this.props.company.name}</h1>
        <h3>{this.props.company.email}</h3>
        <h3>{this.props.company.stock}</h3>
        <button
          onClick={() => {
            this.onUpvote();
          }}
        >
          Upvote
        </button>
        <button
          onClick={() => {
            this.onDownvote();
          }}
        >
          Downvote
        </button>

        <button
          onClick={() => {
            this.onSuperLike();
          }}
        >
          Superlike
        </button>

        <p>Upvotes: {this.state.upvote}</p>
        <p>Downvotes: {this.state.downvote}</p>
        <p>Percentage upvoted: {this.state.percentage.toFixed(2)}%</p>
      </div>
    );
  }
}

export default Company;
