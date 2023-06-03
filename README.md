This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) 
and [TypeScript](https://www.typescriptlang.org/), 
[TailwindCSS](https://tailwindcss.com/) for the styling and [Prisma](https://www.prisma.io/)
as database ORM.

## Getting Started
### The setup for this project: 
  #### The automatic Next setup with --typescript flag:

    pnpm create next-app -- --typescript

  #### The setup of <a href="https://tailwindcss.com/docs/guides/nextjs"> tailwind docs for nextjs</a>:

    pnpm install -D tailwindcss postcss autoprefixer
    pnpm exec tailwindcss init -p

  Configure the tailwind.config.js and add the tailwind directives
  as instructed in the tailwind docs

### To run this project:
First, clone this repository:

```bash 
git clone https://github.com/TSaytson/poc-nextjs
git remote rm origin
```
Add your remote repository

Second, install the dependencies:

```bash 
npm install
# or
yarn install
# or
pnpm install
```

And then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

To learn more about Tailwind:

- [TailwindCSS Documentation](https://tailwindcss.com/docs/installation) - Get started with Tailwind CSS

To learn more about Typescript:

- [Typescript Documentation](https://www.typescriptlang.org/docs/) - Typescript Documentation

To learn more about Prisma:

- [Prisma Documentation](https://www.prisma.io/docs) - Prisma Docs

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
