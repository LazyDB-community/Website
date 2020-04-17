function openQ(el){
    for(let i = 0; i < faq.children.length;i++){
        const child = faq.children[i];
        child.className = "";
        child.style.height = "50px";
    }
    el.className = "open";
    el.style.height = 50 + 40 + el.children[1].clientHeight + "px";
}

let faq = document.getElementById("faq");
for(let i = 0; i < faq.children.length;i++){
    const child = faq.children[i]
    child.onclick = (e) => {
        openQ(child);
    }
}


function selectNew(optionId, pricingId){
    
}