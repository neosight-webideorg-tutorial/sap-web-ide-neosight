sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.neosight.restapi.RESTAPI.controller.Main", {
		onInit: function () {
			debugger;
			var that = this;
			var oModel = new sap.ui.model.json.JSONModel()
				// create XHR object
			var xhttp = new XMLHttpRequest();

			// gets everytime fired when the XHR request state changes
			xhttp.onreadystatechange = function () {
				debugger;
				// 4 means request is finished and response is ready
				// 200 means request is just fine
				if (this.readyState == 4 && this.status == 200) {

					// "this" refers here to the XHR object
					console.log("reponse: " + this.responseText);
					oModel.setData(JSON.parse(this.responseText).data);
					console.log(oModel.getData());
					that.getView().setModel(oModel, "items");
					console.log("test m1")

				}
			}

			// set the XHR request parameters
			xhttp.open("GET", "https://reqres.in/api/users?page=2", true);
			cpnsole.log("test");
			// fire the XHR request
			xhttp.send();
		}
	});
});