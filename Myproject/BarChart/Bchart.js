  let resmon = document.getElementById('resmon')
  let reswed = document.getElementById('reswed')
  let restue = document.getElementById('restue')  
  let resthu = document.getElementById('resthu')
  let resfri = document.getElementById('resfri')  
  let ressat = document.getElementById('ressat')  
  let ressun = document.getElementById('ressun')  
  
  function out1(){
    if (document.getElementById('mon').onmouseout){
      resmon.style.display ='none'
    }
  }
  function over1(){
    if(document.getElementById('mon').onmouseover){
      resmon.style.display ='block'
      resmon.innerText = `$34.91`
    }
  }
  function out4(){
    if (document.getElementById('thu').onmouseout){
      resthu.style.display ='none'
    }
  }
function over3(){
if (document.getElementById('wed').onmouseover){
  reswed.style.display ='block'
  reswed.innerText = `$52.38`
}
}
function out3(){
  if (document.getElementById('wed').onmouseout){
    reswed.style.display ='none'
  }
}
function over2(){
  if(document.getElementById('tue').onmouseover){
    restue.style.display ='block'
    restue.innerText = `$34.91`
  }
}
function out2(){
  if (document.getElementById('tue').onmouseout){
    restue.style.display ='none'
  }
}
function over4(){
  if(document.getElementById('thu').onmouseover){
    resthu.style.display ='block'
    resthu.innerText = `$34.91`
  }
}
function out4(){
  if (document.getElementById('thu').onmouseout){
    resthu.style.display ='none'
  }
}
function over5(){
  if(document.getElementById('fri').onmouseover){
    resfri.style.display ='block'
    resfri.innerText = `$34.91`
  }
}
function out5(){
  if (document.getElementById('fri').onmouseout){
    resfri.style.display ='none'
  }
}
function over6(){
  if(document.getElementById('sat').onmouseover){
    ressat.style.display ='block'
    ressat.innerText = `$34.91`
  }
}
function out6(){
  if (document.getElementById('sat').onmouseout){
    ressat.style.display ='none'
  }
}
function over7(){
  if(document.getElementById('sat').onmouseover){
    ressun.style.display ='block'
    ressun.innerText = `$34.91`
  }
}
function out7(){
  if (document.getElementById('sun').onmouseout){
    ressun.style.display ='none'
  }
}






