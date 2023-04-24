![chrome-capture-2023-3-24-min](https://user-images.githubusercontent.com/108536371/234103969-59ebeaf1-8977-4ae6-9ba4-673b65d4678d.gif)
 
# BounceTravels
A country-information generator with a clean travel company design that is mobile friendly. Made in April 2023.
This is a react front end application that communicates with a NodeJS backend running Express. Which interacts with the https://restcountries.com/#rest-countries API. Cypress was used for component testing. Code is commented out in a clean and simple manner. 
Deployed on netlify: https://country-info-generator.netlify.app/

## Getting Started

Instructions for setting up the project locally:

To set up the project locally, make sure you have the following software installed on your machine:

-Node.js (v14.x.x or newer)
-npm (v6.x.x or newer) or yarn (v1.x.x or newer)
-Git
Then, follow these steps:

1.Clone the repository:
Open your terminal/command prompt and run the following command to clone the project repository: git clone https://github.com/fabianwolski/BounceTravels.git
Replace fabianwolski with your GitHub username if you forked the repository.

2.Navigate to the project directory:
Use the terminal/command prompt to navigate to the cloned repository: cd BounceTravels

3.Install dependencies:
Install the necessary dependencies for both frontend (React) and backend (Node.js/Express) applications.
First, navigate to the frontend folder (assuming it's named client): cd client
Then, run the following command to install the frontend dependencies: npm install or yarn install
After the installation is complete, navigate to the backend folder (assuming it's named server): cd ../server
Then, run the following command to install the backend dependencies: npm install or yarn install

4.Start the frontend and backend applications:
First, start the backend server. While in the server directory, run the following command: npm start or yarn start
This command will start the backend server (Node.js/Express) on a specific port (e.g., 3001). Keep this terminal/command prompt window open.
Open a new terminal/command prompt window, navigate to the client directory, and run the following command to start the frontend React application: npm start or yarn start
This command will start the frontend development server on a different port (e.g., 3000).

5.Access the application:
Open your web browser and navigate to http://localhost:3000 to access the frontend application.

# Run Tests
Install the necessary dependencies by running the following command:

npm install cypress --save-dev
or
yarn add cypress --dev

Next navigate to the root folder (client). And run the following command:
npx cypress open

This will open cypress. Go into component testing and click start testing in your desired browser. 
you should then have 3 simple components to test. 
headermain, footer and searchbutton. 
Headermain- tests the components for the header and main content
Footer- tests the components for the footer
Searchbutton- tests the components and some of the functionality of the search bar.

![Screenshot from 2023-04-24 21-15-46](https://user-images.githubusercontent.com/108536371/234106392-0bdac2fc-544c-43f8-911d-355fc3b7abba.png)
![Screenshot from 2023-04-24 21-15-46](https://user-images.githubusercontent.com/108536371/234106543-f4e0fb44-85fc-4771-aa9f-74c0d14c61cb.png)
![Screenshot from 2023-04-24 21-18-43](https://user-images.githubusercontent.com/108536371/234107133-636be74a-d8d6-487d-8506-f77a44721674.png)

# Warning 
React 18 was used for this project with Cypress React 17 version compatibility. Dependency conflicts may arise. It may be necessary to use
--legacy-peer-deps upon installing cyrpess: "npm install cypress --save-dev--legacy-peer-deps".

This will set up the BounceTravels project locally, allowing you to view and interact with the application, as well as run tests to ensure its functionality. Note that you may need to modify some of these steps depending on your specific project structure or workflow.

## Application Features

Search feature that allows users to search for information on a specific country fetched from an API.
A pop up is then displayed with the country's name, flag, capital city, population, languages, and area.
The footer buttons also allow for this functionality.
The design is fully mobile-friendly with the use of the latest technologies- React,Node,Express.
The components of the app have been tested with Cypress.

