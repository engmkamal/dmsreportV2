import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//import { dashboardsListsInfo } from '../../../assets/dashboardslistsinfo';


@Component({
  selector: 'dmsportal-dashboardshome',
  templateUrl: './dashboardshome.component.html',
  styleUrls: ['./dashboardshome.component.scss'],
})
export class DashboardshomeComponent implements OnInit {

  //dashboardsListsInfo:any;

  //allWf = dashboardsListsInfo;

  allWf:any;

  //public webAbsoluteUrl = window.location.origin;
  public webAbsoluteUrl = "https://enadocreport.com/";

  constructor(
    private _router:Router,
    private httpClient: HttpClient
    ) { }

  ngOnInit(): void {
    //const dbListsInfoUrl = "https://portal.bergerbd.com/Style Library/Dashboard/V1/assets/dashboardslistsinfo.ts";
    const dbListsInfoUrl = "http://localhost:4209/assets/dashboardslistsinfo.ts";
    this.httpClient.get(dbListsInfoUrl).subscribe(data =>{
      this.allWf = data;
    })

    // fetch('../../../assets/dashboardslists.json')
    // .then(res => res.json())
    // .then(jsonData => {
    //   this.allWf = jsonData;
    // });

    
    //console.log("DashboardshomeComponent initialized !! ");
    
  }

  trackByFnMenu(index:number, wf:any){
    return wf.WfName;
  }
  //========for passing url link while click on each Menu/Tiles ============
  editButtonClick(wf:any){
    this._router.navigate(['/admin', wf])
  }

}

