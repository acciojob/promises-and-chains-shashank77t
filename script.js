//your JS code here. If requi.
const age=document.getElementById("age");
const name1=document.getElementById("name");
const btn=document.getElementById("btn");

btn.addEventListener("click",function(){
    const ageValidation = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age.value >= 18) {
                resolve(name1.value);
            } else {
                reject(name1.value);
            }
        }, 4000);  // 4 seconds delay
    });

    ageValidation
        .then((name) => {
            alert(`Welcome, ${name1.value}. You can vote.`);
        })
        .catch((name) => {
            alert(`Oh sorry, ${name1.value}. You aren't old enough.`);
        });
})
