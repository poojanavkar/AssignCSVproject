var mainpath = require("../routes/postdata.js");
it("check upload api ", async done => {
  var request = { startDate: "1602227005001", endDate: "1602313340001" };
  // wait for  200ms
  setTimeout(() => {
    expect(mainpath.postdataFunction(request)).toBe("data inserted");
    done();
  }, 200);
});
