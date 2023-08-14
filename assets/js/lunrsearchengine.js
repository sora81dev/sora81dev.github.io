
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "/about",
    "title": "Memoirs, a free minimalist Jekyll blogging theme with modern design",
    "body": "This website is a demonstration to see Memoirs Jekyll theme in action. The theme is compatible with Github pages, in fact even this demo itself is created with Github Pages and hosted with Github.  Get Memoirs for Jekyll → "
    }, {
    "id": 2,
    "url": "/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "/contact",
    "title": "Contact",
    "body": "  Please send your message to そらのサイト. We will reply as soon as possible!   "
    }, {
    "id": 4,
    "url": "/",
    "title": "Home",
    "body": "                                                                                               ボールセンサー基盤              :       今日はロボカップのボールセンサー基板を作成したので、紹介したいと思います。:                                                                               そら                 13 Aug 2023                                                                                                                           JLCPCBとの契約              :       こんにちは。ブログも久しぶりですね。:                                                                               そら                 09 Aug 2023                                                                                                                           にゃんにゃんにゃんの日              :       まずはどうぞ  Your browser does not support the video tag. :                                                                               そら                 22 Feb 2023                                                                                                                           サイトをJekyllに移動しました。              :       新しいサイトに移動しました！:                                                                               そら                 29 Jan 2023                                "
    }, {
    "id": 5,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "/%E3%83%9C%E3%83%BC%E3%83%AB%E3%82%BB%E3%83%B3%E3%82%B5%E3%83%BC%E5%9F%BA%E7%9B%A4/",
    "title": "ボールセンサー基盤",
    "body": "2023/08/13 - 今日はロボカップのボールセンサー基板を作成したので、紹介したいと思います。 今回のレポジトリ注意　BSBとBSB-2がありますが、両方がないと使えません。 #今日の進捗まさかのいっぱつ！あとは値かくにんのみ！ pic. twitter. com/66d24wVQ0i &mdash; そら@RCJJ (@sora81dev) July 15, 2023↑これですね 基盤の構成レポジトリの説明についての時に乗せたように、2つに基盤が分かれています。それぞれ目的は違います。そして、今回は1ケーブルで接続できるようにしています。 1つ目はボールセンサー(TSSP58038)のみを乗せています。2つ目はそのボールセンサーの制御基板になっています。とかいっても、RP2040とかは載っていませんが。 なぜ分けたかというと、どちらかが壊れた際に簡単に交換することができるようにするためです。ロボカップで壊れることはしょっちゅうあることです。  私も一週間前にTJ3Bを壊したことがあります。 そして、簡単に交換するために、1つ目と2つ目は1本で2つ目とメインは2本+電源1本のみでつなげれるようにしました。 なんで TSSP58038にしたのかここまで読んできてきっと疑問に思っていると思います そう。「TSSP5038って生産終了してるよね？なんでTSSP4038にしないの？」って。 正直、理由は一つです。買ったサイトでは、TSSP58038のほうが安いからです。これにつきます。 そしてこれも交換式にした理由で、TSSP58038からTSSP4038に移行する際、基盤をすべて交換する必要があります。そして費用も掛かります。そのために私は1つ目のやつさえ変えれば直せます。  プログラムの修正が必要なのは承知の上です。 基盤作成したところ前回記事にはJLCPCBについて詳しく伝えるといいましたが、それは次回に回します。 ほんで、作成したところは、いつもおなじみのJLCPCBさんです。 ↓ JLCPCBさんのサイトはこちらからJLCPCB公式サイト(日本語) ちなみにこの基板 + USB-Cでプログラム書き込めるやつ　の二つを発注しましたが、最速便でまさかの3日で届きました。嘘じゃないですよ。ほんとです。正直めちゃくちゃ驚きました。  追記：そういえば、最速便はバカ高いのでご注意を。 最後にまたまた短かったですが、いかがでしたでしょうか。技術紹介的なものはありませんが、Blendのいぬわしくんを実際に高専Open Canvasのときに見てきました。そのときに思ったんです。簡単に分離できるのはすごくいいことと。上下分離が1本というのにすごく惹かれまして。今回のボールセンサーに実現したわけです。(一つにまとめれば簡単とは言ってはいけませんよ。) 画像集作った上での画像です。(一部はTwitterに載っています) 次回次回こそJLCPCBさんについて詳しくお伝えします。 また次の時まで。じゃあね👋 "
    }, {
    "id": 7,
    "url": "/JLCPCB/",
    "title": "JLCPCBとの契約",
    "body": "2023/08/09 - こんにちは。ブログも久しぶりですね。 バグがありまして… URLも使えなくなっていた状況でした。何が起こっているかというのは別の記事で紹介するとして、今回は私の所属しているSTとJLCPCBさんについて話していきたいと思います。 JLCPCB (公式) ホームページ ↑$54クーポンが無料でもらえますので是非 どうやってそもそも契約したのか: 極稀にDMでどうやってスポンサー契約したの？とか聞かれたりもします  本当にごくまれにです。いままでで3回ぐらいです 簡単に言うと、TwitterのDMでJLCPCB公式さんに送りました。 JLCPCB (公式) Twitter どんな内容を送ったのかは教えてはいけない気がするので教えませんが、どんな構成だったのかはお伝えしておきます。  正直言って参考になりません。ご自身で考えて記入することをお勧めいたします。 前半は、どのようなことをしているのか。それにおいて、どのような立場なのかを書きました。そして後半は、なぜ契約しようと思ったのかを書きます。正直ここが一番大切だと思ってます。 以上になります。 もう一度言いますが、ご自身で書くことをお勧めします。（じゃあなんでこれ書いたんだよ） 最後に: ほんとに申し訳ございませんでした。正直放置してました。ごめんなさい。ネームサーバー代が…ということで、Netlifyで作り直しましたのでよろしくお願いします！ 次の記事: つぎはJLCPCBとはどんな企業なのか。を詳しくお伝えしたいと思います。 "
    }, {
    "id": 8,
    "url": "/%E3%81%AB%E3%82%83%E3%82%93%E3%81%AB%E3%82%83%E3%82%93%E3%81%AB%E3%82%83%E3%82%93%E3%81%AE%E6%97%A5/",
    "title": "にゃんにゃんにゃんの日",
    "body": "2023/02/22 - まずはどうぞ  Your browser does not support the video tag. #　奇跡的に取れました。ちょうどパソコン開いたら22:21ふんで、いそいで収録して編集しました。ちなみに編集ソフトはClipchampです。使用した時計 まとめまたらいねんもとりたいな。 "
    }, {
    "id": 9,
    "url": "/%E3%83%96%E3%83%AD%E3%82%B0%E7%A7%BB%E8%A1%8C%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F/",
    "title": "サイトをJekyllに移動しました。",
    "body": "2023/01/29 - 新しいサイトに移動しました！ "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});