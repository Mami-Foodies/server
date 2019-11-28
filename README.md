# MAMI FOODIES

An application that make you easier to find your favorite restaurant and your daily food menu in town. If you are a from aboard, dont worry, we have the apps to convert the currency for you. Enjoy !!!e

## 1. User

#### a. User Register

- **Endpoint**

  ```http
  POST /user/register
  ```

- **Body**

  username : String **(Required)**

  email : String **(Required)**

  password: String **(Required)**

- **Response**

  ```javascript
  {
      "id": "5de0471a48b33b2ec6bd94f6",
      "username": "nezuko",
      "email": "nezuko@gmail.com",
      "currency": "IDR"
  }
  ```

- **Error**

  - Error Empty Username

    ```javascript
    {
        "code": 400,
        "message": [
            "name field required to be filled"
        ]
    }
    ```

  - Error Empty Email

    ```javascript
    {
        "code": 400,
        "message": [
            "email field required to be filled"
        ]
    }
    ```

  - Errror Empty Password

    ```javascript
    {
        "code": 400,
        "message": [
            "password field required to be filled"
        ]
    }
    ```

  - Error Validation Email Unique

    ```javascript
    {
        "code": 400,
        "message": [
            "Email is already registered!"
        ]
    }
    ```



#### b. User Login

- **Endpoint**

  ```http
  POST /user/login
  ```

- **Body**

  email: String **(Required)**

  password: String **(Required)**

- **Body**

  email: String **(Required)**

  password: String **(Required)**

- **Response**

  ```javascript
  {
      "user": {
          "username": "nezuko",
          "email": "nezuko@gmail.com",
          "currency": "IDR"
      },
      "token": "access_token"
  }
  ```

- **Error**

  - Error Email Not Register in Database

    ```javascript
    {
        "code": 400,
        "message": "Your email is not registered"
    }
    ```

  - Error Password Wrong

    ```javascript
    {
        "code": 404,
        "message": "Password / Username is wrong"
    }
    ```

#### c. Google Oauth2

- **Endpoint**

  ```http
  POST /signin/google
  ```

- **Body**

  idToken: String **(Required)**

- **Response**

  ```javascript
  {
  	"user": {
  			"email": "danangbahari89@gmail.com",
  			"username": "Danang Putra",
  			"currency": "IDR"
  	},
  	"token": "access_token"
  }
  ```