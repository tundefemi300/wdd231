
const container=document.getElementById('products');
const response=await fetch('data/products.json');
const products=await response.json();
products.forEach(p=>{
 const div=document.createElement('div');
 div.className='card';
 div.innerHTML=`<h3>${p.name}</h3><p>$${p.price}</p>`;
 container.appendChild(div);
});
