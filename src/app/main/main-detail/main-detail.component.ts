import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MainService } from './../main.service';
import { TreeNode } from './../Trees';

@Component({
  selector: 'app-main-detail',
  templateUrl: './main-detail.component.html',
  styleUrls: ['./main-detail.component.css']
})
export class MainDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private mainService: MainService) { }

  selectedNode: TreeNode;

  ngOnInit() {
    this.route.params.subscribe(params => {
      var name: string = params['name'];

      this.selectedNode = this.mainService.getNodeByName(name) ? this.mainService.getNodeByName(name) : this.mainService.getNodeByName('眾議院');
    });
  }
}
