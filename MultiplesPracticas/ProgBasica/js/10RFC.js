window.onload = function(){

	
	function valida(){
			var bRet = false;
			if (document.querySelector("#caja").value == "")
				document.write("<h2 style='color:red;font-style:arial;'>Faltan datos</h2>");
			else if (!document.querySelector("#caja").value.match(/^[A-Z]{3,4}\d{6}[A-Z0-9]{3}$/))
				document.write("<h2 style='color:red;font-style:arial;'>No tiene formato de RFC</h2>");
				else
					bRet = true;
			return bRet;
		}

	document.querySelector(".boton").addEventListener("click",function(){
		document.querySelector("#caja").value
		valida();
	},false);	
};