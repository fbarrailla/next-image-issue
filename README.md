# Next Image Issue

See https://github.com/vercel/next.js/issues/36681
## How to reproduce?

Having both `trailingSlash: true` and `basePath` defined in `next.config.js`.

## What's wrong?

Images from external domain cannot be displayed (even if the domain has been setup)

## Workaround

See https://github.com/vercel/next.js/issues/36681#issuecomment-1137454174

```
 images: {
    path: "/<base-path>/_next/image",
  },
```
