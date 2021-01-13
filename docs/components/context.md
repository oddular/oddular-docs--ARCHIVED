---
id: components__context
title: Getting Started
description: How to install and set up Chakra UI in your project
sidebar_label: Root Component
---

## Installation

Inside your React project directory, install Oddular Commerce by running either of the following:

```bash
npm install @oddular/commerce-core @oddular/commerce-react
```
```bash
yarn add @oddular/commerce-core @oddular/commerce-react
```

> For `create-react-app` installation instructions, check this
> [CRA templates guide](/guides/integrations/with-cra).

## Setup Provider

For Oddular Commerce to work correctly, you need to setup the `CommerceProvider` at the
root of your application.

Go to the root of your application and do this:

```jsx live=false
import * as React from "react"

// 1. import `ChakraProvider` component
import { OddularCommerceProvider } from "@oddular/commerce-react"

const OddularPublicShopKey = 'oddular_shop_1234567890'

function App() {
  // 2. Use at the root of your app
  return (
    <OddularCommerceProvider OddularPublicShopKey={OddularPublicShopKey} >
      <App />
    </OddularCommerceProvider>
  )
}
```

> - For Next.js, you need to set this up in `pages/_app.js` or `pages/_app.tsx`
> - For Create React App, you need to set this up in `index.js` or `index.tsx`


### OddularProvider Props

| Name                 | Type             | Default               | Description                                         |
| -------------------- | ---------------- | --------------------- | --------------------------------------------------- |
| OddularPublicShopKey | `string`         | null                  | Oddular Commerce Public API Key                     |


That's it, you're good to go!


## Notes on TypeScript 🚨

Please note that when adding Oddular Commerce to a TypeScript project, a minimum
TypeScript version of `3.8.0` is required.

If you're adding Oddular Commerce to a `create-react-app` project, this means you'll
need to manually upgrade `typescript` to `^3.8.0`.
