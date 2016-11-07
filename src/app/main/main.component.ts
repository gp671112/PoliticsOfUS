import { Component, OnInit } from '@angular/core';

import { MainService } from './main.service';
import { TreeNode } from './treeNode';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [MainService]
})
export class MainComponent implements OnInit {

  mainserVice: MainService;

  imgWidth: number;

  constructor(_mainService: MainService) {
    this.mainserVice = _mainService;
    this.imgWidth = 40;
  }

  cabinetTree: TreeNode[];
  congressTree: TreeNode[];
  courtTree: TreeNode[];

  ngOnInit() {

    this.cabinetTree = this.mainserVice.getCabinetTree();
    this.congressTree = this.mainserVice.getCongressTree();
    this.courtTree = this.mainserVice.getCourtTree();
  }
}
