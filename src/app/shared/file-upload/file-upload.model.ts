export class UploadFile{
    uuid: string = '';
    name: string ='';
    size: number = 0;
    isStored: boolean = false;
    isImage: boolean = false;
    cdnUrl: string = '';
    cdnUrlModifers: string = '';
    mimeType: string = '';
    orignalUrl: string = '';
    orginalImageInfo: string[] = [];
    sourceInfo: string[] = [];
}

export class UploadFileFlux {
    
    uuid: string = '';
    name: string ='';
    cdnUrl: string = '';
    size: number = 0;
    isStored: boolean = false;
    isImage: boolean = false;

 
}