// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReview: 0}

  onClickLeftArrow = () => {
    const {activeReview} = this.state

    if (activeReview > 0) {
      this.setState(prevState => ({activeReview: prevState.activeReview - 1}))
    }
  }

  onClickRightArrow = () => {
    const {activeReview} = this.state
    const {reviewsList} = this.props

    if (activeReview < reviewsList.length - 1) {
      this.setState(prevState => ({activeReview: prevState.activeReview + 1}))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {activeReview} = this.state
    const {reviewsList} = this.props
    const currReview = reviewsList[activeReview]

    return (
      <div className="bg-con">
        <div className="card">
          <h1 className="head">Reviews</h1>
          <div className="card1">
            <button
              type="button"
              data-testid="leftArrow"
              className="arrow-button"
              onClick={this.onClickLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow"
              />
            </button>
            {this.renderActiveReview(currReview)}
            <button
              type="button"
              data-testid="rightArrow"
              className="arrow-button"
              onClick={this.onClickRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
