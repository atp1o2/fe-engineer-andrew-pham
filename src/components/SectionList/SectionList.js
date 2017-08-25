import React, { Component } from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader';
import SectionSearch from './SectionSearch';

const SectionListContainer = styled.div`
  margin-top: 1em;
  background-color: #FFFFFF;
  .header {
    min-height: 4em;
    p {
      margin-left: 0.3em;
      margin-top: 1.2em;
      color: #8293b9;
    }
    span {
      margin-right: 2em;
    }
  }
`;

class SectionList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      sections: []
    }
  }

  componentDidMount () {
    this.setState({
      loading: false,
      sections: this.props.sections,
    })
  }

  render () {
    let SectionHeaderList = this.state.sections.map((section) =>
      <SectionHeader section={section} key={section.id} />
    )

    if (this.state.loading) {
      return (
        <div>loading...</div>
      );
    } else {
      return (
        <SectionListContainer className="col-xs-12 start-xs">
          <div className="header row">
            <div className="col-xs-12 col-sm-8">
              <p><span>&#9776;+</span>ACTIVE SECTIONS</p>
            </div>
            <div className="col-xs-12 col-sm-4">
              <SectionSearch />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 pa-0">
              {SectionHeaderList}
            </div>
          </div>
        </SectionListContainer>
      );
    }
  }
}

export default SectionList;
