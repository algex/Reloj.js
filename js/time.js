(function(){
	var actualizar =function(){
		var fecha = new Date(),
			horas = fecha.getHours(),
			ampm,
			minutos = fecha.getMinutes(),
			segundos = fecha.getSeconds(),
			diaSemana = fecha.getDay(),
			dia = fecha.getDate(),
			mes = fecha.getMonth(),
			year= fecha.getFullYear();

		var phoras = document.getElementById('horas'),
			pampm = document.getElementById('ampm'),
			pminutos = document.getElementById('minutos'),
			psegundos = document.getElementById('segundos'),
			pdiaSemana = document.getElementById('diaSemana'),
			pdia = document.getElementById('dia'),
			pmes = document.getElementById('mes'),
			pyear = document.getElementById('year');
		var meses =['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiempre', 'Octubre', 'Noviembre', 'Diciembre']
		var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
		pdiaSemana.textContent = semana[diaSemana];
		pdia.textContent = dia;
		pmes.textContent = meses[mes];
		pyear.textContent = year;
		if (horas >= 12){
			horas = horas - 12;
			ampm = 'PM';
		} else {
			ampm = 'AM';
		}

		if (horas == 0){
			horas = 12;
		}
		phoras.textContent = horas;

		if (minutos<10){minutos = "0" + minutos};
		if (segundos<10){segundos = "0" + minutos};
		pminutos.textContent= minutos;
		psegundos.textContent= segundos;


	};

	actualizar();
	var intervalo = setInterval(actualizar, 1000);
}())