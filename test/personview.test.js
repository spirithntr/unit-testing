// console.log(window.__html__)
import sentenceCase from '../src/widget/personview.js'
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
  describe('accessing private methods', function () {
    it('', function () {
    })
  })
})
// describe('template', function () {
//   it('should expose the templates to __html__', function () {
//     document.body.innerHTML = __html__['index.html'];
//     expect(document.querySelector(".person-list-container")).toBeDefined();
//   })
// })