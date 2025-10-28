# Use Nitro Workflow

Quickstart Nitro template that is using `"use workflow"`

## Development

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

3. Curl the signup endpoint

```bash
curl -X POST --json '{"email":"hello@example.com"}' http://localhost:3000/api/signup
```
## Deployment

```bash
npm run deploy
```

or to deploy to production

```bash
npm run prod
```

## Learning

- [Nitro quick start](https://nitro.build/guide#quick-start) to learn more how to get started.
- [Workflow](https://useworkflow.dev/)
