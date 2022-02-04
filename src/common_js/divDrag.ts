function divDrag() {

    //要素の取得
    var elements = document.getElementsByClassName("drag-and-drop");

    //要素内のクリックされた位置を取得するグローバル（のような）変数
    var x;
    var y;

    //マウスが要素内で押されたとき、又はタッチされたとき発火
    for (var i = 0; i < elements.length; i++) {

        elements[i].addEventListener("mousedown", mdown, false);
        elements[i].addEventListener("touchstart", mdown, false);
    }

    //マウスが押された際の関数
    function mdown(e) {

        //クラス名に .drag を追加
        this.classList.add("drag");

        //タッチデイベントとマウスのイベントの差異を吸収
        if (e.type === "mousedown") {
            var event = e;
            //var elm = event.currentTarget;
        } else {
            var event = e.changedTouches[0];
            //var elm = event.target;
        }

        //let elm = event.currentTarget as HTMLElement;
        // (2) 移動のための準備: absolute にし、z-index でトップにする
        this.style.position = 'absolute';
        this.style.zIndex = '1000';
        // 現在の親から body へ直接移動させ、body に対して相対配置をする
        document.body.append(this);
        // ...そしてその絶対配置されたボールをカーソルの下に置く

        moveAt(event.pageX, event.pageY, this);

        // ボールを（pageX、pageY）座標の中心に置く
        function moveAt(pageX, pageY, elm) {
            elm.style.left = pageX - elm.offsetWidth / 2 + 'px';
            elm.style.top = pageY - elm.offsetHeight / 2 + 'px';
        }

        // (3) mousemove でボールを移動する
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener("touchmove", onMouseMove);

        function onMouseMove(ev) {
            //ドラッグしている要素を取得
            var drag = document.getElementsByClassName("drag")[0];
            //タッチデイベントとマウスのイベントの差異を吸収
            if (ev.type === "mousemove") {
                var event = ev;
            } else {
                var event = ev.changedTouches[0];
            }
            ev?.preventDefault();
            moveAt(event.pageX, event.pageY, drag);
        }



        // (4) ボールをドロップする。不要なハンドラを削除する
        this.onmouseup = mup;
        this.ontouchend = mup;
        ////////無理矢理カーソルが外された場合
        document.addEventListener("mouseleave", mup, false);
        document.addEventListener("touchleave", mup, false);

        function mup() {
            var drag = document.getElementsByClassName("drag")[0] as HTMLElement;

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('touchmove', onMouseMove);
            document.removeEventListener('mouseleave', mup);
            document.removeEventListener('touchleave', mup);
            drag.onmouseup = null;
            drag.ontouchend = null;

            //クラス名 .drag も消す
            drag.classList.remove("drag");
        };
        this.ondragstart = function () {
            return false;
        };
    }





}

export { divDrag };