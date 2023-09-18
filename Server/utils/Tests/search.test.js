const {
  searchProdsCategory,
  searchAutoComplete,
} = require("../../controllers/search-controller");
const request = require("supertest");
const express = require("express");

const app = express();
const Category = require("../../model/Categories");
const Product = require("../../model/Products");

describe("searchProdsCategory", () => {
  it("should respond with a 200 status code", async () => {
    const response = await request(app)
      .get("/api/v1/beta-mart/search")
      .query({ name: "laptop" });

    expect(response.statusCode).toBe(200);
  });
});

// it("should respond with the expected response data", async () => {
//   const expectedResponse = {
//     /* Define your expected response data here */
//   };

//   const response = await request(app).post("/api/your-endpoint").send({
//     /* Your request body here */
//   });

//   expect(response.body).toEqual(expectedResponse);
// });
