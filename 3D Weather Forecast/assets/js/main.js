// APP CONSTRUCTOR
function App() {

    // all our lets
    let _weatherService,
        _weatherTitleData,
        _weatherConditionData,
        _weatherForecastData,
        _weatherForecastDayOneData,
        _weatherForecastDayTwoData,
        _weatherForecastDayThreeData;


    // initializing all whats needed in the right order
    function init() {

        // instance of our weatherservice & node
        // _weatherService = new WeatherService();
        _weatherElementTitle = document.querySelector(".weatherTitle");
        _weatherElementCondition = document.querySelector(".weatherCondition");
        _weatherElementForecastDayOne = document.querySelector(".weatherForecastDayOne");
        _weatherElementForecastDayTwo = document.querySelector(".weatherForecastDayTwo");
        _weatherElementForecastDayThree = document.querySelector(".weatherForecastDayThree");

        // nodes for colour changes
        _weatherElementColourForecastOne = document.querySelector(".forecastDayOneColour");
        _weatherElementColourForecastTwo = document.querySelector(".forecastDayTwoColour");
        _weatherElementColourForecastThree = document.querySelector(".forecastDayThreeColour");
        _blenderDayOne = document.querySelector(".blenderDayOne");
        _blenderDayTwo = document.querySelector(".blenderDayTwo");
        _blenderDayThree = document.querySelector(".blenderDayThree");


        _weatherForecastDayOneData = 2;
        _weatherForecastDayTwoData = 13;
        _weatherForecastDayThreeData = 23;
        _weatherForecastData = 5;

        _loader = document.querySelector('.loader')

        // finally loading the data
        /*_loader.onclick = function () {
            loadWeatherData();
        }*/
        displayWeather();
        //setTimeout(loadWeatherData(), 10000);
    }

    function loadWeatherData() {
        _weatherService.loadWeather()
            .then(function (data) {
                /*
                // title for our display
                _weatherTitleData = data.query.results.channel.title

                // saving the loaded data inside _weatherData
                // current condition
                _weatherConditionData = data.query.results.channel.item.condition;

                // weather forecast for the following 3 days
                _weatherForecastDayOneData = data.query.results.channel.item.forecast[1];
                _weatherForecastDayTwoData = data.query.results.channel.item.forecast[2];
                _weatherForecastDayThreeData = data.query.results.channel.item.forecast[3];

                _weatherForecastData = data.query.results.channel.item.forecast[0];*/

                // has acces to data
                // displayWeather();

            })
            .catch(function (reject) {
                alert("Sorry, there was an error.")
            });
    }

    function displayWeather() {

        // a temp empty string, later used to update data innerHTML
        let tempTitle = '',
            tempCondition = '',
            tempForecastDayOne = '',
            tempForecastDayTwo = '',
            tempForecastDayThree = '';

        // templates before setting the string attributes/text elements
        /*tempTitle += `
            ${_weatherTitleData}
        `;*/
        tempTitle += ` Thursday, 10 Janruary 2019`
        tempCondition += `
            Current weather condition is Cloudy with 4°C

        `;

        tempForecastDayOne += `
            Date: 10/01/2019
            High: 7°C
            Low: -1°C
        `;

        tempForecastDayTwo += `
            Date: 11/01/2019
            High: 14°C
            Low: 11°C
        `;

        tempForecastDayThree += `
            Date: 12/01/2019
            High: 25°C
            Low: 21°C
        `;


        // TODO - MESSY CODE FOR NOW - CHANGE COLOR BASED ON HIGH TEMP
        if (_weatherForecastDayOneData > 25) {
            _weatherElementColourForecastOne.setAttribute('diffuseColor', '1 0 0');
            _blenderDayOne.setAttribute('url', 'assets/x3d/zon.x3d');
        } else if (_weatherForecastDayOneData >= 15) {
            _weatherElementColourForecastOne.setAttribute('diffuseColor', '1 0.5 0.25');
            console.log(_blenderDayOne)
            _blenderDayOne.setAttribute('url', 'assets/x3d/cloud.x3d');
            console.log(_blenderDayOne)
        } else if (_weatherForecastDayOneData < 5) {
            _weatherElementColourForecastOne.setAttribute('diffuseColor', '0 1 0');
            _blenderDayOne.setAttribute('url', 'assets/x3d/snow.x3d');
        } else if (_weatherForecastDayOneData >= 5) {
            _weatherElementColourForecastOne.setAttribute('diffuseColor', '1 1 0.5');
            _blenderDayOne.setAttribute('url', 'assets/x3d/rain.x3d');
        }

        if (_weatherForecastDayTwoData > 25) {
            _weatherElementColourForecastTwo.setAttribute('diffuseColor', '1 0 0');
            _blenderDayTwo.setAttribute('url', 'assets/x3d/zon.x3d');
        } else if (_weatherForecastDayTwoData >= 15) {
            _weatherElementColourForecastTwo.setAttribute('diffuseColor', '1 0.5 0.25');
            _blenderDayTwo.setAttribute('url', 'assets/x3d/cloud.x3d');
        } else if (_weatherForecastDayTwoData < 5) {
            _weatherElementColourForecastTwo.setAttribute('diffuseColor', '0 1 0');
            _blenderDayTwo.setAttribute('url', 'assets/x3d/snow.x3d');
        } else if (_weatherForecastDayTwoData >= 5) {
            _weatherElementColourForecastTwo.setAttribute('diffuseColor', '1 1 0.5');
            _blenderDayTwo.setAttribute('url', 'assets/x3d/rain.x3d');
            _blenderDayThree.setAttribute('url', 'assets/x3d/cloud.x3d');
        }
        console.log(_weatherForecastDayThreeData);
        if (_weatherForecastDayThreeData > 25) {
            _weatherElementColourForecastThree.setAttribute('diffuseColor', '1 0 0');
            _blenderDayThree.setAttribute('url', 'assets/x3d/cloud.x3d');
        } else if (_weatherForecastDayThreeData >= 15) {
            _weatherElementColourForecastThree.setAttribute('diffuseColor', '1 0.5 0.25');
            _blenderDayThree.setAttribute('url', 'assets/x3d/zon.x3d');
        } else if (_weatherForecastDayThreeData < 5) {
            _weatherElementColourForecastThree.setAttribute('diffuseColor', '0 1 0');
            _blenderDayThree.setAttribute('url', 'assets/x3d/snow.x3d');
        } else if (_weatherForecastDayThreeData >= 5) {
            _weatherElementColourForecastThree.setAttribute('diffuseColor', '1 1 0.5');
            _blenderDayTwo.setAttribute('url', 'assets/x3d/rain.x3d');
        }



        // finally setting the consumed data to string attribute
        _weatherElementTitle.setAttribute('string', tempTitle);
        _weatherElementCondition.setAttribute('string', tempCondition);
        _weatherElementForecastDayOne.setAttribute('string', tempForecastDayOne);
        _weatherElementForecastDayTwo.setAttribute('string', tempForecastDayTwo);
        _weatherElementForecastDayThree.setAttribute('string', tempForecastDayThree);

    }

    return {
        init: init
    };

}

// init the application
const app = new App();
app.init();