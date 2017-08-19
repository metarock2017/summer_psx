//生成一个区间内的随机整数
function getRandom(n, m) {
    var c = m - n + 1;
    return Math.floor(Math.random() * c + n);
}

//随机颜色
function getColor() {
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    var len = arr.length;
    var color = '#';
    for (var i = 0; i < 6; i++) {
        var random = getRandom(0, len - 1);
        // console.log(random);
        color += arr[random];
    }
    console.log(color);
    return color;
}

//生成小球
function getBall(i) {
    var container = document.querySelector('.container');
    var newball = document.createElement("div");
    newball.className = 'ball';
    document.querySelector('.container').appendChild(newball);
    var ball = document.querySelectorAll('.ball')[i];
    console.log(ball.clienWidth);
    var tempX = getRandom(0, innerWidth - ball.offsetWidth);
    var tempY = getRandom(0, innerHeight - ball.offsetHeight);
    var width = getRandom(20,80);
    var height = width;
    var radius = width/2;
    ball.style.left = tempX + 'px';
    ball.style.top = tempY + 'px';
    ball.style.width = width + 'px';
    ball.style.height = height + 'px';
    ball.style.borderRadius = radius;
    ball.style.backgroundColor = getColor();
}


//小球移动
function move(i) {
    var speedX = getRandom(5, 10) - 7.5;
    var speedY = getRandom(5, 10) - 7.5;
    var ball = document.querySelectorAll('.ball')[i];
    console.log(ball);
    var left = parseInt(ball.style.left);
    console.log(left);
    var top = parseInt(ball.style.top);
    setInterval(function() {
        left += speedX;
        top += speedY;
        ball.style.left = left + 'px';
        ball.style.top = top + 'px';
        if (left < 0) {
            speedX = -speedX;
            left = 0;
            ball.style.backgroundColor = getColor();
        } else if (top < 0) {
            top = 0;
            speedY = -speedY;
            ball.style.backgroundColor = getColor();
        } else if (left > (innerWidth - ball.offsetWidth - 5)) {
            left = innerWidth - ball.offsetWidth - 5;
            speedX = -speedX;
            ball.style.backgroundColor = getColor();

        } else if (top > (innerHeight - ball.offsetHeight - 5)) {
            speedY = -speedY;
            top = innerHeight - ball.offsetHeight - 5;
            ball.style.backgroundColor = getColor();

        }
    }, 1);
    console.log(left);
}

for (var i = 0; i < 10; i++) {
    getBall(i);
    move(i);
}



// //小球
// function Ball() {
//     this.ball = document.createElement("div");
//     this.speedX = getRandom(10, 20) - 15;
//     this.speedY = getRandom(10, 20) - 15;
//     this.top = getRandom(0, window.innerHeight);
//     this.left = getRandom(0, window.innerWidth);
//     this.backgroundColor = getColor();
// }

// //生成小球
// Ball.prototype.getBall = function() {
//     this.ball.className = "ball";
//     this.ball.style.left = this.tempX + "px";
//     this.ball.style.top = this.tempY + "px";
//     this.ball.style.backgroundColor = this.backgroundColor;
//     document.querySelector('.container').appendChild(this.ball);
// }

// //小球移动
// Ball.prototype.move = function() {

// }

// var ball = new Ball();
// ball.getBall();