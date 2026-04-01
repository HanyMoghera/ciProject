describe("get all users", () => {
  it("get all users", () => {
    cy.request("GET", "http://127.0.0.1:3000/get-all-users").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body.success).to.eq(true);
      },
    );
  });
});

describe("add new user", () => {
  it("should add a new user", () => {
    cy.request("POST", "http://127.0.0.1:3000/create-user", {
      name: "Hany",
      email: "hany@example.com",
      password: "123456",
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.success).to.eq(true);
    });
  });
});

describe("update user", () => {
  it("should update an existing user", () => {
    cy.request(
      "PUT",
      "http://127.0.0.1:3000/update-user/69c3c07fb2d70ba04208298f",
      {
        name: "Hany Updated",
        email: "updatedEmail@gmail.com",
        password: "654321",
      },
    ).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.success).to.eq(true);
    });
  });
});

describe("delete user", () => {
  it("should delete an existing user", () => {
    cy.request(
      "DELETE",
      "http://127.0.0.1:3000/delete-user/69c3c07fb2d70ba04208298f",
    ).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.success).to.eq(true);
    });
  });
});
