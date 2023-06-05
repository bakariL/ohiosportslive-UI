import { Injectable } from "@angular/core";


@Injectable({providedIn:'root'})
export class HttpFluxToolsService{

    constructor(
      //  private appSettingsService: AppSettingsService,
    ){

    }

    getOdataUrl(path: string){
        // const { baseUrl } = this.appSettingsService.getSettings();
     const baseUrl = 'https://localhost:5001'

        return `${baseUrl}/odata${path}`;
    }

}