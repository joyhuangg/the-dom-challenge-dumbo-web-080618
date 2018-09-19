let counter = document.getElementById('counter');
let plus = document.getElementById('+')
let minus = document.getElementById('-')
let heart = document.getElementById('<3')
let pause = document.getElementById('pause')
let likes = document.querySelector('ul.likes');
let commentList = document.querySelector('div#list')
let submit = document.querySelector('button#submit')
let usersComment = document.querySelector('form#comment-form input')
let count = 0;
let isPaused = false;

function timing(){
  if(!isPaused){
    count++;
    counter.innerText = count + "";
  }
}

let timer = setInterval(timing,1000);


const main = document.getElementById('main')

plus.addEventListener('click', (e) => {
  if(!isPaused){
    count++;
    counter.innerText = count + "";
  }
})

minus.addEventListener('click', (e) =>{
  if(!isPaused){
    count--;
    counter.innerText = count + "";
  }
})

let likeCount;
let current;
heart.addEventListener('click', (e) => {
  if (!isPaused){
    // increment likeCount, same second
    if (current === count){
      likeCount++;
      let element = likes.children[likes.children.length-1];
      result = `${count} has been liked ${likeCount} `
      let time = likeCount > 1? "times":"time"
      result += time;
      element.innerHTML = result;
    }
    // create a new one, different second
    else {
      current = count;
      likeCount = 1;
      let element = document.createElement('li');
      result = `${count} has been liked ${likeCount} `
      let time = likeCount > 1? "times":"time"
      result += time;
      element.innerHTML = result;
      // element.dataset.num = count;
      likes.appendChild(element)
    }
  }
})

pause.addEventListener('click', (e) => {
  isPaused = !isPaused
  pause.innerText = isPaused? "resume":"pause"

})


submit.addEventListener('click', (e) => {
  if (!isPaused){
    e.preventDefault()
    usersComment = document.querySelector('form#comment-form input').value
    document.body.querySelect('form#comment-form input').value = ""
    let element = document.createElement('p');
    element.innerHTML = usersComment;
    commentList.appendChild(element)
  }
})
