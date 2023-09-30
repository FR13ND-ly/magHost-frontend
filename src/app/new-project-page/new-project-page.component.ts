import { Component, inject } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { FilesService } from '../services/files.service';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-new-project-page',
  templateUrl: './new-project-page.component.html',
  styleUrls: ['./new-project-page.component.scss']
})
export class NewProjectPageComponent {
  navigation: any = []

  filesService = inject(FilesService)
  projectsService = inject(ProjectsService)

  files: any = []

  result$!: Observable<any>
  view$ = new BehaviorSubject<any>(this.files)

  onSubmit(form: any) {
    if (!this.checkName(form.value.name)) return alert("Invalid Project Name")
    let files = this.resolveFiles()
    let formData = new FormData;
    formData.append("name", form.value.name)
    formData.append("index", form.value.index)
    for (const item of files) {
      formData.append(item.path, item.file);
    }
    this.result$ = this.projectsService.createProject(formData)
  }

  resolveFiles(folder: any = this.files, path: string = '') {
    let files: any = []
    for (const item of folder) {
      if (item.type == 'file') {
        files.push({
          file : item.file,
          path
        })
      }
      else {
        files.push(...this.resolveFiles(
          item.files,
          path + "/" + item.name + "/"
        ))
      }
    }
    return files
  }

  onCloseResult() {
    this.result$ = of(null)
  }

  checkName(inputString: any) {
    var pattern = /^[a-zA-Z0-9]+$/;;
  
    return pattern.test(inputString);
  }
}
