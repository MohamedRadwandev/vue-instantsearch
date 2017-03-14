Component
---------

In this document, a few rules / guidelines to ensure maximum consistency & re-usability for custom components.

## Styles and Classes

* Prefix your classes with a short (max 4 chars) vendor name. We use `alg`, please use another one.
* Do not use [`scoped`](https://vue-loader.vuejs.org/en/features/scoped-css.html) styles, it makes it very hard to override them.
* Use [BEM notation](http://getbem.com/introduction/) with only one depth level.
* Unless you are trying to ship a very opinionated styled component, just add styles for the elements that helps understanding the behaviour. i.e. for a pagination component, you will want to put in bold the current page.

## Component good practices

* Use the `vue-algolia-component` mixin. This will make sure your component can resolve the `searchStore` if not provided. It ensures the `searchStore` prop is available in your component at any time.
* If you need mutate the `searchStore` multiple times, please use `searchStore.stop()` and `searchStore.start()`, so that other components don't update their rendering on every intermediary state mutation.
* Make sure that when the component is mounted, you catch up with the `searchStore`. You can optionally mutate the state of the `searchStore` at this stage. 
* When a component is `unmounted` or `destroyed`, make sure that you leave the `searchStore` in a state that does not include things you might have added (facets / filters / etc.).
* Make sure your component gracefully handles any state of the `searchStore`.
* Suffix all faceting components with `Facet`

## Export UMD + ES2015

* Export your component as UMD and make the `.vue` file the default entry point.
* If you have more things you'd like to export (i.e. if you decide to break down your component in several mixins and you want to expose those), the please also provide users with an ES2015 build so that they can leverage tree shaking.
