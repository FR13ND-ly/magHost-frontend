import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  http = inject(HttpClient)

  api = environment.api + 'files/'

  sendFiles(files: any) {
    return this.http.post(this.api + 'upload', {
        
      files
    })  
  }

}
