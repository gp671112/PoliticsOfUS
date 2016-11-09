export class TreeRoot {
    constructor(
        public title: string,
        public small: string,
        public nodes: TreeNode[]
    ) { }
}

export class TreeNode {
    constructor(
        public imgPath: string,
        public name: string,
        public description: string
    ) { }
}