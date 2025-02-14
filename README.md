# Next.js 15 Shallow Routing Issue with Query Parameters

This repository demonstrates a bug in Next.js 15 related to shallow routing and query parameters.  When navigating between pages using shallow routing (`router.push` with `{ shallow: true }`), query parameters are not consistently preserved, leading to unexpected behavior.

## Bug Description
The issue occurs when redirecting from a page to another and then back using shallow routing. The query parameters are not preserved in the redirect, resulting in a partial render or loss of data.

## Reproduction Steps
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to the `/about` page.
5. Click the "Go to Home Page" button.
6. Observe that query parameters are missing, and the home page doesn't render as expected.

## Solution
The solution involves removing the `shallow: true` option in the router.push method when redirecting from the /about page. This forces a full page reload and avoids the inconsistent behavior associated with shallow routing.  This ensures the query parameters are correctly preserved.

## Technologies Used
* Next.js 15
* React