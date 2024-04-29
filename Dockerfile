FROM node:18-alpine as builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . /app/

RUN VITE_REACT_APP_API_URL=https://test.eosi.kz npm run build

FROM macbre/nginx-brotli:1.19.6-http3

EXPOSE 80

WORKDIR /app

COPY default.nginx /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
