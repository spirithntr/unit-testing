import PersonList from "../src/widget/personlist.js";
import config from "./config.json";
// import containerInner from "./container.js";
describe('PersonList', function () {
  var list = null;
  var container = document.createElement('main');
  container.innerHTML = `<main class="person-list-container"> <header class="controls"> <select class="sorting"> <option value="normal" selected>Down</option> <option value="reverse">Up</option> </select> </header> <section class="person-list"> <ul class="view-list"> </ul> </section> <section class="modal-overlay hidden"> <article class="full-info hidden"></article> </section> <footer class="pagination"> <ul class="ranges"></ul> <ul class="pages"></ul> </footer> </main>`;
  // beforeEach(function () {
  //   spyOn(PersonList.prototype, 'updateData').and.returnValue(123);
  // })
  // it('should sort array', function () {
  //   expect(PersonList.prototype.updateData()).toBe(123);
  // })
  it('should build URL', function () {
    expect(PersonList.prototype._buildURL(config))
      .toBe("https://randomuser.me/api/?results=4&format=json&nat=us&gender=&password=&inc=gender,name,location,email,phone,picture");
  })
  it('updateData should return promise', function () {
    expect(PersonList.prototype.updateData()).toEqual(jasmine.any(Promise));
  })
})