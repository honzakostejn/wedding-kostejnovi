# wedding-kostejnovi
This repository is a very simple react application I wrote as an invitation for our wedding. I don't get so many chances to code at work, so this was a nice side project to try a few new things.

https://kostejnovi.land

## Under the Hood
It's a single page [React](https://react.dev/) application which uses mainly [FluentUI](https://react.fluentui.dev/?path=/docs/concepts-introduction--page) components with customized theme to deliver a specific user experience. For redirecting inside the application [React Router](https://reactrouter.com/en/main) is being used, so that user stays where he should. Because I wanted to try and fully localize the page, I opted for [i18next](https://www.i18next.com/).

There's a RSVP on the page, where the user can provide his details and send out the response. These data are being collected in [Azure Table Storage](https://learn.microsoft.com/en-us/azure/storage/tables/table-storage-overview).

And the last thing is probably the coolest... All of this is hosted as a [Azure Static Web App](https://www.google.com/search?q=azure+static+web+app&sourceid=chrome&ie=UTF-8), which allowed me to write the api call to the table storage in the same repository, in the same language (TS), and even created pipelines for me so I had more time to chill with the family <3.

## Known Issues
1. I'd love to refactor the code. It's a side project and I'll probably never get into that, but I'm not fully comfortable showing this spaghetti to the whole world.
1. RSVP form is accessible to anonymous users. Azure Static Web Apps can [easily solve this issue](https://learn.microsoft.com/en-us/azure/static-web-apps/authentication-custom?tabs=aad,invitations). I haven't implemented that to save some precious time and to avoid issues with less experienced users (grandparents want to be there as well!).

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.