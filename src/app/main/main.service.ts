import { TreeNode } from './treeNode';
import { Injectable } from '@angular/core';


@Injectable()
export class MainService {

    cabinetTree: TreeNode[];

    getCabinetTree(): TreeNode[] {

        this.cabinetTree = [
            { imgPath: 'img/state.png', name: '國務院', description: '美國聯邦政府負責外交事務的行政部門。' },
            { imgPath: 'img/treasury.png', name: '財政部', description: '美國政府一個內閣部門，管理美國政府的收入。' },
            { imgPath: 'img/defense.png', name: '國防部', description: '主要負責統合國家安全與陸海空軍（美軍）。' },
            { imgPath: 'img/justice.png', name: '司法部', description: '保障法律的施行，維護美國政府的法律利益和保障法律對美國所有公民平等。' },
            { imgPath: 'img/interior.png', name: '內政部', description: '負責管理聯邦政府擁有的土地和保護自然資源。' },
            { imgPath: 'img/agriculture.png', name: '農業部', description: '通過對農業生產的支持，提高美國人民的生活品質。' },
            { imgPath: 'img/commerce.png', name: '商務部', description: '負責美國國際貿易、出口管制、貿易救濟措施等。' },
            { imgPath: 'img/labor.png', name: '勞工部', description: '主管全國勞工事務。' },
            { imgPath: 'img/health.png', name: '衛生及公共服務部', description: '維護美國公民健康，提供公眾服務的聯邦政府行政部門。' },
            { imgPath: 'img/housing.png', name: '住房及城市發展部', description: '主要負責管理有關社區發展的計劃和財政援助項目。' },
            { imgPath: 'img/trsnsportation.png', name: '運輸部', description: '負責管理航空、鐵路、聯邦公路、海事、公共運輸等方面。' },
            { imgPath: 'img/energy.png', name: '能源部', description: '能源政策制定，能源行業管理，能源相關技術研發、武器研製等。' },
            { imgPath: 'img/education.png', name: '教育部', description: '編列聯邦補助方案，以及執行聯邦關於民權及隱私的教育法案。' },
            { imgPath: 'img/veterans.png', name: '退伍軍人事務部', description: '美國退伍軍人及家屬提供服務的內閣部門。' },
            { imgPath: 'img/homeland.png', name: '國土安全部', description: '美國境內的邊境管制、情報統籌、緊急應變以及防止恐怖活動。' }
        ];

        return this.cabinetTree;
    }

    congressTree: TreeNode[];

    getCongressTree(): TreeNode[] {

        this.congressTree = [
            { imgPath: 'img/representatives.png', name: '眾議院', description: '為美國國會兩院之一，另一院為參議院。' },
            { imgPath: 'img/senate.png', name: '參議院', description: '為美國國會兩院之一，另一院為眾議院。' }
        ];

        return this.congressTree;
    }

    courtTree: TreeNode[];

    getCourtTree(): TreeNode[] {

        this.courtTree = [
            { imgPath: 'img/court.png', name: '最高法院', description: '一般是指美國聯邦最高法院，是美國最高級別的聯邦法院。' }
        ];

        return this.courtTree;
    }
}