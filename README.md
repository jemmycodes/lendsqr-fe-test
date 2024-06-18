# LendsQr Frontend Test Review

## Technologies

- Next.js (App Router) - Server side rendering, Performance, Routing, Auth management with cookies
- SCSS - Style Processing
- React - Component Architecture
- React Icons - Rendering icons easily
- Typescript - Type Safety in development
- Vercel - Hosting
- GitHub - Version Control

## App Features

- Mock User Authentication - on user login, stores a boolean value in cookies with Next.js cookies function to redirect users to login page if they’re not authenticated
- Form Validation - Very basic and simple form validation
- Filter users - Filter users using search params and storing state in url
- Pagination - Display just 9 entries per page for good user experience
- Routing - using Next.js in-built folder routing.

## Project Structure

Next.js is very opinionated with the project/folder structure in your project, so my folder structure is just an extension of their requirements. For example, all routes to be displayed are stored in a hierarchy like so: `routename/page.tsx` .

I made sure to follow the separation of concerns rule and the Don’t Repeat Yourself (DRY) principle which is why i have folders like `hooks`, `functions`, `components`, `layout` . I love using these folders because they structure my project and their name already infer what they contain.

The `Hooks` folder contains reusable hooks and/or logic that I want to be separate from the main tsx to prevent overcrowding of components, improve readability and concur with the seperation of concerns methodology.

`Functions` folder are just like hooks; only difference is they’re not accessible to the React architecture. I use them to store simple logic like converting dates etc.

`Components` in this case, serves two purposes. First, to store reusable tsx or ui. Secondly, in places where I’m using server components to fetch data etc, i break the part of the component that needs access to client APIs or hooks to another component and call it instead of making the parent component a Client Component. A Practical example of ths is in the `/dashboard/users` page.

`Layouts` just like components, it contains reusable layouts like `header.tsx`, `sidebar.tsx`, wrappers etc.

`middleware.ts` file is present in the root of the project. This is an additional feature i added to mock user authentication. a boolean value is stored in cookies when a user logs in and the middleware is used to check if a user is authenticated before access into the dashboard.

`global.d.ts` is used to store global typescripts types for reusability

The `context` folder is the global state management tool given by react to manage global state. I used this to prevent props drilling. Installing a state manager for a relatively small app was unneccesary so i used this.

`public` folder contains static files e.g unchanging data stored in the constants folder, fonts , images etc.

The `name.module.scss` files are present in almost every folder which is scoped to a particular component or few components. I used it like this to make it easy for me to locate styles and break them to smaller chunks.

## **Pictorial Representation**

## Error Component

![Untitled](LendsQr%20Frontend%20Test%20Review%20c6bca2ad253e4358b5d33e16b89fff6d/Untitled.png)

### User’s Dashboard

![Untitled](LendsQr%20Frontend%20Test%20Review%20c6bca2ad253e4358b5d33e16b89fff6d/Untitled%201.png)

![Untitled](LendsQr%20Frontend%20Test%20Review%20c6bca2ad253e4358b5d33e16b89fff6d/Untitled%202.png)

### User Detail’s Page

![Untitled](LendsQr%20Frontend%20Test%20Review%20c6bca2ad253e4358b5d33e16b89fff6d/Untitled%203.png)

### Login Page

![Untitled](LendsQr%20Frontend%20Test%20Review%20c6bca2ad253e4358b5d33e16b89fff6d/Untitled%204.png)