(function () {
    var block, blocker, lastScrollTop, pList, scrollFunction, scrollTimer;
    blocker = document.querySelector('#blocker');
    block = false;
    lastScrollTop = 0;
    blocker.addEventListener('click', function () {
        this.classList.toggle('blocked');
        return block = this.classList.contains('blocked');
    }, true);
    pList = document.querySelectorAll('.idmaps');
    scrollFunction = function () {
        var i, last, len, p;
        last = null;
        for (i = 0, len = pList.length; i < len; i++) {
            if (window.CP.shouldStopExecution(1)) {
                break;
            }
            p = pList[i];
            if (window.innerHeight + window.scrollY - p.offsetTop - (window.innerHeight - p.offsetHeight) / 2 > 0) {
                last = p;
            }
            p.classList.remove('view');
        }
        window.CP.exitedLoop(1);
        return last.classList.add('view');
    };
    scrollTimer = null;
    window.addEventListener('scroll', function () {
        if (block === false) {
            clearTimeout(scrollTimer);
            lastScrollTop = window.scrollY;
            return scrollTimer = setTimeout(scrollFunction, 50);
        } else {
            return window.scrollTo(0, lastScrollTop);
        }
    }, true);
}.call(this));