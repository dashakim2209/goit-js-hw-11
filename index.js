import{S as d,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="46118287-c5ba04b36aad3afec959570e4",p="https://pixabay.com/api/";function h(s){const o=`${p}?key=${m}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>r.hits)}const y=new d(".gallery a");function g(){const s=document.querySelector(".gallery");s.innerHTML=""}function b(s){const o=document.querySelector(".gallery"),r=s.map(({webformatURL:i,largeImageURL:e,tags:t,likes:n,views:l,comments:u,downloads:f})=>`
            <a href="${e}" class="gallery-link">
                <div class="photo-card">
                    <img src="${i}" alt="${t}" loading="lazy" />
                    <div class="info">
                        <p class="info-item"><b>Likes</b> ${n}</p>
                        <p class="info-item"><b>Views</b> ${l}</p>
                        <p class="info-item"><b>Comments</b> ${u}</p>
                        <p class="info-item"><b>Downloads</b> ${f}</p>
                    </div>
                </div>
            </a>
        `).join("");o.insertAdjacentHTML("beforeend",r),y.refresh()}const L=document.querySelector("#search-form"),c=document.querySelector(".loader");L.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements.searchQuery.value.trim();if(!o){a.error({title:"Error",message:"Please enter a search query."});return}c.classList.remove("hidden"),g(),h(o).then(r=>{r.length===0?a.warning({title:"No Results",message:"Sorry, no images match your search query."}):b(r)}).catch(r=>{a.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error("Error fetching images:",r)}).finally(()=>{c.classList.add("hidden")})});
//# sourceMappingURL=index.js.map
