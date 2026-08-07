
document.getElementById('currentyear')?.append(new Date().getFullYear());
const lm=document.getElementById('lastModified');
if(lm) lm.textContent=document.lastModified;
