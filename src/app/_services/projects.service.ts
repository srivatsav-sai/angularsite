import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Angular Web App", 
      pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], 
      projectLink: "//www.github.com", 
      summary: "Python project that analyzes stock market data.", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
      tags: [Tag.Angular, Tag.TypeScript, Tag.Bootstrap]},
    {id: 0, name: "Discord Bot", 
      pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], 
      projectLink: "//www.github.com", 
      summary: "Python project that analyzes stock market data.", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
      tags: [Tag.Python, Tag.MongoDB]},
      {id: 0, name: "Django Web App", 
        pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], 
        projectLink: "//www.github.com", 
        summary: "Python project that analyzes stock market data.", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        tags: [Tag.Python, Tag.Django, Tag.CSS, Tag.Firebase]},
  ];

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number) : Project{
    let project = this.projects.find(project => project.id === id);

    if (project === undefined){
      throw new TypeError('There is project by the id: ' + id);
    }
    return project;
  }
}
