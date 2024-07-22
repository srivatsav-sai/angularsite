import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, 
      name: "Python Discord Bot",
      myimage: "assets/myself.png", 
      pictures: ["assets/AngularPics/Screenshot 2024-07-21 170653.png",
        "assets/AngularPics/Screenshot 2024-07-21 170803.png",
        "assets/AngularPics/Screenshot 2024-07-21 170829.png"], 
      projectLink: "https://github.com/srivatsav-sai/CaleBot", 
      summary: "Python bot made for Discord.", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
      tags: [Tag.PYTHON, Tag.MONGODB]},
    {id: 1, 
      name: "Angular Web App", 
      myimage:"",
      pictures: ["assets/DiscordBot/Screenshot 2024-07-21 173750.png",
        "assets/DiscordBot/Screenshot 2024-07-21 173815.png",
        "assets/DiscordBot/Screenshot 2024-07-21 173834.png"], 
      projectLink: "https://github.com/srivatsav-sai/angularsite", 
      summary: "Front-End web app developed using Angular and TypeScript", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.BOOTSTRAP]},
    {id: 2, 
      name: "Django Web App", 
      myimage:"",
      pictures: ["assets/DjangoPics/Screenshot 2024-07-21 174146.png",
        "assets/DjangoPics/Screenshot 2024-07-21 174206.png",
        "assets/DjangoPics/Screenshot 2024-07-21 174236.png"], 
      projectLink: "https://github.com/srivatsav-sai/django-oas", 
      summary: "Fullstack web app developed using Django", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
      tags: [Tag.DJNAGO ,Tag.PYTHON, Tag.FIREBASE, Tag.CSS]}
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

  GetProjectsByFilter(filterTags:Tag[]){
    let filteredProjects : Project[] = [];
    this.projects.forEach(function(project){
      let foundAll = true;
      filterTags.forEach(function(filterTag){
        if (project.tags.includes(filterTag) == false){
          foundAll = false;
        }
      })
      if (foundAll){
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
  }
}
