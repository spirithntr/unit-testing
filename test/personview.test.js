import PersonView from '../src/widget/personview.js'
describe('personview', function () {
  describe('trivial tests', function () {
    it('personview and its methods should be defined', function () {
      expect(PersonView).toBeDefined();
      expect(PersonView.prototype.showFullInfo).toBeDefined();
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
  })
  describe('addElement', function () {
    beforeAll(function () {
      let container;
      this.container = document.createElement('main');
    })
    beforeEach(function () {
      this.container.innerHTML = '';
    })
    it('should add element', function () {
      PersonView.prototype._addElement(this.container, 'div', {});
      expect(this.container.children.length).toBe(1);
    });
    it("should add one more element", function () {
      PersonView.prototype._addElement(this.container, "div", {});
      PersonView.prototype._addElement(this.container, "div", {});
      expect(this.container.children.length).toBe(2);
    });
    it("should delete all elements", function () {
      PersonView.prototype._removeChildren(this.container);
      expect(this.container.children.length).toBe(0);
    })
  })
})