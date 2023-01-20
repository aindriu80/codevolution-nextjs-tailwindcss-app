# codevolution-nextjs-tailwindcss-app-

#getStaticPaths fallback:true

#When?

the true value is most suitable if your app has a very large number of static pages that depend on data

A Large E-Commerce site.

You want all the product pages to be pre-rendered but if you have a few thousand products, builds can take a really long time.

You may statically generate a small subset of products that are popular and use fallback: true for the rest.

When someone requests a page that's not generated yet, the user will see the page with a loader indicator.

Shortly after, getStaticProps finishes and the page will be rendered with the requested data. From then on-wards everyone who requests the same page will get the statically pre-rendered page.

This ensures that users always have a fast experience while preserving fast builds and the benefit of Static Generation.
