import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e={email:"",message:""},a=document.querySelector(".feedback-form"),m=a.elements.email,o=a.elements.message,s="feedback-form-state";window.addEventListener("load",()=>{const t=JSON.parse(localStorage.getItem(s));t&&(e.email=t.email||"",e.message=t.message||"",m.value=e.email,o.value=e.message)});a.addEventListener("input",n);function n(t){const l=t.target.name;e[l]=t.target.value,localStorage.setItem(s,JSON.stringify(e))}a.addEventListener("submit",i);function i(t){if(t.preventDefault(),e.email.trim()===""||e.message.trim()===""){alert("Please fill in all fields.");return}localStorage.removeItem(s),console.log(e),a.reset()}
//# sourceMappingURL=commonHelpers2.js.map