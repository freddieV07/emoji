let input = document.getElementById('input')
let img = document.querySelector('.img')
let image = document.querySelector('.image')
let btn = document.querySelector('button')
let feel = document.querySelector('.feel')
btn.addEventListener('click', random)
function random() {
  value =  Math.floor((Math.random() * 100)/10) *10
  input.value = value;
//   input.oninput =(()=>{
    if (value < 10) {
        
        image.style.marginLeft = "0px"
    //    setInterval(()=>{
    //        img.style.transform = "rotate(10deg)"
    //    },200)
    //    clearInterval();
    feel.innerHTML = 'Mad!!!'
    feel.style.color ='rgb(103, 4, 4)'
    }  
    else if (value < 20) {
        image.style.marginLeft = "-200px"
        feel.innerHTML = 'Angry'
        feel.style.color ='rgb(123, 6, 4)'

    }  else if (value < 30) {
        image.style.marginLeft = "-430px"
        feel.innerHTML = 'Depressed'
        feel.style.color ='rgb(162, 47, 5)'
       
    }  else if (value < 40) {
        image.style.marginLeft = "-630px"
        feel.innerHTML = 'sad'
        feel.style.color ='rgb(215, 65, 10)'
       
    }  else if (value < 50) {
        image.style.marginLeft = "-830px"
        feel.innerHTML = 'Blank'
        feel.style.color ='rgb(209, 139, 10)'
       
    }  else if (value < 60) {
        image.style.marginLeft = "-1039px"
        feel.innerHTML = 'happy'
        feel.style.color ='orange'
       
    }  else if (value < 70) {
        image.style.marginLeft = "-1257px"
        feel.innerHTML = 'excited'
        feel.style.color ='rgb(215, 215, 10)'
       
    }  else if (value < 80) {
        image.style.marginLeft = "-1468px"
        feel.innerHTML = 'goofy'
        feel.style.color ='yellow'
       
            } else if (value < 90) {
                image.style.marginLeft = "-1685px"
                feel.innerHTML = 'crazy'
                feel.style.color ='grey'
               
    }else if (value < 100) {
        image.style.marginLeft = "-1900px"
        feel.innerHTML = 'Brain dead'
        feel.style.color ='black'
       
    }

// })

  console.log(value);
}

input.oninput =(()=>{
    if (input.value < 10) {
        
        image.style.marginLeft = "0px"
    //    setInterval(()=>{
    //        img.style.transform = "rotate(10deg)"
    //    },200)
    //    clearInterval();
    feel.innerHTML = 'Mad!!!'
    feel.style.color ='rgb(103, 4, 4)'
    }  
    else if (input.value < 20) {
        image.style.marginLeft = "-200px"
        feel.innerHTML = 'Angry'
        feel.style.color ='rgb(123, 6, 4)'

    }  else if (input.value < 30) {
        image.style.marginLeft = "-430px"
        feel.innerHTML = 'Depressed'
        feel.style.color ='rgb(162, 47, 5)'
       
    }  else if (input.value < 40) {
        image.style.marginLeft = "-630px"
        feel.innerHTML = 'sad'
        feel.style.color ='rgb(215, 65, 10)'
       
    }  else if (input.value < 50) {
        image.style.marginLeft = "-830px"
        feel.innerHTML = 'Blank'
        feel.style.color ='rgb(209, 139, 10)'
       
    }  else if (input.value < 60) {
        image.style.marginLeft = "-1039px"
        feel.innerHTML = 'happy'
        feel.style.color ='orange'
       
    }  else if (input.value < 70) {
        image.style.marginLeft = "-1257px"
        feel.innerHTML = 'excited'
        feel.style.color ='rgb(215, 215, 10)'
       
    }  else if (input.value < 80) {
        image.style.marginLeft = "-1468px"
        feel.innerHTML = 'goofy'
        feel.style.color ='yellow'
       
            } else if (input.value < 90) {
                image.style.marginLeft = "-1685px"
                feel.innerHTML = 'crazy'
                feel.style.color ='grey'
               
    }else if (input.value < 100) {
        image.style.marginLeft = "-1900px"
        feel.innerHTML = 'Brain dead'
        feel.style.color ='black'
       
    }


})

random()
change();
