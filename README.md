## Installation

1. Clone the repository: `git clone https://github.com/dpopek92/BookApp`
2. Navigate to the project directory: `cd BookApp`
3. Install dependencies: `npm install`

## Usage
1. Start the application: `npm run start:docker`
2. Open your web browser and go to `http://localhost:3000`

## Testing

1. Start tests with: `npm run start:test`

# Comments
1. In the real app, testing env should be separated from dev env
2. On BE, db logic should be moved to separated module using repository design pattern
3. Author in DB, in real app, should be in separated table with one-to-many relation
5. .env files shouldn't be in the repository
6. In the real app there should be multiple .envs for different enviroments
4. There are only cypress tests, because they can test whole scenarios, But in the real app there should be unit an integration tests also.
7. There should be cleaning db mechanism for testing and some fixtures
8. And the eslint/prettier configs are skipped in this app
