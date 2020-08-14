/*
 * View model for OctoPrint-Heatbedsavety
 *
 * Author: linuxpaul
 * License: AGPLv3
 */
$(function() {
    function HeatbedsavetyViewModel(parameters) {
        var self = this;

	self.url = "/plugin/heatbedsavety/heatbedsavety";

	self.bedPower = ko.observable();

	self.send = function (data,event) {
      		var request = {"data": data};
      		$.ajax({
        		type: "GET",
       			dataType: "json",
        		data: request,
        		url: self.url
      		});
    	};

	self.onStartupComplete = function() {
		self.send("boot","");
	};

	self.onDataUpdaterPluginMessage = function(plugin,data) {
            if (plugin != "heatbedsavety") {
                return;
            }
            else {
		        self.bedPower(data.bedpower);
            }
        };

    }

    /* view model class, parameters for constructor, container to bind to
     * Please see http://docs.octoprint.org/en/master/plugins/viewmodels.html#registering-custom-viewmodels for more details
     * and a full list of the available options.
     */
    OCTOPRINT_VIEWMODELS.push({
        construct: HeatbedsavetyViewModel,
        // ViewModels your plugin depends on, e.g. loginStateViewModel, settingsViewModel, ...
        dependencies: [ /* "loginStateViewModel", "settingsViewModel" */ ],
        // Elements to bind to, e.g. #settings_plugin_HetBedSavety, #tab_plugin_HetBedSavety, ...
        elements: [ "#sidebar_plugin_heatbedsavety" ]
    });
});
