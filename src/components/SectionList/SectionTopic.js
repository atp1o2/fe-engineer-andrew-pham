import React, { Component } from 'react';
import styled from 'styled-components';
import { getDateTime } from '../../helpers/timestampParser';

const SectionTopicDiv = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 1em;
  background-color: #f2f6fa;

  img {
    width: 55px;
    height: 40px;
    margin-left: 2em;
  }

  .section-text {
    margin-left: 0.5em;
    p { color: gray; }
  }
`;

class SectionTopic extends Component {
  render() {
    const sectionTopicList = this.props.exercises.map((exercise) =>
      <SectionTopicDiv key={exercise.id} className="row">
        <img src={exercise.imageUri} alt="Section Topic" />
        <div className="section-text">
          <a>{exercise.name}</a>
          <p>PEER REVIEW DUE DATE {getDateTime(exercise.peerReviewDue)}</p>
        </div>
      </SectionTopicDiv>
    )

    return (
      <div>
        {sectionTopicList}
      </div>
    );
  }
}

export default SectionTopic;
