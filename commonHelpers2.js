import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t={email:"",message:""},a=document.querySelector(".feedback-form"),s=a.elements.email,o=a.elements.message,l="feedback-form-state";window.addEventListener("load",()=>{const e=JSON.parse(localStorage.getItem(l));e&&(t.email=e.email||"",t.message=e.message||"",s.value=t.email,o.value=t.message)});a.addEventListener("input",n);function n(e){const m=e.target.name;t[m]=e.target.value,localStorage.setItem(l,JSON.stringify(t))}a.addEventListener("submit",r);function r(e){if(e.preventDefault(),s.value.trim()===""||o.value.trim()===""){alert("Please fill in all fields.");return}console.log(t),localStorage.removeItem(l),a.reset()}
//# sourceMappingURL=commonHelpers2.js.map