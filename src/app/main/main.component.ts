import { TreeNode } from './treeNode';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  treeNode: TreeNode[];

  ngOnInit() {

    this.treeNode = [
      { imgPath: 'img/img1.png', name: '國務院' }
    ];

  }
}
