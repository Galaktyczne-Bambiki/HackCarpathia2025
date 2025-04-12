FROM node:23.11.0-slim AS builder
ARG NG_APP_GOOGLE_MAPS_KEY=
ENV NG_APP_GOOGLE_MAPS_KEY=${NG_APP_GOOGLE_MAPS_KEY}
ARG NG_APP_GOOGLE_MAP_ID=
ENV NG_APP_GOOGLE_MAP_ID=${NG_APP_GOOGLE_MAP_ID}

WORKDIR /usr/src/app

COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci

COPY frontend/ ./
RUN npm run build

FROM nginx:1.27.4-alpine-slim

COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist/frontend/browser /usr/share/nginx/html