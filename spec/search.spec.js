var Request = require("request");

it("GET search/", done => {
  Request.get(
    'http://localhost:3001/search?startDate=1602227005001"&endDate="1602313340001" }',
    function(error, response, body) {
      expect(response.statusCode).toBe(200);
      expect(body).not.toBeUndefined();
      done();
    }
  );
});
