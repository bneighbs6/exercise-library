// Load supertest library
const request = require("supertest");
// Load exercises data
const kneeExercises = require("../db/exercise-data/kneeExercises");
// Load express server
const app = require("../app");

describe("path /knee-exercises", () => {
    beforeEach(() => {
      kneeExercises.splice(0, kneeExercises.length); // Clears out the pastes data
    });

    describe("GET Method", () => {
        it("returns an array of knee exercises", async () => {
            const response = await request(app).get("/knee-exercises");

            expect(response.status).toBe(200);
        })
    })
  });
