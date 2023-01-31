document.addEventListener("click", event => {
    bursty(event.pageX, event.pageY);
});

setInterval(() => randomizedConfetti(), 500);

function bursty(x, y) {
    const burst = new mojs.Burst({
        left: 0,
        top: 0,
        radius: { 0: 200 },
        count: 20,
        degree: 360,
        children: {
            fill: { '#ff87ab': '#ffcad4' },
            duration: 2000
        }
    }).

        tune({
            x: x,
            y: y
        });


    burst.replay();
}

function randomizedConfetti() {
    let randomX = Math.floor(Math.random() * (document.body.clientWidth - 100) + 0);
    let randomY = Math.floor(Math.random() * (window.innerHeight - 200) + 0);
    const burst = new mojs.Burst({
        left: 0,
        top: 0,
        radius: { 0: 200 },
        count: 20,
        degree: 360,
        children: {
            fill: { '#f20089': "#00b4d8" },
            duration: 2000
        }
    }).

        tune({
            x: randomX,
            y: randomY
        });


    burst.replay();
}

// Splitting();