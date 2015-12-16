# SoftwareEngineering5c  ReadMe

#Intro

This ReadME will give a brief description on our groups project for Biotility. 
Biotility at University of Florida CERHB is committed to providing high-quality education and training to facilitate the professional growth of each participant. Our short-courses are attended by professionals, students preparing to enter industry careers, and researchers, all of whom seek to expand and deepen their knowledge in technical and regulatory details unique to biotechnology industries and translational research. The Biotechnician Assistant Credentialing Exam (BACE) is an industry-recognized exam designed to assess core skills and knowledge sets identified by industry, and represented within the academic and performance standards of Florida’s secondary Biotechnology program. The test has been vetted by the state’s industry organization BioFlorida, representing representing more than 3,000 companies and research organizations in the biotechnology, pharmaceuticals, medical devices and bioagriculture sectors. 


The webapp provides a hands-on way for students and teachers to interact by allowing students to sign up for courses, take quizzes, and practice for the BACE. 

##Our Development Team
*Carl Amko* Scrum Master + Developer
*Rebecca Raymond* Product Manager + Developer
*David Yeung* Developer
*Michael Vilallonga* Developer
*Anthony Colas* Developer


Credit people/organizations you borrowed code from  or APIs you used - e.g., Bootstrap,  
List of all project features implemented and associated screenshots
include landing or home page
Instructions for how to run the project locally
How to update database and server connections

* [Deployed Page](#deployed-page)
* [Credit](#credit)
* [Project Features](#project-features)
* [Remote repositories](#remote-repositories)
* [How to run the project locally](#how-to-run-the-project-locally)
* [Collaborating with GitHub](#collaborating-with-github)
* [How to update database and server connections](#how-to-update-database-and-server-connections)


## Deployed Page

Our page is deployed on heroku. The following is the link to our deployed page:

http://biotility.herokuapp.com

## Credit

We would like to give credit to the following organizations for their help and any code borrowed:

- [Bossable](http://www.bossable.com)
![Bossable Logo](http://www.bossable.com/wp-content/uploads/2014/09/bossable-logo.jpg)
- [Bootstrap](http://getbootstrap.com)
![Bootstrap Logo](http://www.w3schools.com/bootstrap/bs.png)
- [MEANJS](http://meanjs.org)
![MEAN.JS Logo](http://meanjs.org/img/logo-small.png)
- [Mongolab](https://mongolab.com)
![Mongolab Logo](https://s3.amazonaws.com/awsmp-logos/MongoLab-Logo-OnWhite.jpg)

We would like to give credit to the following for any pictures used on the webpage:

- [Biotility](http://biotility.research.ufl.edu)
- Lori Wojciechowski
- Tamara Mandell



## Project Features
**Interactive Homepage to view courses**
![](tutorial_img/clone_fork_diagram.jpg)
Here students can select which course they want to take an assesment on or learn more about.

**Login Screen**
![](imgs/homepage.png)
Here Students and Teachers can login to their account.

**Registration**
![](tutorial_img/clone_fork_diagram.jpg)
Don't have an account? No problem. Register on this page.

**About Us**
![](tutorial_img/clone_fork_diagram.jpg)
Learn more about Biotility

**Contact**
![](tutorial_img/clone_fork_diagram.jpg)
Learn more about the Biotility team and get their contact info.

**Resources**
![](tutorial_img/clone_fork_diagram.jpg)
Get info about the topic you select.

**Assesment/Quiz**
![](tutorial_img/clone_fork_diagram.jpg)
Students can test their knowledge here
![](tutorial_img/clone_fork_diagram.jpg)
Quiz Question
![](tutorial_img/clone_fork_diagram.jpg)
Finished
![](tutorial_img/clone_fork_diagram.jpg)
Congrats

**Student List**
![](tutorial_img/clone_fork_diagram.jpg)
Here Teacher's Can View their students

**Student Profile**
![](tutorial_img/clone_fork_diagram.jpg)
Info about students and their quizes

**Teacher Profile**
![](tutorial_img/clone_fork_diagram.jpg)
Info about teachers and their classes

**Teacher View of Student Profile**
![](tutorial_img/clone_fork_diagram.jpg)
Teachers can see one of their specific students.

##How to run the project locally

In order to run the project locally please follow the following steps:
Running on Mac/iOS:
1. npm install -g bower
2. npm install -g grunt-cli
3. npm install -g yo
4. npm install -g-generator-meanjs
5. git clone the repo: https://github.com/SoftwareEngineering5c/Biotility.git
6. cd on terminal to the repo (Biotility)
7. npm install 
8. grunt

The terminal should now output:
 Biotility - Development Environment
    Environment:			development
    Port:				3000
    Database:				mongodb://devteam:devteam@ds027769.mongolab.com:27769/software5c
    App version:			0.4.1
    MEAN.JS version:			0.4.1

 9. On your internet browser type in: localhost:3000 
 *Note: to stop the app locally press ctrl-c on the terminal*

    
## How to update database and server connections
Everytime a user signs up the database is automatically updated.
When a user goes to their profile page, they can edit their profile info.
Database is automically updated as well with quiz results when a student takes a quiz.

The user schema is defined in:
*Biotility/modules/users/server/models/user.server.model.js*
The quiz question schema is defined in:
*Biotility/modules/quiz/server/models/quizQuestion.server.model.js*

Database connection: 
mongodb://devteam:devteam@ds027769.mongolab.com:27769/software5c'







