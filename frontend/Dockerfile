
FROM node:alpine AS app-build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# stage 2

FROM nginx:alpine
COPY --from=app-build /app/dist/frontend /usr/share/nginx/html
EXPOSE 80