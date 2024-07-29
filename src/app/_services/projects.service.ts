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
      myimage: "assets/myself2.jpg", 
      pictures: ["assets/DiscordBot/Screenshot 2024-07-21 173750.png",
        "assets/DiscordBot/Screenshot 2024-07-21 173815.png",
        "assets/DiscordBot/Screenshot 2024-07-21 173834.png",
        "assets/DiscordBot/Screenshot (381).png"], 
      projectLink: "https://github.com/srivatsav-sai/CaleBot", 
      summary: "Python bot made for Discord while also using MongoDB.", 
      description: "This is a bot made for the social media app 'Discord'. This bot elevates the experience of using Discord by providing extra features using Discord's own APIs. This bot was developed using Python, and MongoDB was used to store data.", 
      tags: [Tag.PYTHON, Tag.MONGODB]},
    {id: 1, 
      name: "Angular Web App", 
      myimage:"",
      pictures: ["assets/AngularPics/Screenshot (375).png",
        "assets/AngularPics/Screenshot (380).png",
        "assets/AngularPics/Screenshot (382).png",
        "assets/AngularPics/Screenshot (377).png"], 
      projectLink: "https://github.com/srivatsav-sai/angularsite", 
      summary: "Front-End Portfolio Wesbite that you are looking at right now.", 
      description: "This is my Portfolio Website made to showcase my skills in Front-End Development using Angular, TypeScript and Bootstrap.", 
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.BOOTSTRAP]},
    {id: 2, 
      name: "Django Web App", 
      myimage:"",
      pictures: ["assets/DjangoPics/Screenshot 2024-07-21 174146.png",
        "assets/DjangoPics/Screenshot 2024-07-21 174206.png",
        "assets/DjangoPics/Screenshot 2024-07-21 174236.png"], 
      projectLink: "https://github.com/srivatsav-sai/django-oas", 
      summary: "Fullstack website developed using Django and Firebase.", 
      description: "This is a website that me and my teammates in built for the purpose of being able to schedule appointment with attorneys. I worked on the Back-End part using Django and also on the database part using Firebase. Also worked a bit on the Front-End part using.", 
      tags: [Tag.DJANGO ,Tag.PYTHON, Tag.FIREBASE, Tag.CSS]}
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
