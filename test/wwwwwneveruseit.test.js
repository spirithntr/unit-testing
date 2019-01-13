import config from "./config.json";
import PersonList from "../src/widget/personlist.js";
import download from "./download.json";
import { get } from "https";

describe('mocks', function () {
  let view, list;
  beforeEach(function () {
    config.params.results = 3;
    spyOn(PersonList.prototype, 'updateData').and.returnValue(
      Promise.resolve(download.results)
    )
    view = document.createElement('div');
    document.body.appendChild(view);
    view.classList.add("person-list-container");
    view.innerHTML = '<header class="controls"> <select class="sorting"> <option value="normal" selected>Down</option> <option value="reverse">Up</option> </select> </header> <section class="person-list"> <ul class="view-list"> </ul> </section> <section class="modal-overlay hidden"> <article class="full-info hidden"></article> </section> <footer class="pagination"> <ul class="ranges"></ul> <ul class="pages"></ul> </footer>';
    this.list = new PersonList(config, view);
    // this.list.updateData().then(results => {
      //   list.personList = results;
      //   done();
      // });
    })
    it('should return list with 5 people', function (done) {
    // this.test = new PersonList(config, {});
    this.list.updateData().then(function (arr) {
      expect(arr.length).toBe(5)
      done();
    })
  })
  // afterEach(function () {
  //   view.remove();
  // })
})
describe('async', function () {
  beforeEach(function (done) {
    config.params.results = 4;
    this.test = new PersonList(config, {});
    this.res = this.test.updateData();
    done();
  })
  it('should return list with 4 elements', function (done) {
    // this.res = await this.test.updateData();
    this.res.then(function (list) {
      expect(list).toEqual(jasmine.any(Array));
      expect(list.length).toEqual(4);
      done();
    })
    // await expect(this.res.results.length).toBe(4);
  })
})
describe("async2", function() {
  it("should return list with 4 elements", function (done) {
    config.params.results = 2;
    this.test = new PersonList(config, {});
    this.test.updateData().then(function(list) {
      expect(list).toEqual(jasmine.any(Array));
      expect(list.length).toEqual(2);
      done();
    });
  });
});
describe("async3", function () {
  it("should work with async/await", async function () {
    config.params.results = 2;
    this.test = new PersonList(config, {});
    let res = await this.test.updateData();
    expect(res.length).toEqual(2);
  })
})
// describe("async error", function () {
//   it("should throw error with wrong url", function (done) {
 
//       this.personl = new PersonList(config, {});
//     this.personl.url = "http://asdfasd.add";
//     this.personl.updateData()
//       .then(function () {
//       expect(err.isRejected()).toBeTruthy();
//       done();
//     });
//     // this.personl.updateData().catch(function (e) {
//     //   console.log(1234,e);
//     //   expect(1).toBe(1);
//     //   expect(e).toBe(jasmine.any(ProgressEvent))
//     //   done()
//     //   })
 
//     // console.log(this.personl.personList);
//     // expect(err).toThrow('http://asdfasd');
//   })
// })