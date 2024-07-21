import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{

  projects= {} as Project[];

  isCollapsed: boolean = true;

  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Srivatsav - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();

  }
}
