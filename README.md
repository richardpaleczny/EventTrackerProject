## EventTracker Project: Healthy Habits

### Description
The EventTracker project is primarily intended to showcase REST architecture functionality as opposed to the MVC architecture. This particular project tracks healthy habits that a person might incorporate into their lifestyle. The activities contain information about the activity itself, with some fields not necessarily filled out, depending on the kind of activity. The mySQL schema contains columns for: activity name, recommended time to spend on that activity, the recommended amount (for example, if a healthy habit activity were to drink water, then the amount would be 8, corresponding to the fact that the person should drink 8 glasses of water as an amount to follow in order to be "partaking" in a healthy habit), the actual time spent from the person in doing that activity, whether or not the goal was met, and the "feeling rating" which is a numeric rating for 1-10 where the higher the number implies how much better the person feels after having done the activity.

This project utilizes the Spring Framework and a tool called Spring Boot which helps gather all the dependencies and set configurations. The core principle is using REST to return or consume resources from the handler methods in the controller classes. In this way, many of the controller route paths are standardized only differing in whether or not id's are given or the request method type, such as GET or POST. Additionally, another principle feature has been the use of data serialization to convert Java objects to JSON and vice versa, which is what makes it possible to do the types of request/response cycles in a rest controller class. Spring Data JPA was incorporated to streamline the querying process to the mySQL database.

### Skill Distillery Week 11 Homework
This project was assigned after Week 11 of Skill Distillery's Java Coding
School.

#### Technologies Used

* Java
* mySQL, mySQL workbench
* Spring Data JPA, query DSL
* EER Diagrams
* Gradle
* Spring Framework
* REST
* Spring Boot
* Embedded Servers
* JavaScript

#### Lessons Learned

* Using RESTful services and understanding REST fundamentals, such as client-server relationships, statelessness (session state kept entirely on client), uniform interface and naming standardization
* Use of API to return information instead of using MVC to return jsp's
* Spring Data JPA query syntax and set-up. Creating Repository and Service classes which handle accessing the database and returning information. Domain specific language to get functionality based on the naming of methods so that the data JPA can infer JPQL queries to aggregate data sets.
* Having request/response bodies sent as strings in JSON format, to be able to send and retrieve information in a standardized format. Setting up the dependencies and configurations in order to use REST principles with JSON.
