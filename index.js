import React, {
  PropTypes,
} from 'react';

import {
  Text,
} from 'react-native';

import sectionString from './sectionString';

export default class TextHighLight extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {
      highlight,
      caseSensitive,
      str,
      highlightStyle,
    } = this.props;

    const sections = sectionString(highlight, str, caseSensitive);
    const renderedText = sections.map((section) => {
      var style = (section.highlight == true ? highlightStyle : null);
      return <Text style={style}>{section.text}</Text>;
    });

    return (
      <Text {...this.props}>{renderedText}</Text>
    );
  }
}

TextHighLight.propTypes = {
  highlight: PropTypes.string,
  str: PropTypes.string,
  caseSensitive: PropTypes.bool
};

TextHighLight.defaultProps = {
  highlight: null,
  str: '',
  caseSensitive: false
};
