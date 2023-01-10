const request = require("../_/request");
const { expect } = require("../_/chai");

describe("GET /health", async () => {
  it("Should return 200 with status healthy", async () => {
    const res = await request.get("/health");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.deep.equal({
      status: "healthy"
    })
  });
});