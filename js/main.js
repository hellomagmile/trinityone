const talent=document.querySelector('#talent');
if(talent){
  talent.addEventListener('mouseenter',()=>{
    talent.innerHTML='COMING&nbsp;SOON<br>即将上线';
    talent.style.pointerEvents='none';
  });
}
