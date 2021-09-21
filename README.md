# Code Test

# Requirements
  - [Nodejs](https://nodejs.org/en/)
  - [Dotnet ASP.NET 5 Runtime](https://dotnet.microsoft.com/download/dotnet/5.0)
  - [Dotnet ASP.NET 5 SDK](https://dotnet.microsoft.com/download/dotnet/5.0)

# Before we start
  - Clone repository
  - Install dependencie (should be done automatically when running the project):
```sh
    cd ApiApp
    dotnet restore
```
### Run:
  - Use the debug function in either visual studio or vs code
  - Or just run this command:
```sh
dotnet run
```

# Gerneral information about the project
No libraries are used in the javascript. We utilize Gulp to bundle and compile both the typeScript and the SCSS.

# Database
  - We don't use any databse Engine for this project, but feel free to switch if you want to use any database Engine.
# Controllers:  
## WeatherForecast Controller:
Get.
  - [Route("api/[controller]/[action]")]
  
# Test objectives:
In general, we want to have at least some code in the following three languages.
  - C#
  - Javascript (TypeScript)
  - CSS (SCSS)

Using any external library is allowed, the same goes for old code in your repository. Utilizing external libraries does have to be utilized for a good reason though.

## The test (Whats your task)
### Basic CRUD operations(Read operation is enough for this task)
Add basic CRUD oparations to the application using single page application framework(Angular).
Add the rest of CRUD Operation(Edit- Delete- Create) to the Project will be big bonus
## Delivery
Send the frontend without node_modules for front end project
Send API in case of adding any CRUD Operation.
### Web Components
When doing frontend, we use web components so we can have reusable and framework agnostic code. We prefer you do components in "web components"
Check *Frontend/Scripts/WebComponents/UserModal.component.ts* for inspiration on how to create web components.

### Improve layout (optional)
The current layout is very simple, if you could improve it, it would be a big benefit.

### Improve logging (optional)
Logging can always be improved, see if you could add your touch to the logging.

### UnitTesting (optional)
Unit testing could be a very nice addition to this project.

# What do we find important
- Think scalable. Our solution needs to be maintainable and scalable.
- Write readable code, with meaningfull function and variable names
- Extract your code to classes where a class or a function only have one specific purpose
- Only write comments, if code is not self-explainatory(which it should be for the most part)
- Try to write your own code. Importing libraries has to be for a good reason. We rate it very highly that you are able to write your own code
