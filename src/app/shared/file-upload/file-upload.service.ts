import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { FluxConnections } from '../constants/flux-connections';
import { UploadFile, UploadFileFlux } from './file-upload.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
    
  constructor(private http:HttpClient) { }

  onUpload(file: UploadFileFlux): Observable<UploadFileFlux>
{
    return this.http.post<UploadFileFlux>
        (FluxConnections.FLUX_API_URI + 'api/FluxFileManager/upload-new-image', file)
        .pipe(
              retry(1)
             );
}



}
