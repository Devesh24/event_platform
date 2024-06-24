## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



## We used shadcn for component libraries

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


