window.addEventListener("load", function () {
  const _timer = document.getElementById("timer");
  const _score = document.getElementById("score");
  const _keyUp = document.getElementById("key-1");
  const _keyRight = document.getElementById("key-2");
  const _keyDown = document.getElementById("key-3");
  const _keyLeft = document.getElementById("key-4");
  
  var id, interval,score = 0,timer=0
  interval = setInterval(start, 1000);
  
  renderScore()
  renderTimer()
  

  document.addEventListener('keydown',function(e){
    const key = e.keyCode;
    switch(key){
        case 37:left()
        break;
        case 38: up()
        break;
        case 39: right()
        break;
        case 40: down()
        break
    }
    renderScore()
    renderTimer()
   
  })
  
  function random() {
    return Math.floor(1 + Math.random() * 3);
  }

  function Select(id) {
    const dom = document.getElementById(id);
    dom.classList.add("select");
  }

  function unselect(id) {
    const dom = document.getElementById(id);
    dom.classList.remove("select");
    // console.log(dom);
  }
 
  function start() {
    if(id) unselect(id);
    id = `key-${random()}`;

    Select(id);
  }

  function renderScore(){
    _score.innerText = score
  }

  function   renderTimer(){
  
    _timer.innerText = timer
     timer++
  }
  function up(){
    if(id === 'key-1') score++
   
  }

  function down(){
    if(id === 'key-3') score ++
  }

  function right(){
    if(id === 'key-2') score++
  }

  function left(){
    if(id === 'key-4') score++
    console.log('slam. basildim')
  }
});
