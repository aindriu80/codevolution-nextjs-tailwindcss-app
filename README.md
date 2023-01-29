# codevolution-nextjs-tailwindcss-app

## What about getStaticPaths?

<br/>
Pre-render only a few pages at build time and rest of the pages can be pre-rendered on request

Can we not use that to render say 1,000 most popular pages and res of the 99,000 pages can be pre-rendered on request

If your application has 90% static pages and 10% dynamic pages, getStaticPaths will not help much

An E-Commerce site typically will have 90% dynamic pages and 10% static pages. So we can reduce the total build time by using getSaticPaths

It still does not fix the issue of stale data

If you render 1,000 pages at build time, and then the rest are generated based on incoming request, using fallback true or fallback 'blocking', changes in data will not update the already pre-rendered pages.
<br/>

## getStaticPaths fallback:true

### When?

<br/>

The true value is most suitable if your app has a very large number of static pages that depend on data

A Large E-Commerce site.

You want all the product pages to be pre-rendered but if you have a few thousand products, builds can take a really long time.

You may statically generate a small subset of products that are popular and use fallback: true for the rest.

When someone requests a page that's not generated yet, the user will see the page with a loader indicator.

Shortly after, getStaticProps finishes and the page will be rendered with the requested data. From then on-wards everyone who requests the same page will get the statically pre-rendered page.

This ensures that users always have a fast experience while preserving fast builds and the benefit of Static Generation.
<br/>
<br/>

## getStaticPaths fallback: 'blocking'

### When?

<br/>

On a UX level, sometimes, people prefer the page to be loaded without a loading indicator if the wait time is a full millisecond. This helps avoid the layout shift.

Some crawlers did not support JavaScript. The loading page would be rendered and then the full page would be loaded which was causing a problem.

<br/>

## Incremental Static Regeneration

There was a need to update only those pages which needed a change without having to rebuild the entire app

### Incremental Static Regeneration (ISR)

With ISR, Next.js allows you to update static pages after you've built your application

You can statically generate individual pages without needing to rebuild the entire site, effectively solving the issue of dealing with stale data

### How?

In the getStaticProps function, apart from the props key, we can specify a revalidate key

The value for revalidate is the number of seconds after which a page re-generated can occur

<br/>

## Regeneration

A re-generation is initiated only if a user makes a request after the revalidate time

If a user visits our product details page but there is no other user hitting that page the entire day, the re-generation does not happen

Revalidate does not mean the page automatically re-generates every 10 seconds

It simply denotes the time after which, if a user makes a request, a re-generation has to be initiated

The re-generation can also fail and the previously cached HTML could be served till the subsequent re-generations succeed

### Problems with Static Generation

#### We cannot fetch data at request time

With not being able to fetch data per request, we run into the problem of stale data

Let's say we are building a new website -> The content is very dynamic in the sense that new articles can be published almost every second

getStaticProps will fetch the news at build time which is not suitable at all

getStaticPaths will help fetch the data on the initial request but it is then cached for subsequent requests

Incremental static regeneration (ISR) can help but if revalidate is 1 second, we still might not always see the most up to date news when the regeneration is happening in the background

Rather fetch the data on the client side by making a get request from the component. Not no SEO

#### We don't get access to the incoming request

Problem when the data that needs to be etched is specific to a user

Let's say we are building a website similar to Twitter -> As a user, I should be able to see tweets that are personalized based on my interests

The tweets that I see also need to be SEO friendly as it is public content that anyone in the world can see

To fetch tweets specific to the user, we need the userId. And that can be obtained only if we have access to the incoming request

## getServerSideProps

Only runs on server side - never client side - code written inside getServerSideProps won't even be included in the JS bundle that is sent to the browser

You can write server-side code directly in getServerSideProps

Accessing the file system using the fs module or querying a database can be done inside getServerSideProps

You also don't have to worry about including API keys in getServerProps as that wont make it ot the browser

getServerSideProps is allowed only in a page and cannot be run from a regular component file

It is used only for pre-rendering and not client-side data fetching

getServerSideProps should return an object and object should contain a props key which is an object\*

getServerSideProps will run at request time

## Pre-rendering & data fetching summary

Pre-rendering refers to the process of generating HTML in advance which result in better performance and SEO

Next JS supports two forms of pre-rendering - Static Generation and Server-side Rendering

### Static Generation

A method of pre-rendering where the HTML pages are generated at build time

Pages can be built once, cached by a CDN and served to clients almost instantly

Example: Marketing or Blogging site

For a normal page, use getStaticProps function to fetch the data ahead of time

For a dynamic page, you also need the getStaticPaths function

fallback: false | true | 'blocking'

Pages cannot be updated without a full re-build

Incremental Static Regeneration

### Server-side rendering

Fetch data at request time

Personalize data based on user information in the incoming request

Example: News listing page

getServerSideProps function helps with SSR data fetching

Combining pre-rendering with client-side data fetching

Shallow routing - Routing without calling getStaticProps/getServerSideProps

### API Routes Section

Can write Front End code in React and also write APIs that can be called by the front end code

API routes allow you to create RESTful endpoints as part of your Next.js application folder structure

Within the pages folder, you need to create a folder called 'api'

Within that 'api' folder, you can define all the APIs for your application

You can add business logic without needing to write any additional custom server code and without having to configure any API routes

Next.js gives you everything you need to write full-stack React + Node applications
