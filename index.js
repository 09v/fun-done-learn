function FDL_Main() {


    const draggable = window['vuedraggable'];
    const issueView = {
        props: ['data'],
        template: `
<div class="fdl_issue">
  <div class="fdl_issue_key">
    <a :href="data.url">{{data.key}}</a>
  </div>
  <div class="fdl_issue_summary">{{data.summary}}</div>
  <div class="fdl_issue_user">
    <div class="fdl_issue_user_icon"><img :src="data.user.iconUrl"></div>
    <div class="fdl_issue_user_displayName">{{data.user.displayName}}</div>
  </div>
</div>`,
    }

    new Vue({
        el: '#fdl_main',
        components: {
            'draggable': draggable,
            'issue': issueView,
        },
        data: {
            issue: {
                key: 'MSK-1234',
                url: 'https://www.nnn.ed.nico/courses/497/chapters/6890',
                summary: '20.フォームによる投稿機能の実装',
                user: {
                    displayName: "Happy Turn",
                    iconUrl: "https://camo.githubusercontent.com/8be324b57e760efeaf4b9be975e7f5a55689311c/68747470733a2f2f63646e2e7338612e6a702f5a7257534e466762716452345937663267764e5256595a4d38316e6473335655365570664b5234612e706e67",
                }
            },
        },
    });


    // ------------------------------
    new Vue({
        el: "#app2",
        components: {
            'draggable': draggable,
        },
        data: {
            items: [
                { no: 1, name: 'キャベツ', categoryNo: '1' },
                { no: 2, name: 'ステーキ', categoryNo: '2' }
            ],
            items2: [
                { no: 5, name: 'きゅうり', categoryNo: '1' },
                { no: 6, name: 'ハンバーグ', categoryNo: '2' }
            ]
        }
    });
}

FDL_Main();