<div id="top"></div>

<br />
<div align="center">
  <a href="https://github.com/ItaiLash/ourGovernment-React.git">
    <img src="https://github.com/ItaiLash/ourGovernment-React/blob/main/Client/src/img/ourGovernment-main-logo.png" alt="Logo" width="60%" height="60%"
  </a>
 
    
  <a href="https://our-government-front.herokuapp.com/" align="center"><h3> OurGovernment official web app</h3></a>

<!--   <h3 align="center">OurGovernment</h3> -->
  <p align="center">
    <br />
    <a href="#">View Demo</a>
    ·
    <a href="#">Report Bug</a>
    ·
    <a href="#">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running-the-algorithm">Running the algorithm</a></li>
      </ul>
    </li>
<!--     <li><a href="#usage">Usage</a></li> -->
<!--     <li><a href="#roadmap">Roadmap</a></li> -->
<!--     <li><a href="#contributing">Contributing</a></li> -->
<!--     <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
<!--     <li><a href="#acknowledgments">Acknowledgments</a></li> -->
     <li><a href="#external-docs">External docs</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

The executive branch, or government, is typically not elected directly by the people, but rather formed by another elected body or person such as the parliament or the president. 
As a result, its members are not directly accountable to the people, individually or as a group.
Indeed, in coalition systems, following coalition negotiations, each party in the coalition gets a group of ministries which, in turn, have to be populated by ministers.
We consider a scenario in which the members of the government are elected directly by the people, and wish to achieve proportional representation while doing so.
The project includes a system for electing ministers in the government, a research paper that analyzing the results of the algorithm and an application that will present the algorithm.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites
For development, you will only need Node.js, npm and python installed on your environement. 
- For the Client side:
  * To download the latest version of npm (include Node.js), on the command line, run the following command:
    ```sh
    npm install
    ```
    or visit https://nodejs.org/en/
  * To see if you already have Node.js and npm installed and check the installed version, run the following commands:
    ```sh
    node -v
    npm -v
    ```
- For the Server side:
    * To see if you already have python installed and check the installed version, run the following commands:
      ```sh
      python --version
      ```
    * If pip is not installed on your computer, download it via the following link: https://pip.pypa.io/en/stable/installation/

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ItaiLash/ourGovernment-React.git
   ```
2. Open the repo in two different terminals (one to activate the server and another one to activate the web app).
3. #### Activating the server:
   - First, go into the Server folder: `cd Server`
   - Then, you need to install some packages for the server:
     - Django `pip install django`
     - Django REST framework: `pip install djangorestframework`
     - django-cors-headers: `pip install django-cors-headers`
     - CORScanner: `pip install cors`
     - opempyxl - `pip install openpyxl`
   - Inside the Server directory run the command `python3 manage.py runserver`
   - You are supposed to see:
   
      <img src="https://github.com/ItaiLash/ourGovernment-React/blob/main/Client/src/img/runserver%20screensshot.png" alt="Logo" width="60%" height="60%">

4. #### Activating the web app:
   - First, in the second terminal go into the Client folder: `cd Client`
   - Then you need to install all our packages for the web app:
     `npm install`
   - Run the webpage via the other terminal by entering `npm start` command.
   - You are supposed to see:
  
      <img src="https://github.com/ItaiLash/ourGovernment-React/blob/main/Client/src/img/npm%20start%20screenshot.png" alt="Logo" width="60%" height="60%">  

### Running the algorithm
4. On the website itself, click on the Demo  button that will take you to another page.
5. On the demo page, enter the following parameters in the appropriate textboxes: 
   - Number of offices.
   - The maximum number of candidates for any office.
   - Number of voters. Click submit.
7. A number of cards will open and in each tab the name of the office and the names of the candidates must be entered. Click next (note that there is a delay of 5 seconds until the next component is received).
8. After a few seconds more cards will open where each voter's name and his choices (preferences) must be entered. Click done (here too there is a delay of 5 seconds).
9. The results of the algorithm run will be displayed on the screen and there will be a link to download explained results.

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- CONTACT -->
## Contact

* Itai Lashover - [@ItaiLash](https://github.com/ItaiLash) - itai.lash@gmail.com
* Liav Weiss - [@liavweiss](https://github.com/liavweiss) - liavweiss@gmail.com
* Amichai Kafka - [@amichaikafka](https://github.com/amichaikafka) - amichaikp@gmail.com
* Shani Levin - [@shaniLevin1](https://github.com/shaniLevin1) - shani032@gmail.com


Project Link: [https://github.com/ItaiLash/ourGovernment-React](https://github.com/ItaiLash/ourGovernment-React)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- EXTERNAL DOCSS -->
## External docs
* [Electing the Executive Branch](https://github.com/ItaiLash/ourGovernment-React/blob/main/Docs/Electing%20the%20Executive%20Branch.pdf) wrote by Rutvik Page, Ehud Shapiro & Nimrod Talmon.
* [Election Of Government Ministers](https://github.com/ItaiLash/ourGovernment-React/blob/main/Docs/article.pdf) wrote by Itai Lashover, Liav Weiss, Amichai Kafka & Shoshana Levin.
* [Vision Statement](https://github.com/ItaiLash/ourGovernment-React/blob/main/Docs/Vision%20Statement%20OurGovernment.pdf)
* [Software Design Document](https://github.com/ItaiLash/ourGovernment-React/blob/main/Docs/Software%20Design%20Document%20OurGovernment.pdf)
* [Usability Testing](https://github.com/ItaiLash/ourGovernment-React/blob/main/Docs/Usabillity%20Testing.pdf)

<p align="right">(<a href="#top">back to top</a>)</p>
