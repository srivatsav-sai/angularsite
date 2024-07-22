import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  constructor(private titleService: Title, private renderer: Renderer2){
    this.titleService.setTitle('Srivatsav - Resume');
  }

  DownloadPDF(){
    const link  = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Srivatsav Resume.pdf');
    link.setAttribute('donwload', 'Srivatsav Resume.pdf');
    link.click();
    link.remove();
  }
}
