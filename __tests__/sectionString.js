jest.unmock('../sectionString');

import sectionString from '../sectionString';

describe('Section string', () => {

  it('cuts a string into sections, given a text highlight', () => {
    const sections = sectionString("Code", "People love to code in javascript.", false);
    expect(sections.length).toBe(3);
    expect(sections[1].text).toBe('code');
    expect(sections[1].highlight).toBe(true);
    expect(sections[0].text).toBe("People love to ");
    expect(sections[2].text).toBe(' in javascript.');
  });

  it('cuts a string into sections, given a text highlight, with multiple matches', () => {
    const sections = sectionString("o", "People love to code in javascript.", false);
    expect(sections.length).toBe(9);
    expect(sections[1].text).toBe('o');
    expect(sections[1].highlight).toBe(true);
    expect(sections[0].text).toBe("Pe");
    expect(sections[8].text).toBe('de in javascript.');
  });

  it('Does not match strings when case does not match.', () => {
    const sections = sectionString("Code", "People love to code in javascript.", true);
    expect(sections.length).toBe(1);
    expect(sections[0].text).toBe("People love to code in javascript.");
  });

  it("Does not match strings when given an empty highlight", () => {
    const sections = sectionString("", "People love to code in javascript.", true);
    expect(sections.length).toBe(1);
    expect(sections[0].text).toBe("People love to code in javascript.");
  })

});
