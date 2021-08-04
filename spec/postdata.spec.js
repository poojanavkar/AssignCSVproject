var Request = require("request");

var reqbody = { startDate: "1602227005001", endDate: "1602313340001" };
var postdata = {
  uri: "http://localhost:3001/postdata",
  method: "post",
  body: reqbody
};
describe("postdata/", () => {
  beforeAll(done => {
    Request.post(postdata, (error, response, body) => {
      done();
      expect(response.statusCode).toBe(200);
      expect(body).toBe("data inserted");
    });
  });
});
