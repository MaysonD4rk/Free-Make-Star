document.addEventListener('DOMContentLoaded',()=>{

	const pincel = {
		ativo: false,
		movendo: false,
		pos:{x:0,y:0},
		posAnterior: null
	}


const tela = document.querySelector('#tela');
const ctx = tela.getContext('2d');

tela.width = 700;
tela.height = 500;



	const mudarCor = () =>{
		let cor = document.getElementById('cor').value;
		if (cor === 'eraser') {
			cor = 'white';
		}
		return cor;
	}

	const mudarLar = () => {
		let lar = document.getElementById('lar').value
		return lar;
	}


const desenharLinha = (linha)=>{

	var lar  = mudarLar()
	var cor = mudarCor();

ctx.beginPath();
ctx.moveTo(linha.posAnterior.x, linha.posAnterior.y);
ctx.lineTo(linha.pos.x, linha.pos.y);
ctx.lineWidth = lar;
ctx.strokeStyle = cor;
ctx.stroke();
}

	tela.onmousedown = (evento)=>{
		pincel.ativo = true;
	}
	tela.onmouseup = (evento) => {
		pincel.ativo = false;
	}

	tela.onmousemove = (evento)=>{
		pincel.pos.x = evento.clientX;
		pincel.pos.y = evento.clientY;
		pincel.movendo = true;

	}

	const ciclo = ()=>{
		if (pincel.ativo && pincel.movendo && pincel.posAnterior) {
			desenharLinha({ pos: pincel.pos, posAnterior: pincel.posAnterior})
			pincel.movendo = false;
		}
		pincel.posAnterior = {x: pincel.pos.x, y: pincel.pos.y}

		setTimeout(ciclo, 0.00001);
	}
	ciclo();	


//desenharLinha({pos: {x: 350, y: 250}, posAnterior:{x:10, y:10}})

})


function ver(){
	document.getElementById('cv').style.display = 'block';
}