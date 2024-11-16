"use strict";
window.addEventListener('load', () => {
    let name = localStorage.getItem("name");
    let Designation = localStorage.getItem("Designation");
    let picture = localStorage.getItem("picture");
    console.log("🚀 ~ window.addEventListener ~ picture:", picture);
    let PIname = localStorage.getItem("PIname");
    let PIcontact = localStorage.getItem("PIcontact");
    let PIemail = localStorage.getItem("PIemail");
    let edu1 = localStorage.getItem("edu1");
    let edu2 = localStorage.getItem("edu2");
    let edu3 = localStorage.getItem("edu3");
    let exp1 = localStorage.getItem("exp1");
    let exp2 = localStorage.getItem("exp2");
    let skill1 = localStorage.getItem("skill1");
    let skill2 = localStorage.getItem("skill2");
    let resName = document.getElementById('resName');
    resName.textContent = name;
    console.log(resName);
    let desig = document.getElementById('desig');
    desig.textContent = Designation;
    let pname = document.getElementById('pname');
    pname.textContent = PIname;
    let Contact = document.getElementById('Contact');
    Contact.textContent = PIcontact;
    let Email = document.getElementById('Email');
    Email.textContent = PIemail;
    let ed1 = document.getElementById('ed1');
    ed1.textContent = edu1;
    let ed2 = document.getElementById('ed2');
    ed2.textContent = edu2;
    let ed3 = document.getElementById('ed3');
    ed3.textContent = edu3;
    let exp = document.getElementById('exp1');
    exp.textContent = exp1;
    let expr = document.getElementById('exp2');
    expr.textContent = exp2;
    let skil1 = document.getElementById('skil1');
    skil1.textContent = skill1;
    let skil2 = document.getElementById('skil2');
    skil2.textContent = skill2;
    let image = document.getElementById('image');
    image.src = picture;
});
let Personalbtn = document.getElementById('Personalbtn');
let edubtn = document.getElementById('edubtn');
let expbtn = document.getElementById('expbtn');
let skillbtn = document.getElementById('skillbtn');
let perleg = document.getElementById('perleg');
let edu = document.getElementById('edu');
let exp = document.getElementById('exp');
let skill = document.getElementById('skill');
Personalbtn.addEventListener('click', () => {
    if (perleg.style.display == 'block') {
        perleg.style.display = 'none';
    }
    else {
        perleg.style.display = 'block';
    }
});
edubtn.addEventListener('click', () => {
    if (edu.style.display == 'block') {
        edu.style.display = 'none';
    }
    else {
        edu.style.display = 'block';
    }
});
expbtn.addEventListener('click', () => {
    if (exp.style.display == 'block') {
        exp.style.display = 'none';
    }
    else {
        exp.style.display = 'block';
    }
});
skillbtn.addEventListener('click', () => {
    if (skill.style.display == 'block') {
        skill.style.display = 'none';
    }
    else {
        skill.style.display = 'block';
    }
});
let Print = document.getElementById('print');
Print === null || Print === void 0 ? void 0 : Print.addEventListener('click', () => {
    window.print();
});
