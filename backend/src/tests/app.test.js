// Load supertest library
const request = require("supertest");
// Load exercises data
const exercises = require("../data/exercise-data");
// Load express server
const app = require("../app");

describe("path /exercises", () => {
    // beforeEach() will clear out exercises data
    beforeEach(() => {
        exercises.splice(0, exercises.length); // Clears out exercises data
    });

    // Testing GET /exercises endpoint
    describe("GET method", () => {
        it ("returns a 200 status code", async () => {
            const response = await request(app).get("/exercises");

            expect(response.status).toBe(200);
        });

        it ("responds with an array of exercises", async () => {
            const expected = [
                {
                    id: 1,
                    category: "push",
                    name: "Push Up",
                },
                {
                    id: 2, 
                    category: "pull",
                    name: "Pull Up",
                },
                {
                    id: 3, 
                    category: "knee",
                    name: "Squat",
                },
                {
                    id: 4, 
                    category: "hip",
                    name: "Deadlift",
                }
            ];

            exercises.push(...expected);

            const response = await request(app).get("/exercises");
            expect(response.body.data).toEqual(expected);
        })
    });

    // Test POST /exercises endpoint
    describe("POST method", () => {
        it("creates a new exercise and assigns id", async () => {
            const newExercise = {
                category: "pull",
                name: "3 point row",
            };
            const response = await request(app)
            .post("/exercises")
            .set("Accept", "application/json")
            .send({ data: newExercise });

            expect(response.status).toBe(201);
            expect(response.body.data).toEqual({
                id: 5,
                ...newExercise,
            });
        });

        it("returns 400 if name is missing", async () => {
            const response = await request(app)
            .post("/exercises")
            .set("Accept", "application/json")
            .send({ data: { category: "push" } });

            expect(response.status).toBe(400);
        });

        it("returns 400 if name is empty", async () => {
            const response = await request(app)
            .post("/exercises")
            .set("Accept", "application/json")
            .send({ data: { category: "push", name: "" } });

            expect(response.status).toBe(400);
        });
    });
});

