import { Component, OnInit } from '@angular/core';

import { MainService } from './main.service';
import { TreeRoot, TreeNode } from './Trees';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [MainService]
})
export class MainComponent implements OnInit {

  mainService: MainService;

  constructor(_mainService: MainService) {
    this.mainService = _mainService;
  }

  imgWidth: number;
  treeRoot: TreeRoot[];

  ngOnInit() {
    this.imgWidth = 40;
    this.treeRoot = this.mainService.getTree();
  }
}


