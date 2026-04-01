import request from "supertest";
import app from "./index.js";

// describe("get all users", () => {
//   it("should return all users", async () => {
//     const res = await request(app).get("/get-all-users");
//     expect(res.status).toBe(200);
//     expect(res.body.message).toBe("success");
//   });
// });

describe("create user", () => {
  it("should create a new user", async () => {
    const res = await request(app).post("/create-user").send({
      name: "test",
      email: "test@example.com",
      password: "password",
    });
    expect(res.status).toBe(201);
    expect(res.body.message).toBe("User created successfully");
  });
});

// describe("update user", () => {
//   it("should update an existing user", async () => {
//     const res = await request(app)
//       .put("/update-user/64a1b2c3d4e5f67890abcdef")
//       .send({
//         name: "updated test",
//         email: "updated@example.com",
//         password: "updatedpassword",
//       });
//     expect(res.status).toBe(200);
//     expect(res.body.message).toBe("User updated successfully");
//   });
// });

// describe("delete user", () => {
//   it("should delete an existing user", async () => {
//     const res = await request(app).delete(
//       "/delete-user/64a1b2c3d4e5f67890abcdef",
//     );
//     expect(res.status).toBe(204);
//     expect(res.body.message).toBe("User deleted successfully");
//   });
// });

afterAll(() => {
  app.close();
});
