export default (highlight, origStr, caseSensitive) => {

  //Sanity check
  if (!highlight || !origStr) {
    return [{text: origStr}];
  }

  var indices = [];
  var startIndex = 0;
  var searchStrLen = highlight.length;
  var index;
  var str = origStr;

  if (!caseSensitive) {
      str = str.toLowerCase();
      highlight = highlight.toLowerCase();
  }

  while ((index = str.indexOf(highlight, startIndex)) > -1) {
      if (index > 0) {
        indices.push({
          text: origStr.substring(startIndex, index)
        });
      }
      startIndex = index + searchStrLen;
      indices.push({
        highlight: true,
        text: origStr.substring(index, startIndex)
      });
  }
  if (startIndex < str.length) {
    indices.push({text: origStr.substring(startIndex, str.length)});
  }
  return indices;
}
