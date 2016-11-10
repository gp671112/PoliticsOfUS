import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from './main.service';
import { TreeRoot, TreeNode } from './Trees';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: []
})
export class MainComponent implements OnInit {

  constructor(
    private mainService: MainService,
    private router: Router) { }

  imgWidth: number;
  treeRoot: TreeRoot[];

  ngOnInit() {
    this.imgWidth = 30;
    this.treeRoot = this.mainService.getTree();
  }

  onClick(node: TreeNode) {
    this.router.navigate(['/main', node.name]);
  }
}


