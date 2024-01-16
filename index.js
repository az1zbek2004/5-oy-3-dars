// let texts=document.querySelectorAll('h1.text');
// console.log(texts); 

// let button=document.querySelector('button.btn');
// const link=document.querySelector('a');

// // button.addEventListener('dblclick', function() {
// //     alert('hello');
// // })
// // button.addEventListener('mouseenter', function() {
// //     button.style.color = 'blue';
// // })
// const data = ['olma', 'behi', 'anor', 'o\'rik', 'anjir'];

// data.forEach(el => {
//    let li=document.createElement('li');   
//    li.innerHTML = el
//    list.appendChild(li);
// }) 


// Quyidagi kabi massiv berilganda uning elementlaridan iborat cardlar yasash.
// Cardlarni korinishi rasm holatida yuklangan.

// Bundan tashqari card larda delete butoon mavjud. Ushbu button bosilganda sahifadan ushbu 
// cardni o'chirib tashlashi kerak bo'ladi. O'chirishda ham confirm modaldan foydalanib oldin
// haqiqatdan ochirmoqchi ekanini sorab olinishi zarur.


   const data = [
       {
           
           id: "1",
           name: "BMW",
           price: 35000,
           description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quam.",
           image:`./image/bmw.png`
       },
       {
           id: "2",
           name: "Mercedes",
           price: 40000,
           description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quam.",
           image:`./image/mercedes.jpg`
       },
       {
           id: "3",
           name: "Tesla",
           price: 22000,
           description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quam.",
           image:`./image/tesla.png`
       },
   ];

   const list = document.getElementById('list');

   data.forEach(v => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.setAttribute('src', `${v.image}`);
    img.setAttribute('alt', `car logo`);
    const div = document.createElement('div');
    div.innerHTML =`
    <b style="font-size:30px"> ${v.name}</b> <br> <br>
    <b style="color:red"> ${v.price}</b> <br>
     ${v.description} 
    `;
    const button = document.createElement('button');
    button.innerHTML = 'Delete';

    list.appendChild(li);
    li.appendChild(img);
    li.appendChild(div);
    li.appendChild(button);

    button.addEventListener('click', function() {
     
            const shouldDelete = confirm("Rostdan ham bu kartani oʻchirib tashlamoqchimisiz?");
            if (shouldDelete) {
                const cardToRemove = document.querySelector(`li`);
                cardToRemove.remove();
            }
        })
    })