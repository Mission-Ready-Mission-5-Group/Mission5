# Build stage
FROM node:latest AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# for production
# RUN npm run build

# # Runtime stage
# FROM node:latest

# COPY --from=build /app/node_modules ./node_modules
# COPY --from=build /app/package.json ./
# COPY --from=build /app/dist ./dist

EXPOSE 3005
CMD ["npm", "run", "dev"]