# react-native-text-highlight
Small library for highlighting text in react-native.

## Installation

`npm install react-native-text-highlight --save`

## Usage
``` jsx
import TextHighlight from 'react-native-text-highlight';
...
<TextHighlight
  highlight="code"
  highlightStyle={{
    color: 'green'
  }}
  style={{
    color: 'red'
  }}
>
  People love to code in javascript.
</TextHighLight>
```

| Property | Description | default  |
| -------- | ----------- | -------- |
| highlight | The key that will be searched for in the str. |   null |
| caseSensitive | Determines if the search should be case sensitive | false |

### Examples

- str: "People love to code in javascript."
- highlight: "code"
- caseSentive: false
- Result: "People love to **code** in javascript."

### Todo

- [X] Change the component to accept the str as a child to the component instead of property.
- [ ] Add an Example project.
- [ ] Add Screenshot of the component being used.
