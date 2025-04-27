## Next JS - eCommerce Project

### VS Code Extensions

1. Prettier
2. Eslint
3. Prisma
4. Tailwind

Create Project
`npx  create-next-app@latest`

### Packages

1. lucide-react => for icons
2. next-themes => for dark themes

### Prisma and DB Setup

Create account in vercel.com and create a PostgreSQL Neon Db.

STEP 01: Add prisma to generate on postinstall in `package.json`

```json
"scripts": {
    ...
    "postinstall": "prisma generate"
  },
```

STEP 02: Generate prisma model locally

`npx prisma generate`

STEP 03: Migrate

`npx prisma migrate dev --name first-migration`

STEP 04: Look into DB

`npx prisma studio`

### DB Seeding

Run to seed the database

`npx tsx ./db/seed.ts`
