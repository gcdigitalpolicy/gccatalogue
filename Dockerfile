FROM node:20-alpine AS base

WORKDIR /app

COPY package.json package-lock.json*  ./
RUN npm ci

COPY src ./src
# COPY public ./public
COPY next.config.mjs .
COPY jsconfig.json .
COPY slicemachine.config.json .

ENV NEXT_TELEMETRY_DISABLED 1

CMD npm run dev
