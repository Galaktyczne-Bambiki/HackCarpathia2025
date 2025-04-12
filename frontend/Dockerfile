FROM node:23.11.0-slim AS builder

WORKDIR /usr/src/app

COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci

COPY frontend/ ./
RUN npm run build

FROM nginx:1.27.4-alpine-slim

COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist/frontend/browser /usr/share/nginx/html