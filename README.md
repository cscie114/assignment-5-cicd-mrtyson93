## Assignment 05: Jamstack with CI/CD, CSCI E-114
**Site URL: [https://cscie114mrtyson93assignment5.netlify.app/](https://cscie114mrtyson93assignment5.netlify.app/)**

### Installation and Running Directions
Follow the below directions to get this repo up and running with a local Gatsby website 

#### Step 1: Checkout this repo

Using your preferred method of checking out a github repo, checkout this repo to your local computer.
My favorite is by running the following command:

```git clone https://github.com/mrtyson93/assignment-5-cicd-mrtyson93.git```

#### Step 2: Setup .env file
- Create a file called ```.env``` in the root directory of this project. 
- Create an api key for the omdbapi at this [link](http://www.omdbapi.com/apikey.aspx)
- In the .env file, add one line that is ```MOVIE_API_KEY="<your_key>"``` where ```<your_key>``` is the key you just created from the above link
- Create an api key for the weather api at this [link](https://openweathermap.org/api). Note: This API Key takes a couple hours to activate after creating.
- In the .env file, add another line that is ```WEATHER_API_KEY="<your_key>"``` where ```<your_key>``` is the key you just created from the above link

#### Step 3: Install local requirements

In the terminal of your choice, run the following two commands in the root directory of this repo to install the requisite packages needed to run the website:

```npm install -g gatsby-cli```

```npm install netlify-cli -g```

```npm install```

This assumes you already have node 18 or higher installed, if you do not, you can install following directions [here](https://nodejs.org/en/download/package-manager)

#### Step 4: Run the website

Start the website locally by running the following command in the root directory of this repo:
 
 ```netlify dev```

You should now be able to access the website locally at [http://localhost:8000/](http://localhost:8888/)