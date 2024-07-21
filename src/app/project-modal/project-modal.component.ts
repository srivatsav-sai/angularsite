import { Component, Input, inject, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../_models/Project';
import { CarouselModule } from "ngx-bootstrap/carousel";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [NgFor, CarouselModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent implements OnInit{
  @Input() project = {} as Project;

  activeModal = inject(NgbActiveModal);
  ngOnInit() {
  }
}
