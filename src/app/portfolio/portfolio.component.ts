import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { NgFor } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Tag } from '../_models/Tag';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, NgFor, NgbCollapseModule, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{

  projects= {} as Project[];

  isCollapsed = true;
  filtering: boolean = false;
  typescript: boolean = false;
  python: boolean = false;
  css: boolean = false;
  mongodb: boolean = false;
  firebase: boolean = false;
  bootstrap: boolean = false;
  django: boolean = false;
  angular: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Srivatsav - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();

  }
  Filter(){
    let filterTags: Tag[] = [];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.python){
      filterTags.push(Tag.PYTHON);
    }
    if(this.css){
      filterTags.push(Tag.CSS);
    }
    if(this.mongodb){
      filterTags.push(Tag.MONGODB);
    }
    if(this.firebase){
      filterTags.push(Tag.FIREBASE);
    }
    if(this.bootstrap){
      filterTags.push(Tag.BOOTSTRAP);
    }
    if(this.django){
      filterTags.push(Tag.DJNAGO);
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }

    if (filterTags.length > 0){
      this.filtering = true;

    } else {
      this.filtering = false;

    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }
  ResetFilters(){
    this.typescript = false;
    this.python = false;
    this.css = false;
    this.mongodb = false;
    this.firebase = false;
    this.bootstrap = false;
    this.django = false;
    this.angular = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
