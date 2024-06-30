
## We used shadcn for component libraries and Tailwind CSS

## We used clerk for authentication and user management
`step 1`: Login on clerk
`step 2`: create application, giving it a name and choosing the required sign-in options on the application
`step 3`: install clerk using npm 
`step 4`: setup environment variables
`step 5`: create middleware.ts
`step 6`: Wrap the app in ClerkProvider
`step 7`: Build signin and signup pages
`step 8`: update environment variables


## For Mobile navbar, we used sheet component from shadcn

## we used webhooks to connect clerk and mongoDB
As soon as we create a clerk user, it is also created in our DB
https://clerk.com/docs/integrations/webhooks/sync-data
'ngrok' is used if we need to add localhost as our endpoint. 
If we dont use 'ngrok', we must directly add the url of the deployed application in the endpoint

`step 1`: install svix package
`step 2`: create the endpoint in our application in 'app/api/webhook/clerk/route.ts' and copy the code from the document given above
In the code, instead of console logs, we can trigger other actions which we need to be done.
`step 3`: Trigger the DB events in place of console logs, along with creating server actions in lib/actions/user.actions.ts
`step 4`: Deploy the apllication on vercel
    -> push the code on github
        new repo -> git init -> git add . -> git commit -m 'first commit' -> git branch -M main -> git remote add origin https://github.com/Devesh24/<repo_name>.git -> git push -u origin main
    -> import the repo in vercel
    -> add the environment variables
    -> click on deploy
`step 5`: clerk dashboard -> webhooks 
    -> add endpoints
        <deployedWebsiteEndpoint>/api/webhook/clerk
    -> subscribe to user events by searching user in the search bar
    -> click create
`step 6`: Add WEBHOOK_SECRET in environment variables, copying it from signing secret
`step 7`: Add WEBHOOK_SECRET in our deployed application and redeploy the application
        vercel -> settings -> environment variables
        vercel -> deployments -> 3 dots -> redeploy
`step 8`: delete existing users from clerk, if any
        clerk dashboard -> users -> delete user

## auth() hook in clerk/nextJs can be used to get the data of the user currently interacting with the application using tokens (clerk automatically setup the jwt tokens internally)
`step 1`: Initialize the token in cler dashboard
        clerk dashboard -> sessions -> customize session tokens -> edit -> give below token -> save
        For Example:
        {
          "userId": "{{user.public_metadata.userId}}"
        }
`step 2`: extract the token data wherever needed
        const { sessionClaims } = auth()
        const userId = sessionClaims?.userId as string



## We used shadcn Form component for making EventForm. Also, used ZOD for form validation.
Follow the shdcn docs for the same

## To create file uploader, we used uploadthing library -> uploadthing.com
https://docs.uploadthing.com/getting-started/appdir

`step 1`: Create a new app on uploadthing
`step 2`: install uploadthing in your application
`step 3`: add environment variables in your env file
            dashboard -> app name -> api keys -> add both variables
`step 4`: Follow the above docs

## To create the date picker, we used an npm package called react-datepicker
https://www.npmjs.com/package/react-datepicker

## We did not used our local image urls to store in the DB. We first uploaded the images on uploadthings, then that url is stored in the DB.
- Since NextJS does not allow us to render images from external links, we need to add the uploadthing server to the list of secure image providers in next.config.ts
const nextConfig = {
    images: {
        domains: ['utfs.io'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'utfs.io',
                port: ''
            }
        ]
    }
};

## line-clamp-1 class in tailwind is used to add three dots(...) if a text is longer then its container. 
For Example:
without line-clamp: Artificial                   with line-clamp: Artificial...
                    Intelligence

## We have implemented payment and checkout functionalities using stripe
https://docs.stripe.com/checkout/quickstart?client=next
`step 1`: npm install --save stripe @stripe/stripe-js next
`step 2`: Copy the loadstripe, stripePromise, useEffect and onCheckout part from the given documentation, in the Checkout page
`step 3`: copy the environment variables from the envs section in the above docs
`step 4`: complete the onCheckout function in the Checkout page
`step 5`: copy everything from the try block of checkout_sessions.js, from the above docs, into the 'checkoutOrder' server action in 'order.actions.js', and the below given line above try
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
`step 6`: Complete the server action if necessary
`step 7`: Define NEXT_PUBLIC_SERVER_URL in envs

## To connect the database and stripe, we used stripe webhooks
- It is used for creating or updating tickets in the database after the stripe action is failed or succeeded
`step 1`: Add the endpoint of the deployed app in stripe and select the events you want to listen
            stripe dashboard -> developers -> webhooks -> add an endpoint 
            https://event-platform-rho-kohl.vercel.app/api/webhook/stripe
            Copy the node js sample endpoint file
            Click add endpoint
`step 2`: Paste the copied file in route.js and modify as needed
            app/api/webhook/stripe/route.js
`step 3`: Get the signing secret from stripe and add in the environment variables
            STRIPE_WEBHOOK_SECRET
`step 4`: Redeploy the webapp:
            add envs in vercel -> git add . -> git commit -m 'implement stripe' -> git push
