import { Component, inject } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  
  projectsService = inject(ProjectsService)

  projects$ = this.projectsService.all().pipe(map((res: any) => res.projects))

  onDeleteProject(project: any) {
    if (!confirm("Are you sure?")) return
    this.projectsService.delete(project._id).subscribe(() => this.projects$ = this.projectsService.all().pipe(map((res: any) => res.projects)))
  }
}
