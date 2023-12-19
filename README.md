# Mission5

Containerised full-stack app for rental properties

## Running in containers

- Clone the repo
- Run `docker compose up -d`
- Any code changes will be reflected in the containers as the volumes are mounted
- API will run on `http://localhost:8005`
- App will run on `http://localhost:8004`

## Running locally

- Clone the repo
- `cd backend`
  - `npm i`
  - `npm run dev`
  - API will run on `http://localhost:3005`
- `cd frontend`
  - change vite.config `target: "http://backend:3005"` to `target: "http://localhost:3005"`
  - `npm i`
  - `npm run dev`
  - App will run on `http://localhost:3000`

## Mongo DB

- To connect to mongo from your mongo compass use the port `27018`
- To seed data to mongo db, please use mongo-cli and modify to your needs
- run `npm i`
- `npm run build`
- `node dist/index.js seed` to seed data
- `node dist/index.js listings` to see all listings from mongo
