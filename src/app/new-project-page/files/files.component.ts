import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { FolderComponent } from '../folder/folder.component';
import { FileComponent } from '../file/file.component';
import { ActionsComponent } from '../actions/actions.component';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [CommonModule, FileComponent, FolderComponent, ActionsComponent, NavigationComponent],
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent {

  navigation : any = []
  
  @Input()
  files: any = []

  view$ = new BehaviorSubject<any>(this.files)

  onDeleteItem(j: any) {
    if (!confirm("Are you sure?")) return
    this.getCurrentFolder().splice(j, 1)
  }

  onCreateFolder() {
    let folderName = prompt("Folder name")
    if (!folderName?.trim()) return alert("Folder name must be not empty")
    this.addItemInFolder({
      id: Date.now(),
      type: "folder",
      name: folderName,
      files: []
    })
    this.setFolder()
  }

  onUpload(input: any) {
    Array.from(input.files).forEach((file: any) => {
      this.addItemInFolder({
        id: Date.now(),
        type: "file",
        name: file.name,
        file: file
      })
    });
    input.value = ''
    this.setFolder()
  }

  onUploadFolder(input: any) {
    Array.from(input.files).forEach((file: any) => {
      let path = file.webkitRelativePath.split('/')
      path.shift()
      this.uploadFolderItems(file, path)
    })
    this.setFolder()
    input.value = ''
  }

  uploadFolderItems(file: any, folders: any = []) {
    folders.reduce((r: any, e: any, i: any, a: any) => {
      if (a.length == i + 1) {
        r.push({
          id: Date.now(),
          type: "file",
          name: file.name,
          file: file
        })  
      }
      else {
        let match = r.find((item: any) => item.name == e && item.type == 'folder')
        if (match) return match.files
        else {
          let folder = {
            id: Date.now(),
            type: "folder",
            name: e,
            files: []
          }
          r.push(folder)
          let a = r.find((item: any) => item.id == folder.id && item.type == 'folder')
          return a.files
        }
      }
    }, this.getCurrentFolder())
  }

  getCurrentFolder() {
    if (!this.navigation.length) return this.files
    return this.getDepthArray().reduce((r: any, e: any, i: any, a: any) => {
      const match = r[e];
      console.log(r, e)
      if (a.length == i + 1 && match) {
        return r[e].files
      }
      else if (match) return match.files;
    
      return {}
    
    }, this.files)
  }

  addItemInFolder(item: any): any {
    if (!this.navigation.length) return this.files.push(item)
    this.getCurrentFolder().push(item)
  }

  onEnterFolder(item: any, index: any) {
    this.navigation.push({
      name: item.name,
      index
    })
    this.view$.next(item.files)
    
  }

  onNavigate(i : any) {
    this.navigation = this.navigation.slice(0, i)
    this.setFolder()
  }

  setFolder() {
    if (!this.navigation.length) this.view$.next(this.files)
    this.view$.next(this.files)
    this.navigation.forEach((el: any) => {
      this.view$.next(this.view$.value[el.index].files)
    });
  }

  getDepthArray() {
    if (!this.navigation.length) return []
    let depth: any = []
    this.navigation.forEach((el: any) => {
      depth.push([el.index])
    });
    return depth
  }
}
