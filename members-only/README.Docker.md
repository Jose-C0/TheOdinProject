## Docker commands

| Commands | Comment |
| ------ | ------ |
| docker compose up --watch |  # Create and start containers. Is used to monitor specified file or directory paths on the host machine and automatically update running Docker Compose services when changes are detected. |
| docker compose up --build -d| # builds or re-builds the Docker images for your services and then runs them in detached mode, meaning the containers will run in the background |   
| docker compose up -d |  # Create and start containers ( postgreSQL and adminer inventor-app) |
| docker compose down |   # Stop and remove containers, networks |
| docker compose start |
| docker compose stop |
| docker start NAME-OF-CONTAINER |
| docker stop NAME-OF-CONTAINER |
| docker compose ps | # Shows the status of all containers running|

#### docker compose up paramerts explain

| Parameter | Description |
| ------ | ------ |
| --watch |  Is a feature that allows developers to monitor specified files or directories for changes and automatically update running Docker Compose services based on those changes.|
| --build | The docker-compose --build option is used to rebuild Docker images when you run docker-compose up. This ensures that any changes made to the Dockerfile or the build context are applied. |
| -d      | The docker compose up --detach command starts the containers in the background and leaves them running. This allows you to exit the terminal without stopping the containers. |  

