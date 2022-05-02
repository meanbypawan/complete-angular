import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  categoryList:Category[]|any;

  constructor(private toaster:ToastrService, private _categoryService:CategoryService) { }

  ngOnInit(): void {
     this._categoryService.getCategortList()
     .subscribe(data=>{
       this.categoryList = data;
     },err=>{
        if(err instanceof HttpErrorResponse){
          if(err.status == 500)
            this.toaster.error("Intenal Server Error","Error");
        }
     });
  }

}
