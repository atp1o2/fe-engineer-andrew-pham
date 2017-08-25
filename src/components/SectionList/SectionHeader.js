import React, { Component } from 'react';
import styled from 'styled-components';
import { Accordion, Panel } from 'react-bootstrap';
import SectionTopic from './SectionTopic';

const SectionHeaderDiv = styled.div`
  .section-header {
    img {
      width: 55px;
      height: 40px;
      margin: 0 1.5em;
    }
    p {
      color: #71b6f9;
      display: inline-block;
      cursor: pointer;
    }
  }
`;

class SectionHeader extends Component {
  render() {
    const header = (
      <div className="section-header row">
        <img src={this.props.section.imageUri} alt="Section Header" />
        <p>{this.props.section.name}</p>
      </div>
    );

    return (
      <SectionHeaderDiv>
          <Accordion>
            <Panel header={header} eventKey={this.props.section.id}>
              <SectionTopic exercises={this.props.section.exercises} />
            </Panel>
          </Accordion>
      </SectionHeaderDiv>
    );
  }
}

export default SectionHeader;
