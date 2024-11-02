# docker

docker build . (used to build the image)

docker build -t node-app-image . (used to build the image with name)

docker image ls (list out docker image)

docker image rm imageid (remove docker image)

docker run -d --name node-app node-app-image (run docker with image name)

docker container ls or docker ps (list out container)

docker rm node-app -f (remove container)

docker run -p 3001:3000 -d --name node-app node-app-image (run docker container with port mapping)

docker exec -it node-app bash (go inside code of node in docker bash)

docker run -v $(pwd):/app -p 3001:3000 -d --name node-app node-app-image (bind mount method to sync with code)

docker run -d -p 3001:3000 -v $(pwd):/app:ro --name node-app node-app-image (read only bind mount)

docker run -p 3001:4000 -v $(pwd):/app:ro --env PORT=4000 -d --name node-app node-app-image (with env)

docker run -v $(pwd):/app:ro -p 3002:4000 --env-file ./.env -d --name node-app node-app-image (with env file)

docker-compose up -d (up the docker compose)

docker-compose down -v (down docker compose and delete volumes)

docker-compose up -d --build (forces the build)

docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d (up with dev script)

docker-compose -f docker-compose.yml -f docker-compose-dev.yml down -v (down with dev script)

docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --buil d (force to create build)
