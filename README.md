## Cognitiv React Redux Challenge

Fork the repo into your GitHub Account. Pull the repo locally and run 'yarn' to install the node modules. I recommend using Visual Studio Code if you dont already use it and install Beautify and ESLint extensions.

### Cognitiv Directions

After the node modules have been installed run the command 'npm start'. You will be building a psuedo login screen, navigation and a dashboard page. You will also be hooking up some basic Redux actions as well as a reusable input component. There will be no redline or design guidelines so make it as accurate as possible from the images.

### Login Page

Build the login page as accurately as possible. We are looking at the design as well as the code and how you manage coding patterns.

The login button will use the Button component located in the components directory. This will help guide you on the location for other reusable components for this mini project.

Make a reusable Input component that will allow a user to input text or a password. Have the input style look like the inputs in the image. Do not use a library for these inputs. Please develop the css from scratch along with the necessary props.

The Forgot Password link can be static and not do anything.

When a user clicks the 'Sign In' button:
- Activate the loading spinner with Redux
- Wait 3 seconds
- Set the user with Redux
- Redirect to the /dashboard page
- Deactivate the loading action with Redux

To make this action happen you will need to create a user reducer in the ducks folder. The key to authenticate a user will be to pass an arbitrary authentication key to the user reducer.

![](public/LoginPage.png)

### Dashboard Page

After the user has been authenticated they will land on the Dashboard Page. Create a navigation menu that runs along the top of the page. This should be imported into the PrivateLayout component. Design the navigation however you want but it must have the Cognitiv logo located on the left and a logout button located on the right. Feel free to leave the middle section blank since there isnt anywhere to go inside this SPA. The logout buttons expected behavior is to be sent back to the login screen and clear the user. Add something unique to the actual dashboard page. This could be an image or a small bit of text or even something you have created in the past. For example, I added some pictures of dogs doing funny stuff. If you have any questions reach out to your recruiter.

Thank you for taking the time to complete this challenge and we look forward to speaking again!