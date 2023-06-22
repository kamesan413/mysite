"use strict";
class Tetris {
  constructor(canvas,range) {
    this.range=range;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.blocksize = 30;
    this.firstbasepointx = 5;
    this.firstbasepointy = 3;
    this.basepointx = this.firstbasepointx;
    this.basepointy = this.firstbasepointy;
    this.spinnumber = 0;
    this.randomNumber = Math.floor(Math.random() * 7);
    this.fallblock = 2;
    this.rightblock = 4;
    this.leftblock = 3;
    this.isaligned = true;
    this.isaligned2 = false;
    this.isgameover = false;
    this.fallspeed=1100-this.range.value;

    this.board = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];
    this.drawboard = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]
    this.shape = [[
      [[0, 0], [0, 1], [1, 1], [-1, 1]],
      [[0, 0], [-1, -1], [-1, 0], [-1, 1]],
      [[0, 0], [-1, -1], [0, -1], [1, -1]],
      [[0, 0], [1, -1], [1, 0], [1, 1]]
    ],
    [
      [[0, 0], [0, 1], [1, 0], [1, 1]],
      [[0, 0], [-1, 0], [0, 1], [-1, 1]],
      [[0, 0], [-1, 0], [-1, -1], [0, -1]],
      [[0, 0], [1, 0], [0, -1], [1, -1]]
    ],
    [
      [[0, 0], [-1, 0], [0, -1], [1, -1]],
      [[0, 0], [0, -1], [1, 0], [1, 1]],
      [[0, 0], [1, 0], [0, 1], [-1, 1]],
      [[0, 0], [0, 1], [-1, 0], [-1, -1]]
    ],
    [
      [[0, 0], [1, 0], [0, -1], [-1, -1]],
      [[0, 0], [0, 1], [1, 0], [1, -1]],
      [[0, 0], [-1, 0], [0, 1], [1, 1]],
      [[0, 0], [0, -1], [-1, 0], [-1, 1]]
    ],
    [
      [[0, 0], [1, 0], [-1, 0], [-1, -1]],
      [[0, 0], [0, 1], [0, -1], [1, -1]],
      [[0, 0], [-1, 0], [1, 0], [1, 1]],
      [[0, 0], [0, -1], [0, 1], [-1, 1]]
    ],
    [
      [[0, 0], [-1, 0], [1, 0], [1, -1]],
      [[0, 0], [0, -1], [0, 1], [1, 1]],
      [[0, 0], [1, 0], [-1, 0], [-1, 1]],
      [[0, 0], [0, 1], [0, -1], [-1, -1]]
    ],
    [
      [[0, 0], [-1, 0], [1, 0], [2, 0]],
      [[0, 0], [0, -1], [0, 1], [0, 2]],
      [[0, 0], [-2, 0], [-1, 0], [1, 0]],
      [[0, 0], [0, 1], [0, -1], [0, -2]]
    ],
    ]
    this.generateblock(this.spinnumber, 1, this.randomNumber);
    this.draw();
    this.clear=setInterval(()=>{
      this.fall();
    },this.fallspeed);
    document.addEventListener("keydown", (e) => {
      this.isaligned2 = false;
      if (e.key == this.fallblock) {
        this.fall();
      }
      if (e.key == this.rightblock) {
        this.generateblock(this.spinnumber, 0, this.randomNumber);
        for (let i = 0; i < 4; i++) {
          if (this.board[this.basepointy + this.shape[this.randomNumber][this.spinnumber][i][1]][this.basepointx + 1 + this.shape[this.randomNumber][this.spinnumber][i][0]] === 1) {
            this.generateblock(this.spinnumber, 1, this.randomNumber);
            return;
          }
        }
        this.generateblock(this.spinnumber, 0, this.randomNumber);
        this.basepointx += 1;
        this.generateblock(this.spinnumber, 1, this.randomNumber);
        this.draw();
      }

      if (e.key == this.leftblock) {
        this.generateblock(this.spinnumber, 0, this.randomNumber);
        for (let i = 0; i < 4; i++) {
          if (this.board[this.basepointy + this.shape[this.randomNumber][this.spinnumber][i][1]][this.basepointx - 1 + this.shape[this.randomNumber][this.spinnumber][i][0]] === 1) {
            this.generateblock(this.spinnumber, 1, this.randomNumber);
            return;
          }
        }
        this.generateblock(this.spinnumber, 0, this.randomNumber);
        this.basepointx -= 1;
        this.generateblock(this.spinnumber, 1, this.randomNumber);
        this.draw()
      }


    });

    this.canvas.addEventListener("click", () => {
      if (this.isgameover === true) {
        return;
      }
      this.generateblock(this.spinnumber, 0, this.randomNumber);
      this.spinnumber++;
      if (this.spinnumber > 3) {
        this.spinnumber = 0;
      }
      for (let i = 0; i < 4; i++) {
        if (this.board[this.basepointy + this.shape[this.randomNumber][this.spinnumber][i][1]][this.basepointx + this.shape[this.randomNumber][this.spinnumber][i][0]] === 1) {
          this.spinnumber--;
          if (this.spinnumber < 0) {
            this.spinnumber = 3;
          }
          this.generateblock(this.spinnumber, 1, this.randomNumber);
          return;
        }
      }


      this.generateblock(this.spinnumber, 1, this.randomNumber);
      this.draw();
    })


  }


  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    for (let i = 0; i < this.board.length; i++) {
      for (let u = 0; u < this.board[1].length; u++) {
        if (this.board[i][u] === 1) {
          this.ctx.fillStyle = "gray";
          this.ctx.fillRect(u * this.blocksize, i * this.blocksize, this.blocksize, this.blocksize);
          this.ctx.strokeStyle = "white";
          this.ctx.strokeRect(u * this.blocksize, i * this.blocksize, this.blocksize, this.blocksize)
        }
      }

    }
    for (let i = 0; i < this.drawboard.length; i++) {
      for (let u = 0; u < this.drawboard[1].length; u++) {
        if (this.drawboard[i][u] === 1) {
          this.ctx.fillStyle = "blue";
          this.ctx.fillRect(u * this.blocksize, i * this.blocksize, this.blocksize, this.blocksize);
          this.ctx.strokeStyle = "white"
          this.ctx.strokeRect(u * this.blocksize, i * this.blocksize, this.blocksize, this.blocksize);
        }

      }
    }
  }

  generateblock(a, b, c) {
    for (let i = 0; i < 4; i++) {
      this.board[this.basepointy + this.shape[c][a][i][1]][this.basepointx + this.shape[c][a][i][0]] = b;
    }
  }
  breakblock() {
    let breakblockgroup = [];
    for (let i = 1; i < this.board.length - 1; i++) {
      this.isaligned = true;
      for (let u = 0; u < this.board[1].length; u++) {
        if (this.board[i][u] === 0) {
          this.isaligned = false;
        }
      }
      if (this.isaligned === true) {
        console.log("test");
        for (let z = 1; z < this.board[1].length - 1; z++) {
          this.board[i][z] = 0;
        }
        this.draw();
        breakblockgroup.push(i);
        this.isaligned2 = this.isaligned;

      }
    }
    if (this.isaligned2 === true) {
      clearInterval(this.clear);
      setTimeout(() => {
        for (let a = 0; a < breakblockgroup.length; a++) {
          console.log("kamisama");
          this.board.splice(breakblockgroup[a], 1)
          this.board.splice(1, 0, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
        }
        this.gameover();
        if (this.isgameover === false) {
          this.generateblock(this.spinnumber, 1, this.randomNumber);
          this.draw();
          this.fallblock = 2;
          this.clear=setInterval(()=>{
            this.fall();
          },this.fallspeed);
        }


      }, 500)
    }

  }
  gameover() {
    this.isgameover = false;
    for (let i = 0; i < 4; i++) {
      if (this.board[this.basepointy + this.shape[this.randomNumber][1][i][1]][this.basepointx + this.shape[this.randomNumber][1][i][1]] === 1) {
        this.isgameover = true;
      }

    }
    if (this.isgameover === true) {
      clearInterval(this.clear);
      this.ctx.fillStyle = "rgba(0,0,0,0.6)";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle="tomato";
      this.ctx.font="55px 'Ariel black'";
      this.ctx.fillText("GAME OVER",20,300)
      this.ctx.font="20px 'Ariel black'";
      this.ctx.fillText("please click startbutton to restart",20,360);
      this.rightblock *= 100;
      this.leftblock *= 100;
      btn.classList.remove("move");
      btn.disabled=false;
    }
  }
  fall(){
    this.isaligned = false;
    this.fallblock *= 100;
    this.generateblock(this.spinnumber, 0, this.randomNumber);
    let isdoubleblock = false;
    for (let i = 0; i < 4; i++) {
      if (this.board[this.basepointy + 1 + this.shape[this.randomNumber][this.spinnumber][i][1]][this.basepointx + this.shape[this.randomNumber][this.spinnumber][i][0]] === 1) {
        isdoubleblock = true;
      };
    }
    if (isdoubleblock === true) {
      this.generateblock(this.spinnumber, 1, this.randomNumber);
      this.basepointy = this.firstbasepointy;
      this.basepointx = this.firstbasepointx;
      this.spinnumber = 0;
      this.randomNumber = Math.floor(Math.random() * 7);
      this.breakblock();
      if (this.isaligned2 === false) {
        this.gameover();
        if (this.isgameover === false) {
          this.generateblock(this.spinnumber, 1, this.randomNumber);
          this.draw();
          this.fallblock = 2;
        }


      }

    }
    if (isdoubleblock === false) {
      this.fallblock = 2;
      this.basepointy++;
      this.generateblock(this.spinnumber, 1, this.randomNumber);
      this.draw();
    }



  }
}
const canvas = document.querySelector("canvas");
const ctx=canvas.getContext("2d");
const btn=document.getElementById("btn");
const span=document.querySelector("span");
ctx.fillStyle="skyblue";
ctx.font="55px 'Ariel black'";
ctx.fillText("GAME START",5,300);
ctx.font="20px 'Ariel black'";
ctx.fillText("please click start button",20,360);
const range=document.querySelector("input");
range.addEventListener("input",()=>{
  span.textContent=range.value;
})
btn.addEventListener("click",()=>{
  btn.classList.add("move");
  btn.disabled=true;
  new Tetris(canvas,range);
});
