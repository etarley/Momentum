# Momentum


Momentum is an open-source, self-hosted project management tool. It is built with a mission to simplify agile practices and enhance the efficiency of your projects. With Momentum, you can manage issues, plan sprints, and organize product roadmaps seamlessly.

Derived from the open-source project, Plane, and inspired by popular project management tools like JIRA, Linear, and Height, Momentum seeks to offer the best features of these tools while eliminating complexities.


## Features

- **Issue Tracking**: Quickly create and track issues with rich text descriptions and file attachments.
- **Project Views**: Customize your project visualization with List, Kanban, or Calendar layouts.
- **Sprint Planning**: Use Cycles to plan and track progress across sprints with burn-down charts.
- **Project Modules**: Break down your project into manageable modules and assign teams for easy tracking.
- **Custom Filters**: Create custom filters to focus on the issues that matter the most to you.
- **Documentation**: AI-powered documentation allows you to easily capture issues, plans, and details.
- **Navigation**: The Command + K menu provides a fast and efficient way to navigate through your projects.

## Quick Start with Docker Compose

1. Clone the repository:  
   `git clone https://github.com/yourgithubusername/momentum`
2. Enter the directory:  
   `cd momentum`
3. Run setup.sh:  
   `./setup.sh http://localhost`  
   Replace localhost with the public facing IP address of the VM if running in a cloud environment.
4. Export Environment Variables:  
   `set -a`  
   `source .env`  
   `set +a`
5. Run Docker compose up:  
   `docker compose up -d`  

You can use the default email and password for your first login.

## Security

Please email security@momentum.so to disclose any security vulnerabilities responsibly.

## License

This project is licensed under the AGPL-3.0. Please see the [LICENSE.txt](LICENSE.txt) file for details.

---

Made with ❤️ by Etarley Taveras Taveras
