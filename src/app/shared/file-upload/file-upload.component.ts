import { Component, OnInit } from "@angular/core";
import { FileUploadService } from "./file-upload.service";
import { UploadFile, UploadFileFlux } from "./file-upload.model";

@Component({
    selector: 'file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit {

    file: UploadFile = {
        uuid: '',
        name: '',
        size: 0,
        isStored: false,
        isImage: false,
        cdnUrl: '',
        cdnUrlModifers: '',
        mimeType: '',
        orignalUrl: '',
        orginalImageInfo: [],
        sourceInfo: []
    }; 

    fluxFile: UploadFileFlux = {

        uuid: '',
        name: '',
        cdnUrl: '',
        isImage: false,
        isStored: false,   
        size: 0
        
    }
  
    constructor(private fileUploadService: FileUploadService) { }
  
    ngOnInit(): void {
    }

    onUploadClickHandler($event: UploadFile){
          
            this.file = $event;

            this.fluxFile.uuid = $event.uuid;
            this.fluxFile.name = $event.name;
            this.fluxFile.cdnUrl = $event.cdnUrl;
            this.fluxFile.size = $event.size;
            this.fluxFile.isImage = $event.isImage;
            this.fluxFile.isStored = $event.isStored;
       

            console.log('sfddfsdf yes!   ',this.fluxFile )
            this.fileUploadService.onUpload(this.fluxFile).subscribe();
    }
    
    onChange(event: any) {
        this.file = event.target.files[0];
    }
}