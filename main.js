var myWeatherData = [{
    "query": {
      "count": 1,
      "created": "2018-07-17T11:20:38Z",
      "lang": "en-US",
      "results": {
        "channel": {
          "units": {
            "distance": "mi",
            "pressure": "in",
            "speed": "mph",
            "temperature": "F"
          },
          "title": "Yahoo! Weather - Gurgaon, HR, IN",
          "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2295020/",
          "description": "Yahoo! Weather for Gurgaon, HR, IN",
          "language": "en-us",
          "lastBuildDate": "Tue, 17 Jul 2018 04:50 PM IST",
          "ttl": "60",
          "location": {
            "city": "Gurgaon",
            "country": "India",
            "region": " HR"
          },
          "wind": {
            "chill": "91",
            "direction": "90",
            "speed": "7"
          },
          "atmosphere": {
            "humidity": "65",
            "pressure": "968.0",
            "rising": "0",
            "visibility": "16.1"
          },
          "astronomy": {
            "sunrise": "5:35 am",
            "sunset": "7:20 pm"
          },
          "image": {
            "title": "Yahoo! Weather",
            "width": "142",
            "height": "18",
            "link": "http://weather.yahoo.com",
            "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
          },
          "item": {
            "title": "Conditions for Gurgaon, HR, IN at 03:30 PM IST",
            "lat": "28.466921",
            "long": "77.043793",
            "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2295020/",
            "pubDate": "Tue, 17 Jul 2018 03:30 PM IST",
            "condition": {
              "code": "4",
              "date": "Tue, 17 Jul 2018 03:30 PM IST",
              "temp": "91",
              "text": "Thunderstorms"
            },
            "forecast": [
              {
                "code": "4",
                "date": "17 Jul 2018",
                "day": "Tue",
                "high": "91",
                "low": "81",
                "text": "Thunderstorms"
              },
              {
                "code": "4",
                "date": "18 Jul 2018",
                "day": "Wed",
                "high": "91",
                "low": "82",
                "text": "Thunderstorms"
              },
              {
                "code": "4",
                "date": "19 Jul 2018",
                "day": "Thu",
                "high": "89",
                "low": "81",
                "text": "Thunderstorms"
              },
              {
                "code": "4",
                "date": "20 Jul 2018",
                "day": "Fri",
                "high": "90",
                "low": "78",
                "text": "Thunderstorms"
              },
              {
                "code": "4",
                "date": "21 Jul 2018",
                "day": "Sat",
                "high": "87",
                "low": "78",
                "text": "Thunderstorms"
              },
              {
                "code": "4",
                "date": "22 Jul 2018",
                "day": "Sun",
                "high": "88",
                "low": "78",
                "text": "Thunderstorms"
              },
              {
                "code": "4",
                "date": "23 Jul 2018",
                "day": "Mon",
                "high": "89",
                "low": "78",
                "text": "Thunderstorms"
              },
              {
                "code": "4",
                "date": "24 Jul 2018",
                "day": "Tue",
                "high": "89",
                "low": "79",
                "text": "Thunderstorms"
              },
              {
                "code": "28",
                "date": "25 Jul 2018",
                "day": "Wed",
                "high": "88",
                "low": "81",
                "text": "Mostly Cloudy"
              },
              {
                "code": "47",
                "date": "26 Jul 2018",
                "day": "Thu",
                "high": "89",
                "low": "80",
                "text": "Scattered Thunderstorms"
              }
            ],
            "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/4.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Thunderstorms\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Tue - Thunderstorms. High: 91Low: 81\n<BR /> Wed - Thunderstorms. High: 91Low: 82\n<BR /> Thu - Thunderstorms. High: 89Low: 81\n<BR /> Fri - Thunderstorms. High: 90Low: 78\n<BR /> Sat - Thunderstorms. High: 87Low: 78\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2295020/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>",
            "guid": {
              "isPermaLink": "false"
            }
          }
        }
      }
    }
  }];
  
  console.log(myWeatherData[0].query.created);
  var arr1 = [];
  var arr2 = [];
  var arr3=[];
  var forecast = myWeatherData[0].query.results.channel.item.forecast;
  console.log(forecast);
  
  
  for (var i in forecast) {
      console.log(i);
     arr1.push(forecast[i].date);
     arr2.push(forecast[i].high);
     arr3.push(forecast[i].low)
  }
  console.log(arr1, arr2, arr3);
  
  var dates = arr1;
  var temphigh = arr2;
  var templow = arr3;
  
  var ctx = document.getElementById("myChart");
  console.log(ctx);
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        { 
          data: temphigh,
          label: "Highest Temperature",
          borderColor: "#3e95cd",
        fill: false
        },
        { 
          data: templow,
          label: "Lowest Temperature",
          borderColor: "#8e5ea2",
        fill: false
        }

      ]
    }
  });
  