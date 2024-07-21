import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { NgFor } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  // @Input() projectName: string = '';
  // @Input() programUsed1: string = '';
  // @Input() programUsed2: string = '';
  // @Input() programUsed3: string = '';
  @Input() project = {} as Project;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService){}
  OpenProjectModal(){
    this.bsModalRef = this.modalService.show(ProjectModalComponent);
  }
}
