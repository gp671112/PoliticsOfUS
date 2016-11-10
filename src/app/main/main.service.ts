import { Injectable } from '@angular/core';

import { TreeNode, TreeRoot } from './Trees';

@Injectable()
export class MainService {

    public getTree(): TreeRoot[] {

        var cabinetTree: TreeNode[] = this.getCabinetTree();
        var congressTree: TreeNode[] = this.getCongressTree();
        var courtTree: TreeNode[] = this.getCourtTree();

        var treeRoot: TreeRoot[] = [
            { title: '行政(內閣)', small: 'Cabinet', nodes: cabinetTree },
            { title: '立法', small: 'Congress', nodes: congressTree },
            { title: '司法', small: 'Supreme Court', nodes: courtTree },
        ];

        return treeRoot;
    }

    public getNodeByName(name: string): TreeNode {

        var treeNode: TreeNode;
        var treeRoot: TreeRoot[] = this.getTree();

        treeRoot.forEach(element => {
            element.nodes.forEach(n => {
                if (n.name === name) {
                    treeNode = n;
                }
            })
        });
        return treeNode;
    }

    // 行政節點 
    private getCabinetTree(): TreeNode[] {

        var cabinetTree: TreeNode[] = [
            { imgPath: 'img/state.png', name: '國務院', description: '美國國務院（英語：United States Department of State，有時亦稱State Department，直譯為「國務部」）[1]，是美國聯邦政府負責外交事務的行政部門，相當於世界各國的外交部，其行政首長為國務卿；美國國務院是美國最龐大的政府機構之一。現任的國務卿是約翰·凱瑞。美國國務院總部設在美國首都華盛頓霧谷地區C街2201號的杜魯門大樓，離白宮只有幾個街區距離。因此「霧谷」（Foggy Bottom）有時也被作為國務院的代稱。美國國務卿是美國內閣中僅次於副總統後的成員。如果總統無法有效行使總統權力能力或者意外死亡，按照美國總統繼任順序，國務卿排在第四位，即排在美國副總統、美國眾議院議長和參議院臨時議長之後。但由於副總統祇是充當總統的備胎因而位高權不重，而參議院臨時議長象徵意義較大，美國政治權力當中，國務卿的真正實權相比副總統和參議院臨時議長還要大，故國務卿的真正權力是僅次於總統和美國眾議院議長。' },
            { imgPath: 'img/treasury.png', name: '財政部', description: '美國財政部（英語：United States Department of the Treasury）是美國政府一個內閣部門。它由美國國會於1789年建立，管理美國政府的收入。1775年，美國司庫辦公室由大陸會議創建，是美國財政部的前身。[1]。1789年9月2日，美國財政部正式創立。亞歷山大·漢密爾頓成為第一任財政部部長。' },
            { imgPath: 'img/defense.png', name: '國防部', description: '美國國防部（英語：United States Department of Defense，簡稱DOD或DoD）是美國聯邦行政部門之一，主要負責統合國家安全與陸海空軍（美軍），其總部大樓位於五角大廈（The Pentagon），因此人們也常用五角大廈作為美國國防部的代稱。國防部的行政首長是國防部長，依照美國法律由文官擔任。美國國防部設有三個軍事部門：陸軍部、海軍部與空軍部，涵蓋除海岸防衛隊外的所有美國軍隊。除此之外，美國國防部亦設有若干國防幕僚與研究單位，同時管轄各軍校。1947年，美國政府將軍隊管理中央化，將軍事指揮權統一交由新成立的「國家軍事機構」（National Military Establishment），除了將陸軍部與海軍部交由其管轄之外，同時將美國陸軍航空軍升格為獨立的美國空軍，建立一個直屬於該機構的空軍部。至1949年8月10日，國家軍事機構才更名為國防部。美國國防部現在的組織是按照美國國會通過的1986年的《戈德華特－尼科爾斯國防部改組法》（Goldwater-Nichols Act of 1986）。按照這個法案，軍事命令是從美國總統通過美國國防部長直接到美國戰區司令官。參謀長聯席會議有責任管理美國武器和後備軍人，參謀長聯席會議主席也擔任總統和國家安全委員會的首席軍事顧問，但是參聯會沒有指揮權。' },
            { imgPath: 'img/justice.png', name: '司法部', description: '美國司法部（英語：Department of Justice）是美國政府的一個部，其部門長官享有閣員地位。負責的任務是保障法律的施行，維護美國政府的法律利益和保障法律對美國所有公民平等。司法部是由美國聯邦政府的行政機關組成，而非司法機關的組成。其部門首長稱為美國司法部長。現任總檢察長為洛麗泰·林奇，由第44任美國總統巴拉克·歐巴馬提名，任命案於2015年4月23日獲得美國參議院投票通過，於27日宣誓就職。美國於1789年設立了總檢察長一職，一開始的時候這是非全日性的職務，其任務是為美國國會和總統提供法律諮詢，但隨著美國官僚機構的擴大，這個職務的工作量也不斷增大，1819年時已無法繼續充當國會和政府的法律顧問。1870年6月22日，美國國會決定建立一個司法部，此部門於1870年7月1日正式執行職務。這個部門的增設對總檢察官的任務、薪金和地位都沒有改變。在聯邦總檢察長之下，另外設置聯邦總律師（Solicitor General），其任務是在法律糾紛中在美國最高法院代表美國政府，不過在比較重要的法律案當中，仍舊由聯邦總檢察長出席審判。' },
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

        return cabinetTree;
    }

    // 立法節點
    private getCongressTree(): TreeNode[] {

        var congressTree: TreeNode[] = [
            { imgPath: 'img/representatives.png', name: '眾議院', description: '為美國國會兩院之一，另一院為參議院。' },
            { imgPath: 'img/senate.png', name: '參議院', description: '為美國國會兩院之一，另一院為眾議院。' }
        ];

        return congressTree;
    }

    // 司法節點
    private getCourtTree(): TreeNode[] {

        var courtTree: TreeNode[] = [
            { imgPath: 'img/court.png', name: '最高法院', description: '一般是指美國聯邦最高法院，是美國最高級別的聯邦法院。' }
        ];

        return courtTree;
    }
}