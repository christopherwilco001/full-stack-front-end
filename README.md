### Player Development

## Welcome:

Hi all and welcome to Player Development. This applications is designed to be a
place for users to create, delete, and update player development sessions.

# Description:

Our app allows a user to have their own specific authentication through sign up.
Once signed up you can sign in, the user can change their password, and sign out.
While signed in, a user is able to create, delete and update a "Session".

# Wireframe & ERD

https://i.imgur.com/3odAa4T.jpg

# Technology

- JavaScript
- JQuery
- HTML
- CSS

# Planning

- Read requirements
- Follow suggested schedule
- Start coding on the front end
- Start coding on the back end

# How It Works

The front end makes ajax requests to the API. The API is a RESTful API built on
expressjs. It queries the database and returns a JSON. JavaScript parses the JSON
and renders pieces of it on the page using handlebars. That HTML is stylized using
CSS. Event listeners are attached with JQuery and page manipulation is handled by
JavaScript.

# User Stories

- As a unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a unregistered user, I would like to see all users sessions.
- As a signed in user, I would to create sessions.
- As a signed in user, I would to delete sessions.
- As a signed in user, I would to update sessions.

# Unsolved Problems

None at the moment but with more time I would like to add some more features taht would posssibly cause problems that need to be solved.
