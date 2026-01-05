# Repository Project Management Guide

This guide explains how to organize and add projects to this repository using the master index system.

## Master Index Page

The master index page (`master_index.html`) serves as a central hub for all projects in this repository. It allows you to:
- Organize multiple projects in a single repository
- Provide easy navigation between projects
- Maintain a clean project structure

## Adding New Projects

### Method 1: Subfolder Approach
1. Create a new folder for your project:
   ```bash
   mkdir my-new-project
   cd my-new-project
   ```

2. Create your project files (HTML, CSS, JS, etc.)

3. Update the `master_index.html` file to include a link to your project:
   - Find the `<div class="projects-grid" id="projectsGrid">` section
   - Add a new project card similar to the existing ones:
   ```html
   <div class="project-card">
       <h3 class="project-title">
           <span>🎨</span> Your Project Name
       </h3>
       <p class="project-description">
           Brief description of your project.
       </p>
       <a href="./my-new-project/index.html" class="project-link" target="_blank">View Project</a>
   </div>
   ```

### Method 2: Root-Level Files
1. Create your project files directly in the root directory (like the current West Lake project)
2. Update the `master_index.html` to include a link to your project

## Project Structure Recommendations

For better organization, consider using the following structure:

```
/workspace/
├── master_index.html          # Master index page (main hub)
├── PROJECTS_GUIDE.md          # This guide
├── README.md                  # Main repository README
├── index.html                 # Current West Lake project
├── styles.css
├── script.js
├── project1/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── project2/
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── assets/
    ├── images/
    └── other-assets/
```

## Best Practices

1. **Use descriptive names** for your project folders and files
2. **Include README files** in each project folder with specific documentation
3. **Update the master index** whenever you add a new project
4. **Use appropriate emojis** in the project cards for visual recognition
5. **Write clear descriptions** that help identify each project's purpose

## Maintaining the Index

Remember to keep the master index updated:
- Add new projects as they're created
- Update descriptions when projects change
- Remove links when projects are deprecated
- Use the search functionality to find specific projects quickly

## Starting a Development Server

To view the master index and all projects locally:

```bash
cd /workspace
python3 -m http.server 8000
```

Then visit `http://localhost:8000/master_index.html` to access the master index page.