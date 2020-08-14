# OctoPrint-Heatbedsavety

This (very basic) Plugin is able to drive a Relais in series connection to your Solid State.
This should Octoprint make able to disconnect the heatbed from power in case a damaged Solid state.

Disconnect events:
- reaching or passing the configured max temperature
- Printer events "ERROR" or "CLOSED_WITH_ERROR" raised
- Toggle sidebar button

(Re)Connect events:
- Printer event "OPERATIONAL" raised
- Toggle sidebar button


## Setup

Install via the bundled [Plugin Manager](https://docs.octoprint.org/en/master/bundledplugins/pluginmanager.html)
or manually using this URL:

    https://github.com/linux-paul/OctoPrint-Heatbedsavety/archive/master.zip

## Configuration

Pin:      PinNumber (BCM) where the relais is connected to.
maxTemp:  BedTemperature which should never reached or passed.

