# API Documentation

## Endpoint: `/users/register`

### Description
This endpoint is used to register a new user. It validates the input data, hashes the password, and stores the user in the database. Upon successful registration, it returns a JSON Web Token (JWT) and the user details.

### Method
`POST`

### Request Body
The request body should be in JSON format and include the following fields:

| Field             | Type   | Required | Description                                   |
|--------------------|--------|----------|-----------------------------------------------|
| `fullname`         | Object | Yes      | An object containing the user's full name.    |
| `fullname.firstname` | String | Yes      | The first name of the user (min 3 characters). |
| `fullname.lastname`  | String | No       | The last name of the user (min 3 characters).  |
| `email`            | String | Yes      | The email address of the user (valid format). |
| `password`         | String | Yes      | The password for the user (min 6 characters). |

### Example Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword123"
}