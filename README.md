# zoophy-ui-jumps
Update of [ZooPhy's UI](https://github.com/ZooPhy/zoophy-ui) to support asymmetric markov jump analysis. 
## Dependencies
See [ZooPhy UI dependencies](https://github.com/ZooPhy/zoophy-ui). 
Requires ZooPhy services supporting markov jumps 
## Modifications
* Updated views to include option for markov jumps under Advanced Options
* Updated JSON post in route/run to include new variable **useJumps** from Advanced Options
## Setup
(Retained from [ZooPhy UI setup](https://github.com/ZooPhy/zoophy-ui) written by @developerDemetri )
* Create a secret_settings.js file in the bin folder with your configuration details. Refer to settings_template.js
* Run `npm install` to install required packages. 
* Run `npm test` to ensure required tests are passed. 
* Run `npm start` to start the application. 
