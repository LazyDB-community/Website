class sectionTitle{
	constructor(name){
		this.el = el("h1", name);
	}
}
class docSection{
	constructor(name,objects){
		this.el = el('div#' + name.split(' ').join('_'),
			el('h2',name),
			objects);
	}
}

class docObject{
	constructor(text,codes){
		
		
		let self = this;
		let navbar = el('nav');
		if(codes){
			this.currentIndex = Object.keys(codes)[0];
			this.codes = codes;
			
			for (let index in codes){
				navbar.appendChild(el('a',index, {
					onclick: (e) => {
						self.initCode(index);
					}
				}));
			}

			this.el = el('div',
			el('div.text',text),
			el('div.code',
				this.copyBt = el('i.fal.fa-copy', {
					onclick: (e) => {
						var newEl = document.createElement('textarea');
   						// Set value (string to be copied)
   						newEl.value = codes[this.currentIndex];
   						// Set non-editable to avoid focus and move outside of view
   						newEl.setAttribute('readonly', '');
   						newEl.style = {position: 'absolute', left: '-9999px'};
   						document.body.appendChild(newEl);
   						// Select text inside element
   						newEl.select();
   						// Copy text to clipboard
   						document.execCommand('copy');
   						// Remove temporary element
   						document.body.removeChild(newEl);
					}
				}),
				this.nav = navbar,
				el('pre', 
					this.currentCode = el('code')))
			)
			this.initCode(this.currentIndex);
		}else{
			this.el = el('div', el('div.text.large',text));
		}
		
		
			
	}

	initCode(index){
		this.currentIndex = index;
		this.currentCode.className = index;
		this.currentCode.textContent = this.codes[index];
		for (var i = 0; i < this.nav.children.length; i++) {
			if(this.nav.children[i].textContent == index){
				this.nav.children[i].className = "current";
			}else{
				this.nav.children[i].className = "";
			}
		}
		hljs.highlightBlock(this.currentCode);
	}
}
function initMenus(){
	for (var i = 0; i < menu.length; i++) {
		menu[i].nameEL.className = '';
		menu[i].subMenu.style.height = "0";
	}
}

function initSubMenus(){
	for (var i = 0; i < menu.length; i++) {
		for (var j = 0; j < menu[i].subMenu.children.length; j++) {
			const currentEl =  menu[i].subMenu.children[j];
			currentEl.className = "";
		}
	}
}

class subMenu{
	constructor(name,links){
		this.el = el('div',
			this.nameEL = el('a',name, 
				{
					onclick : (e) => {
						initMenus();
						this.nameEL.className = 'current';
						this.subMenu.style.height = this.subMenu.children.length * 33 + "px";

					}
				}
				),
			this.subMenu = el('nav.sub', {
				style: {
					height: 0
				}
			})
		);
		for (var i = 0; i < links.length; i++) {
			let newChild = el('a',links[i],{
				href: "#" + links[i].split(' ').join('_'),
				onclick: function(e) {
					initSubMenus();

					newChild.className = "current";
				}
			});
			this.subMenu.appendChild(newChild)
		}
	}
}

class Warn{
	constructor(msg){
		this.el = el('div.warn',
			el('i.fal.fa-exclamation-triangle'),
			this.p = el('p')
		);
		this.p.innerHTML = msg;
	}
}