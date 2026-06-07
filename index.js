import{a as m,S as d,i as o}from"./assets/vendor-BezXTN6Z.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const g="https://pixabay.com/api/",h="56210453-84943403f93b7b8a96293ef50";function y(a){return m.get(g,{params:{key:h,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),L=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(a){const t=a.map(({webformatURL:r,largeImageURL:i,tags:e,likes:s,views:n,comments:f,downloads:p})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${e}"
              loading="lazy"
            />
          </a>
          <ul class="info">
            <li class="info-item"><span class="info-label">Likes</span><span class="info-value">${s}</span></li>
            <li class="info-item"><span class="info-label">Views</span><span class="info-value">${n}</span></li>
            <li class="info-item"><span class="info-label">Comments</span><span class="info-value">${f}</span></li>
            <li class="info-item"><span class="info-label">Downloads</span><span class="info-value">${p}</span></li>
          </ul>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",t),L.refresh()}function S(){l.innerHTML=""}function v(){c.classList.remove("is-hidden")}function q(){c.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",w);function w(a){a.preventDefault();const t=a.currentTarget.elements["search-text"].value.trim();if(t===""){o.warning({message:"Please enter a search query!",position:"topRight"});return}S(),v(),y(t).then(r=>{if(!r.hits||r.hits.length===0){o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(r.hits)}).catch(r=>{o.error({message:`Something went wrong: ${r.message}`,position:"topRight"})}).finally(()=>{q(),u.reset()})}
//# sourceMappingURL=index.js.map
