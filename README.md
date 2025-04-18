# Project Notes by Lucas
Next steps:
  cd aframe-ar-nextjs-pwa
  npm run db:push
	Warning: You did not specify an output path for your `generator` in schema.prisma. This behavior is deprecated and will no longer be supported in Prisma 7.0.0. T✔ Generated Prisma Client (v6.6.0) to .\node_modules\@prisma\client in 50ms
  npm run dev
  git commit -m "initial commit"

Setting up Progressive Web App (PWA) with Sworkbox:
- npm i @serwist/next && npm i -D serwist

recreated the project without tRPC 


run the following to setyp the project:
```bash
npx prisma db push
```



# Setup

C:\Users\Lucas\.Lucas\2025Code\aframe-ar>npm create t3-app@latest

> npx
> create-t3-app

   ___ ___ ___   __ _____ ___   _____ ____    __   ___ ___
  / __| _ \ __| /  \_   _| __| |_   _|__ /   /  \ | _ \ _ \
 | (__|   / _| / /\ \| | | _|    | |  |_ \  / /\ \|  _/  _/
  \___|_|_\___|_/‾‾\_\_| |___|   |_| |___/ /_/‾‾\_\_| |_|


│
◇  What will your project be called?
│  ar-aframe-nextjs-pwa
│
◇  Will you be using TypeScript or JavaScript?
│  TypeScript
│
◇  Will you be using Tailwind CSS for styling?
│  Yes
│
◇  Would you like to use tRPC?
│  No
│
◇  What authentication provider would you like to use?
│  None
│
◇  What database ORM would you like to use?
│  Prisma
│
◇  Would you like to use Next.js App Router?
│  Yes
│
◇  What database provider would you like to use?
│  SQLite (LibSQL)
│
◇  Would you like to use ESLint and Prettier or Biome for linting and formatting?
│  ESLint/Prettier
│
◇  Should we initialize a Git repository and stage the changes?
│  Yes
│
◇  Should we run 'npm install' for you?
│  Yes
│
◇  What import alias would you like to use?
│  ~/

Using: npm

✔ ar-aframe-nextjs-pwa scaffolded successfully!

Adding boilerplate...
✔ Successfully setup boilerplate for prisma
✔ Successfully setup boilerplate for tailwind
✔ Successfully setup boilerplate for envVariables
✔ Successfully setup boilerplate for eslint

Installing dependencies...
Warning: You did not specify an output path for your `generator` in schema.prisma. This behavior is deprecated and will no longer be supported in Prisma 7.0.0. To learn more visit https://pris.ly/cli/output-path
✔ Successfully installed dependencies!

Formatting project with eslint...
✔ Successfully formatted project
Initializing Git...
✔ Successfully initialized and staged git

Next steps:
  cd ar-aframe-nextjs-pwa
  npm run db:push
  npm run dev
  git commit -m "initial commit"



# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
