# Link Cord Roadmap

![](https://toxic-is-senpai.wtf/2456fd.png)

---

## Having Issues?
Open a Issue on this Repo or join our [Discord](https://linkcord.bio/discord) and we will be happy to help. 

## Docs

- [Set up](#set-up)
- [Configuring Upstash](#configuring-upstash)
- [Configuring Auth0](#configuring-auth0)
- [Deploy on Vercel](#deploy-your-local-project)

---

## Set up

First clone the repo. Copy the `.env.local.example` file to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

---

## Configuring Upstash

1. Go to the [Upstash Console](https://console.upstash.com/) and create a new database

#### Upstash environment

`UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` find the variables in the database details page in Upstash Console.

---

## Configuring Auth0

1. Go to the [Auth0 dashboard](https://manage.auth0.com/) and create a new application of type **Single Page Web Applications**
2. Go to the settings page of the application
3. Configure the following settings:
   - **Allowed Callback URLs**: Should be set to `http://localhost:3000/` when testing locally or typically to `https://myapp.com/` when deploying your application.
   - **Allowed Logout URLs**: Should be set to `http://localhost:3000/` when testing locally or typically to `https://myapp.com/` when deploying your application.
4. Save the settings.

---

#### Auth0 environment

- `NEXT_PUBLIC_AUTH0_DOMAIN`: Can be found in the Auth0 dashboard under `settings`.
- `NEXT_PUBLIC_AUTH0_CLIENT_ID`: Can be found in the Auth0 dashboard under `settings`.
- `NEXT_PUBLIC_AUTH0_ADMIN_ID`: This is the **user_id** of the admin user. First run your application and sign-in yourself. Then find your **user_id** in the Auth0 console, **"User Management > Users"** page.


---

## Replace Your Logo  http://localhost:3000

Copy your logo image to `public` folder. Then edit `components/layout/Hero.tsx`, `component/layout/Header.tsx` and `component/layout/Footer.tsx`.

---

## Run Your Project

In the project folder, run:
`npm install`
`next dev`

---

## Deploy Your Project

To deploy your project to Vercel, run `vercel` in the project folder.

Or you can push it to GitHub/GitLab/Bitbucket and [import to Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=upstash-roadmap).

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.
