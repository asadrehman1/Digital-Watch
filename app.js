const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const second = document.getElementById("second");
const milliSecond = document.getElementById("millisecond");
const minute = document.getElementById("minute");
const hour = document.getElementById("hour");

let mCount = 0;
let sCount = 0;
let mnCount = 0;
let hCount = 0;

start.addEventListener("click", function () {
    myInterval = setInterval(() => {
        mCount++;
        if (mCount < 99) {
            if (mCount < 10) {
                milliSecond.innerText = `0${mCount}`;
            }
            else {
                milliSecond.innerText = mCount;
            }
        }
        else {
            mCount = 0;
            milliSecond.innerText = `0${mCount}`;
            sCount++;
            if (sCount <=59) {
                if (sCount < 10) {
                    second.innerText = `0${sCount}`;
                }
                else {
                    second.innerText = sCount;
                }
            }
            else {
                sCount = 0;
                second.innerText =`0${sCount}`;
                mnCount++;
                if (mnCount <= 59) {
                    if (mnCount < 10) {
                        minute.innerText = `0${mnCount}`;
                    }
                    else {
                        minute.innerText = mnCount;
                    }
                }
                else {
                    mnCount = 0;
                    minute.innerText = `0${mnCount}`;
                    hCount++;
                    if (hCount < 10) {
                        hour.innerText = `0${hCount}`
                    }
                    else {
                        hour.innerText = hCount;
                    }

                }
            }
        }
    }, 10);
})

stop.addEventListener("click", function () {
    clearInterval(myInterval);
})

reset.addEventListener("click", function () {
    clearInterval(myInterval);
    sCount = 0;
    mCount = 0;
    mnCount = 0;
    hCount = 0;
    milliSecond.innerText = `0${0}`;
    second.innerText = `0${0}`;
    minute.innerText = `0${0}`;
    hour.innerText = `0${0}`;
})
