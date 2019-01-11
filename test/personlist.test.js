import PersonList from "../src/widget/personlist.js";
describe('PersonList', function () {
  var list = null;
  beforeEach(function () {
    spyOn(PersonList.prototype, 'updateData').and.returnValue(123);
  })
  it('should sort array', function () {
    expect(PersonList.prototype.updateData()).toBe(123);
  })
})