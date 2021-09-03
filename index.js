/* eslint-disable no-console */
//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
-19,6 +20,8 function timer() {
	contador += 1;
	segundos = "000000" + contador;
	segundos = segundos.slice(-6);
	console.log(segundos);
	console.log(segundos.split(""));
	ReactDOM.render(
		<Secondcounter tiempo={segundos.split("")} />,
		document.querySelector("#app"),
}