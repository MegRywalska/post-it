# PostIt

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.
# PostIT

Under the project there will be 2 sides developed, one for Frontend and one for Backend.
The goal of this project is to create a platform, where users can create distinct accounts and will be able to Post their thouughts to share with other users
and to be able to comment one another Posts.

In further development it will be possible to follow other users and react to their actions accordingly by using emoji's like hearts, likes etc.
Project is exclusively developed by Małgorzata Rywalska.

Technologies used:
Backend - Spring (SpringSecurity, Spring Boot, SpringData, JPA), Lombok, MySQL, MapStruct, Jason Webtoken, https://github.com/MegRywalska/PostIT
Frontend - separate Angulaj app https://github.com/MegRywalska/post-it

Project is developed with usage of Maven with dependencies described in .POM.xml.

Core functionalities:
- Main page presenting user's posts
- Adding posts
- Following other users feature
- Adding comments to posts
- Adding reactions with hearts to other user's entry's
- Emoji's repository
- Ability to mention other users with usage of "@"
- Ability to add media files like photos, videos to user's post
- Sending email with account activation and authorization
- Ability to search posts and users by "#" 
- In further development : Notification system, sharing other user's posts on any other given socials via link URL

Documentation made by Małgorzata Rywalska
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
