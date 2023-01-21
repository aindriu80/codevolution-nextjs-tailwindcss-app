# codevolution-nextjs-tailwindcss-app

## What about getStaticPaths?

<br/>
Pre-render only a few pages at build time and rest of the pages can be pre-rendered on request

Can we not use that to render say 1,000 most popular pages and res of the 99,000 pages can be pre-rendered on request

If your application has 90% static pages and 10% dynamic pages, getStaticPaths will not help much

An E-Commerce site typically will have 90% dynamic pages and 10% static pages. So we can reduce the total build time by using getSaticPaths

It still does not fix the issue of stale data

If you render 1,000 pages at build time, and then the rest are generated based on incoming requsest, using fallback true or fallback 'blocking', changes in data will not update the already pre-rendered pages.
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

On a UX level, sometimes, people prefer the page to be loaded wihout a loading indicator if the wait time isa fe milli second. This helps avoid the layout shift.

Some crawlers did not support JavaScript. The loading page would be rendered and then the fulll page would be loaded which was causing a problem.

<br/>

## Incremental Static Regeneration

There was a need to update only those pages which needed a change without having to rebuild the entire app

### Incremental Static Regeneration (ISR)

With ISR, Next.js allows you to update static pages after you've built your application

You can statically generate individual pages without needing to rebuild the entire stite, effectively solving the issue of dealing with stale data

### How?

In the getStaticProps function, apart from the props key, we can specify a revalidate key

The value for revalidate is the number of seconds after which a page re-generated can occur

<br/>

## Regeneration

A re-generation is initiated only if a user makes a request after the revalidate time

If a user visits our product details page but there is no other user hitting that page the entire day, the re-generation does not happen

Revalidate does not mean the page automatically re-generats every 10 seconds

It simply denotes the time after which, if a user makes a request, a re-generation has to be initiated

The re-generation can also fail and the previously cached HTML could be served till the subsequent re-generations succeed
