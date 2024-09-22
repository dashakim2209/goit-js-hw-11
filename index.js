import{i as a,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const y="46118287-c5ba04b36aad3afec959570e4",p="https://pixabay.com/api/";async function g(o){if(!o.trim()){a.error({title:"Error",message:"Please enter a search query."});return}try{const s=await(await fetch(`${p}?key=${y}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`)).json();return s.hits.length===0?(a.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}),[]):s.hits}catch(t){throw a.error({title:"Error",message:"Something went wrong. Please try again later."}),t}}function h(){const o=document.querySelector(".gallery");o.innerHTML=""}function b(o){const t=document.querySelector(".gallery"),s=o.map(({webformatURL:e,largeImageURL:r,tags:n,likes:l,views:u,comments:d,downloads:f})=>`
            <a href="${r}" class="gallery-link">
                <div class="photo-card">
                    <img src="${e}" alt="${n}" loading="lazy" />
                    <div class="info">
                        <p class="info-item"><b>Likes</b> ${l}</p>
                        <p class="info-item"><b>Views</b> ${u}</p>
                        <p class="info-item"><b>Comments</b> ${d}</p>
                        <p class="info-item"><b>Downloads</b> ${f}</p>
                    </div>
                </div>
            </a>
        `).join("");t.insertAdjacentHTML("beforeend",s),new m(".gallery a").refresh()}const L=document.querySelector("search-form"),c=document.querySelector(".loader");L.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(t)try{c.classList.remove("hidden"),h();const s=await g(t);b(s)}catch(s){console.error("Error fetching images:",s)}finally{c.classList.add("hidden")}});
//# sourceMappingURL=index.js.map
