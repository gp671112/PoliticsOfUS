import { Injectable } from '@angular/core';

import { TreeNode, TreeRoot } from './Trees';

@Injectable()
export class MainService {

    public getTree(): TreeRoot[] {

        var cabinetTree: TreeNode[] = this.getCabinetTree();
        var congressTree: TreeNode[] = this.getCongressTree();
        var courtTree: TreeNode[] = this.getCourtTree();

        var treeRoot: TreeRoot[] = [
            { title: '立法', small: 'Congress', nodes: congressTree },
            { title: '司法', small: 'Supreme Court', nodes: courtTree },
            { title: '行政(內閣)', small: 'Cabinet', nodes: cabinetTree }
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
            { imgPath: 'assets/img/state.png', name: '國務院', description: '美國國務院（英語：United States Department of State，有時亦稱State Department，直譯為「國務部」）[1]，是美國聯邦政府負責外交事務的行政部門，相當於世界各國的外交部，其行政首長為國務卿；美國國務院是美國最龐大的政府機構之一。現任的國務卿是約翰·凱瑞。美國國務院總部設在美國首都華盛頓霧谷地區C街2201號的杜魯門大樓，離白宮只有幾個街區距離。因此「霧谷」（Foggy Bottom）有時也被作為國務院的代稱。美國國務卿是美國內閣中僅次於副總統後的成員。如果總統無法有效行使總統權力能力或者意外死亡，按照美國總統繼任順序，國務卿排在第四位，即排在美國副總統、美國眾議院議長和參議院臨時議長之後。但由於副總統祇是充當總統的備胎因而位高權不重，而參議院臨時議長象徵意義較大，美國政治權力當中，國務卿的真正實權相比副總統和參議院臨時議長還要大，故國務卿的真正權力是僅次於總統和美國眾議院議長。' },
            { imgPath: 'assets/img/treasury.png', name: '財政部', description: '美國財政部（英語：United States Department of the Treasury）是美國政府一個內閣部門。它由美國國會於1789年建立，管理美國政府的收入。1775年，美國司庫辦公室由大陸會議創建，是美國財政部的前身。[1]。1789年9月2日，美國財政部正式創立。亞歷山大·漢密爾頓成為第一任財政部部長。' },
            { imgPath: 'assets/img/defense.png', name: '國防部', description: '美國國防部（英語：United States Department of Defense，簡稱DOD或DoD）是美國聯邦行政部門之一，主要負責統合國家安全與陸海空軍（美軍），其總部大樓位於五角大廈（The Pentagon），因此人們也常用五角大廈作為美國國防部的代稱。國防部的行政首長是國防部長，依照美國法律由文官擔任。美國國防部設有三個軍事部門：陸軍部、海軍部與空軍部，涵蓋除海岸防衛隊外的所有美國軍隊。除此之外，美國國防部亦設有若干國防幕僚與研究單位，同時管轄各軍校。1947年，美國政府將軍隊管理中央化，將軍事指揮權統一交由新成立的「國家軍事機構」（National Military Establishment），除了將陸軍部與海軍部交由其管轄之外，同時將美國陸軍航空軍升格為獨立的美國空軍，建立一個直屬於該機構的空軍部。至1949年8月10日，國家軍事機構才更名為國防部。美國國防部現在的組織是按照美國國會通過的1986年的《戈德華特－尼科爾斯國防部改組法》（Goldwater-Nichols Act of 1986）。按照這個法案，軍事命令是從美國總統通過美國國防部長直接到美國戰區司令官。參謀長聯席會議有責任管理美國武器和後備軍人，參謀長聯席會議主席也擔任總統和國家安全委員會的首席軍事顧問，但是參聯會沒有指揮權。' },
            { imgPath: 'assets/img/justice.png', name: '司法部', description: '美國司法部（英語：Department of Justice）是美國政府的一個部，其部門長官享有閣員地位。負責的任務是保障法律的施行，維護美國政府的法律利益和保障法律對美國所有公民平等。司法部是由美國聯邦政府的行政機關組成，而非司法機關的組成。其部門首長稱為美國司法部長。現任總檢察長為洛麗泰·林奇，由第44任美國總統巴拉克·歐巴馬提名，任命案於2015年4月23日獲得美國參議院投票通過，於27日宣誓就職。美國於1789年設立了總檢察長一職，一開始的時候這是非全日性的職務，其任務是為美國國會和總統提供法律諮詢，但隨著美國官僚機構的擴大，這個職務的工作量也不斷增大，1819年時已無法繼續充當國會和政府的法律顧問。1870年6月22日，美國國會決定建立一個司法部，此部門於1870年7月1日正式執行職務。這個部門的增設對總檢察官的任務、薪金和地位都沒有改變。在聯邦總檢察長之下，另外設置聯邦總律師（Solicitor General），其任務是在法律糾紛中在美國最高法院代表美國政府，不過在比較重要的法律案當中，仍舊由聯邦總檢察長出席審判。' },
            { imgPath: 'assets/img/interior.png', name: '內政部', description: '美國內務部（United States Department of the Interior，DOI）負責管理聯邦政府擁有的土地和保護自然資源，並負責有關印第安人、阿拉斯加原住民和夏威夷原住民領土事務，和美國島嶼地區。這與大多數國家的內政部負責警察或安全事務不同。通常美國內務部的部長都由來自美西的人士擔任。這是由於大部分的國有地在美國西部。' },
            { imgPath: 'assets/img/agriculture.png', name: '農業部', description: '美國農業部（United States Department of Agriculture，縮寫： USDA）是美國聯邦政府的一個內閣部門。前身是1862年5月15日成立的聯邦政府農業司，1889年1月15日改為農業部。1994年根據《農業部重組法》進行了重組。' },
            { imgPath: 'assets/img/commerce.png', name: '商務部', description: '美國商務部（英語：United States Department of Commerce），是美國聯邦行政部門之一，負責美國國際貿易、出口管制、貿易救濟措施等。' },
            { imgPath: 'assets/img/labor.png', name: '勞工部', description: '美國勞工部（英語：United States Department of Labor），是美國聯邦政府行政部門之一，主管全國勞工事務，成立於1913年3月4日。現任部長為2013年7月上任的托馬斯·佩雷斯。曾任部長為美籍華人趙小蘭女士。' },
            { imgPath: 'assets/img/health.png', name: '衛生及公共服務部', description: '美國衛生和公眾服務部（United States Department of Health and Human Services；HHS）是維護美國公民健康，提供公眾服務的聯邦政府行政部門。本部門於1979年10月17日由美國總統吉米·卡特簽署的教育部組織法案（PL 96-88）成立。該法案將原衛生、教育及福利部（United States Department of Health, Education, and Welfare）劃分為衛生及公共服務部和單獨的教育部。這兩個部門均於1980年5月4日開始運作。本部門由衛生和公眾服務部長領導。' },
            { imgPath: 'assets/img/housing.png', name: '住房及城市發展部', description: '住房及城市發展部（英語：Department of Housing and Urban Development，HUD；另譯為住宅暨都市發展部），是美國內閣部門之一，成立於1965年9月9日。' },
            { imgPath: 'assets/img/trsnsportation.png', name: '運輸部', description: '美國運輸部（DoT, United States Department of Transportation），是美國聯邦政府的交通部門，1966年10月15日美國國會通過設立運輸部法案，1967年4月1日正式辦公。負責管理航空、鐵路、聯邦公路、海事、公共運輸等方面。' },
            { imgPath: 'assets/img/energy.png', name: '能源部', description: '美國能源部（United States Department of Energy）主要負責美國聯邦政府能源政策制定，能源行業管理，能源相關技術研發、武器研製等。' },
            { imgPath: 'assets/img/education.png', name: '教育部', description: '美國教育部（United States Department of Education，縮寫：ED）為美國內閣層級的聯邦政府部門，由《教育部門組織條例》(Department of Education Organization Act， Public Law 96-88)成立，由吉米·卡特總統於1979年10月17日簽署生效，並於次年5月4日開始運行。《教育部門組織條例》將原先的「美國衛生、教育及福利部」重組為「美國教育部」以及「美國衛生及公共服務部」，教育部由美國教育部長管理。教育部是目前最小的內閣層級聯邦部門，只有約5000名雇員。教育部正式的英文縮寫是ED，而不是DOE（美國能源部英文縮寫）。不同於其他國家的教育部，美國教育部不干涉課程標準的設置（現今的「有教無類法案」，或稱「不讓任何孩子落後法案」，是個例外），地方及州政府掌管教育權並決定大部分課程。教育部主要的職權在於編列聯邦補助方案，以及執行聯邦關於民權及隱私的教育法案。' },
            { imgPath: 'assets/img/veterans.png', name: '退伍軍人事務部', description: '美國退伍軍人事務部 （United States Department of Veterans Affairs，VA），成立於1989年，是為美國退伍軍人及家屬提供服務的內閣部門。美國退伍軍人事務部具體為服務對象提供傷殘賠償金，養老金，教育，住房貸款，人壽保險，職業康復，遺屬福利，醫療福利和安葬等權益及服務。退伍軍人事務部的前身為1930年成立的退伍軍人管理局。現任部長為羅伯特·麥克唐納。2009年總預算約為876億美元，共僱傭了大約34.5萬人。2012年，預算為1320億美元[1]，2014年為1527億美元。' },
            { imgPath: 'assets/img/homeland.png', name: '國土安全部', description: '美國國土安全部（英語：United States Department of Homeland Security, DHS），是美國聯邦政府於2003年1月24日成立的聯邦行政部門，是目前美國最年輕的聯邦行政部門。國土安全部負責美國境內的邊境管制、情報統籌、緊急應變以及防止恐怖活動[1]。另外負責保護美國總統等重要政要的特勤局，亦屬於該部。' }
        ];

        return cabinetTree;
    }

    // 立法節點
    private getCongressTree(): TreeNode[] {

        var congressTree: TreeNode[] = [
            { imgPath: 'assets/img/representatives.png', name: '眾議院', description: '美利堅合眾國眾議院（英語：United States House of Representatives）為美國國會兩院之一，另一院為參議院。美國各州在眾議院中擁有的席位比例以人口為基準，但至少會有一名議員。院內議員總數經法律明定為435名。眾議員任期兩年，無連任限制。眾議院議長由眾議員選舉產生，傳統上為多數黨之領導人。然而多數黨領袖另由該多數黨於院內之第二重要議員擔任。據美國總統繼位條例，眾議院議長繼任總統之順序僅次於兼任參議院議長的副總統，為政壇上第三重要的領袖人物。兩院制國會的起源是因為建國者希望擁有一個貼近且跟隨民意公論的「人民議院」，並受代表各州政府、不太受大眾情緒干擾的參議院制衡。憲法規定法案須經兩院批准方能通過。眾議院一般被認為較參議院更具黨派色彩。憲法制定者中有很多人企圖讓參議院（1914年前是由州議會選舉）成為眾議院（公民直選）的制衡機構。於是「建議與同意」權（如批准條約的權力）授權僅由參議院單獨行使。眾議院也有其獨有的權力：倡議歲入法案之權、彈劾政府官員、以及在選舉人團僵持不下時選舉總統。然而，所有這些權力都可由參議院制衡（counter-check）。參議院一般較眾議院及眾議員更具威望。參議員任期較長、人數較少、且（多數情況下）較眾議員代表更多的選民。眾議院會議廳位於首都華盛頓特區的國會山莊南翼。參議院在同一建築物的北翼開會。' },
            { imgPath: 'assets/img/senate.png', name: '參議院', description: '美利堅合眾國參議院（英語：United States Senate）是美國的立法機構──美國國會的兩院之一，另一院為眾議院。參議院的組成和權力建基於美國憲法第一條第三款[2]。美國每一州於聯邦參議院中均有兩位議員作為代表，與各州人口無關，所以全院員額為100名議員。參議員任期六年，相互交錯，每隔兩年改選約三分之一的席位。美國副總統任參議院議長，但無參議員資格；且除非是為了在表決平手時打破僵局，不得投票。參議院公認較眾議院更為審慎；參議員名額較少而任期較長，容許學院派看法與黨派之見，較眾議院更易置外於公共輿論。參議院擁有若干表列於憲法而未授予眾議院的權力，其中最重要的是，美國憲法明列總統在批准條約或任命重要人事時，須「採酌參議院之建議並得其認可」。兩院制的國會是於制憲會議中所訂立的康乃迪克協議所得的結果。依該協議，各州在眾議院中的代表權以人口為基礎，但在參議院中具均等代表權。憲法規定法律之制定須經兩院通過。參議院單獨擁有的權力較眾議院單獨擁有的權力更為重要。其結果使得參議院（上議院）所負的責任較眾議院（下議院）更廣泛。' }
        ];

        return congressTree;
    }

    // 司法節點
    private getCourtTree(): TreeNode[] {

        var courtTree: TreeNode[] = [
            { imgPath: 'assets/img/court.png', name: '最高法院', description: '美國最高法院（英語：Supreme Court of the United States），一般是指美國聯邦最高法院，是美國最高級別的聯邦法院。實際上，美國各個州還有地方的最高法院，它們屬於美國地方法院，與美國聯邦最高法院不相隸屬。各州最高法院的組成方法和司法領域，也不盡相同。美國聯邦最高法院由9個大法官組成，每個大法官都是由美國總統提名、經過參議院聽證後表決批准委任。9位美國聯邦最高法院的大法官中，有1個是美國首席大法官，其產生過程和另外8個大法官一樣。美國聯邦最高法院大法官像所有美國聯邦法官一樣任期是無限的，除了去世、辭職或者自己要求退休外，只能透過美國國會罷免他們。聯邦最高法院大法官的薪金不能被裁減。聯邦最高法院是唯一由美國憲法規定的聯邦法院，主要職責是為憲法作出最終的解釋，但是憲法沒有直接提到聯邦最高法院是否有司法審查權。聯邦最高法院曾經通過馬伯里訴麥迪遜案的判決指出，聯邦最高法院有權宣布某項法律違憲而不採用。聯邦最高法院對各種提交的案件，一般由9位大法官以簡單多數的表決方法來決定。' }
        ];

        return courtTree;
    }
}