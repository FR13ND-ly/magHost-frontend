import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
  http = inject(HttpClient)

  api = environment.api + 'projects/'

  createProject(data: any) {
    return this.http.post(this.api + 'new/', data)
  }

  all() {
    return this.http.get(this.api + 'all/')
  }

  delete(id: any) {
    return this.http.get(`${this.api}delete/${id}/`)
  }

}
