var mainpath = require("../routes/search.js");
it("check search api ", async done => {
  var request = {
    params: { startDate: "1602227005001", endDate: "1602313340001" }
  };
  expect(mainpath.searchFunction(request)).not.toBeUndefined();
  done();
  setTimeout(() => {
    expect(mainpath.postdataFunction(request)).toBe("data inserted");
    done();
  }, 200);
});
