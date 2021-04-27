# Blogging app

A blogging app using MEAN stack

# [Heroku link for live version]()

### Tech - MEAN stack

- ![MEAN](/images/mean.png) 
### Try it out

```sh
$ git clone https://github.com/vishal2106/employeeManagement.git
$ cd employeeManagement
$ # make sure to fill the gmail id and password environment
$ # variable in Dockerfile for the forget password feature to work
$ # also make sure less secure apps access is turned on in gmail
$ docker-compose up
$ # this will build and run 3 services-flask, redis, celery worker
```
### Go to localhost:5000 or [https://vishal-employee.herokuapp.com](https://vishal-employee.herokuapp.com/) in your browser to try out the app
### If on localhost, please first register as an admin (keep username as 'admin'), deployed version already has admin and users registerd (*credentials required)

### URL Endpoints
- ![URL endpoint](/images/employee.jpeg)

### API endpoint guide
- HOST = 'vishal-employee.herokuapp.com' 
or 'localhost:5000'
- POST request:
 -> HOST/api/login -- HEADERS: email and password (admin)
-> Returns access_token
- Use the access token for GET request to query for users
- GET request: -> HOST/api/search --params: 'keyword' --auth-header: access_token -> Return list of users matching the keyword filter

#### Example
- ![Login](/images/api_login.png)
- ![Search](/images/api_search.png)

### Features
- Flask blueprints used to scale app whenever necessary
- Deployment ready app, currently on Heroku
- Admin master view to do CRUD on all employees
- Admin search toolbar to search users filtered by username/email/first name/last name/location
- Employee view to see details and do update and delete operation on only his account
- Role encrypted functions making sure only authorized user has access to certain endpoints
- Forget password feature which runs asynchronously on the background using Celery and Redis
- REST API for searching users based on keyword protected by JWT token