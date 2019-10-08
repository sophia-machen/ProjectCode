This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to run the code
Make sure you have npmjs
1. cd backend
2. npm install
3. cd ..
4. cd client
5. npm install
6. cd ..
7. npm install
8. npm start

## Create a MySQL Database if mine isn't working
1. Download MySQL Community Server 8.0.17 at https://dev.mysql.com/downloads/mysql/
2. Download MySQL Workbench 8.0.17 at https://dev.mysql.com/downloads/workbench/
3. Open Workbench and navigate to your local instance
4. Create a new schema in this local instance
5. Name the database
6. In backend/server.js, insert the new database name where my database is: "3308_project"

## Things I was NOT able to do
1. Get/Fetch method to get all available data in database
2. CRUD methods (create, read, update, delete) for the database
3. Did not know how to format the homepage so I just used an old one of mine
4. The login page is VERY basic and VERY ugly right now
5. The login page does not currently have the top NavBar which I wanted to include but was too tired to
6. I figured out how to have the login page drop down when you hover over the login icon, but I was too tired to implement it. Depends on which way you guys want the login form to be displayed
7. Do not have a register page
8. Very limited functionality, however it is completely full stack
9. Fix the GET /manifest.json 404 error which I believe is due to connecting to the database but not actually getting anything from it

## Libraries/Plugins/Stuff I Used
Front end
1. Create-React-App
2. React
3. React-Bootstrap
4. React-Router-Hash-Link
5. React-Router-Dom
6. React-Dom
7. Google Font: Poppins
Backend
1. MySQL2 - updated library for MySQL commands
2. Express
3. CORS
4. Body-Parser
5. Morgan


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.



