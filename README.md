# NEAT Example

NEAT is Next.js, Express.js, Apollo, and Typescript.

# Configuration

Set up the following environment variables, replacing `${username}`, `${password}`, `${db-host}`, and `${db-port}` with the values appropriate for your environment:

```bash
export GATEWAY=http://localhost:31112
export APPS_URL=http://localhost:9090
export USER_INFO_URL=http://localhost:10000
export DE_DB_URL='postgres://${username}:${password}@${db-host}:${db-port}/de?sslmode=disable'
export PERMISSIONS_URL=http://localhost:9080
export METADATA_DB_URL='postgres://${username}:${password}@${db-host}:${db-port}/metadata?sslmode=disable'
```

I port-forward access to the OpenFaaS gateway, `apps` service, `user-info` service, and `permissions` service with kubectl:

```bash
kubectl port-forward svc/apps 9090:80 &
kubectl port-forward svc/user-info 10000:80 &
kubectl port-forward svc/permissions 9080:80 &
kubectl -n openfaas port-forward svc/gateway 31112:8080 &
```

# Development

First off, run `npm install` in the top-level directory. The run `npm run dev` after setting the aforementioned environment variables and forwarding the ports listed above. `nodemon` should get fired up, watching for changes in the `server` directory. Hit the address it prints out when everything is up and running to load the default next.js route. Hit `/graphql` to load up the graphql client served up through express with apollo.
