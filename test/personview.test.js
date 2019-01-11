// console.log(window.__html__)
import PersonView from '../src/widget/personview.js'

// var elm = window.__html__["test.htm"];
describe('personview', function () {
  describe('trivial tests', function () {
    it('personview and its methods should be defined', function () {
      expect(PersonView).toBeDefined();
      expect(PersonView.prototype.showFullInfo).toBeDefined();
      // expect(sentenceCase('spencer')).toBe('Spencer');
    })
  })
  describe('checking private methods', function () {
    it("sentenceCase should be defined", function () {
      expect(PersonView.prototype._sentenceCase).toBeDefined();
    });
    it("sentenceCase with param peter should return Peter", function () {
      expect(PersonView.prototype._sentenceCase('peter')).toBe('Peter');
      expect(PersonView.prototype._sentenceCase('PETER')).toBe('PETER');
    })
    it("parseAddress convert 4091 lakeshore rd to 4091 Lakeshore Rd", function () {
      expect(PersonView.prototype._parseAddress('4091 lakeshore rd')).toBe(' 4091 Lakeshore Rd');
    })
    let container = {
      'children': [],
      'removeChild': function () {
        this.children.shift();
      }
    }
    xit("removeChildren should delete elements in container", function () {
      // expect(PersonView.prototype._removeChildren(container));
    })
  })
})
// describe('template', function () {
//   it('should expose the templates to __html__', function () {
//     document.body.innerHTML = __html__['index.html'];
//     expect(document.querySelector(".person-list-container")).toBeDefined();
//   })
// })