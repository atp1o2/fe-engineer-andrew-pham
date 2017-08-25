import React, { Component } from 'react';
import styled from 'styled-components';

const SectionSearchForm = styled.form`
  input {
    width: 98%;
    height: 3em;
    margin: 0.5em;
    padding-left: 1em;
  }
`;

class SectionSearch extends Component {
  render() {
    return (
      <SectionSearchForm>
        <input placeholder="Search" />
      </SectionSearchForm>
    );
  }
}

export default SectionSearch;
