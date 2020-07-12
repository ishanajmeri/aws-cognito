# React-AWS-Cognito-authentication

## Features

- uses:
  - only React(create-react-app)
  - aws-amplify
  - ant-design
- features:
  - Sign In
  - Sign up
  - Sign out
  - Password forget
  - Password verification
  - Protected Routes with Authorization

## Installation

- `git clone git@github.com:ishanajmeri/aws-cognito.git`
- `cd aws-cognito`
- `npm install`
- `npm start`
- visit http://localhost:3000

## AWS-Cognito Configuration

- In `config.json` add the details about the aws user pool.

```js
{
  "cognito": {
    "REGION": "",
    "USER_POOL_ID": "",
    "APP_CLIENT_ID": ""
  }
}

```
