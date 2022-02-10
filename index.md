# Who Am I? 

Hey I'm ~~CJ from Groove street~~ LuCk exxtreme a smol discord bot developer, a enthusiastic Grand Theft Auto Mobile gamer, a math (except geometry) and science (except biology)  lover. 
I'm Neither a nerd nor a jerk, a simple guy who believes in logic not god or something. 
I enjoy my life like many do with daily interruptions. 

## My fav. movie(s):

- Spider Man (all)

- avengers (all)

- and few more I don't remember.

## My fav. book(s): 

Only humorous books. 

## My fav. food(s): 

Many (both junk food and healthy and veg.)

## My fav. country(s): 

- USA 

- China

- Australia

- France

- Japan

- UK. 

## My fav. singer(s): 

Chester Bennington.

## My fav. game(s):

Grand Theft Auto (all) 

## My Birthday: 

17 dec. 2006

## My Mother Country: 

I don't like to mention.

## My hobbies: 

- Writing Scripts 

- Learning to code

- Play Grand Theft Auto.


# My projects:

- [My discord bot](https://dsc.gg/livin-in-thug) 

- [My bot's docs](https://docs.luckexxtreme.ml)

- [A 2 server in 1 discord server](https://discord.gg/FSMTeH3hse)

# My MineCraft SMP (geyser server):

## IP:

LuCk_exxtreme.aternos.me
## Port:

54305

***You can request to switch on the smp in discord server***

# Your device:

I know a lot about your device.

## info:

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Client Info</title>
</head>

<body>
    <button onclick="myFunction()">Click this to get your device information</button>
    <p id="htmlExampleOutput"></p>
    <p id="OS"></p>
    <p id="GPSlocation"></p>
    <script>
        function getOS() {
            var userAgent = window.navigator.userAgent,
                platform = window.navigator.platform,
                macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
                windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
                iosPlatforms = ['iPhone', 'iPad', 'iPod'],
                os = null;

            if (macosPlatforms.indexOf(platform) !== -1) {
                os = 'Mac OS';
            } else if (iosPlatforms.indexOf(platform) !== -1) {
                os = 'iOS';
            } else if (windowsPlatforms.indexOf(platform) !== -1) {
                os = 'Windows';
            } else if (/Android/.test(userAgent)) {
                os = 'Android';
            } else if (!os && /Linux/.test(platform)) {
                os = 'Linux';
            }

            return os;
        }
        function deviceName() {
            fod.complete(function (data) {
                // Fetch the properties from the JSON response and write to the page.
                document.getElementById("htmlExampleOutput").innerHTML = "Device Name: " + data.device["hardwarename"];
            });
        }

        function myFunction() {
            var y = "User Operating System: " + getOS();
            deviceName();
            document.getElementById("OS").innerHTML = y;

            var x = document.getElementById("GPSlocation");
            //FUNCTION TO GET CLIENT LOCATION
            getLocation();
            function getLocation() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(showPosition);
                } else {
                    x.innerHTML = "Geolocation is not supported by this browser.";
                }
            }
            function showPosition(position) {
                x.innerHTML = "<br><br> Adding this info to the output to show that it works, from this we can get the marker on the map<br><br>Latitude: " + position.coords.latitude +
                    "<br>Longitude: " + position.coords.longitude;
            }
        }
    </script>
</body>

</html>
<!-- API for getting the device name -->
<script async src="https://cloud.51degrees.com/api/v4/AQQNX4o8hQpU86PH2Eg.js"></script>

## Your Battery status:

<!-- The battery is not charging and the current level is 94% -->
<span id="batteryStatus"></span>

<script>
  if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
      const { level, charging } = battery;
      const status = charging ? "charging" : "not charging";
      const percent = `${Math.round(level * 100)}%`;
      const message = `Your battery is ${status}, current level: 

[${percent}]•`;
      document.getElementById("batteryStatus").textContent = message;
    });
  }


</script>

## Your IP:

<html><head>
    <meta charset="utf-8">
    <title>Network IP Address via ipcalf.com</title>
</head><body>
Your network IP is: <h1 id=list>-</h1>.



<script>

// NOTE: window.RTCPeerConnection is "not a constructor" in FF22/23
var RTCPeerConnection = /*window.RTCPeerConnection ||*/ window.webkitRTCPeerConnection || window.mozRTCPeerConnection;

if (RTCPeerConnection) (function () {
    var rtc = new RTCPeerConnection({iceServers:[]});
    if (1 || window.mozRTCPeerConnection) {      // FF [and now Chrome!] needs a channel/stream to proceed
        rtc.createDataChannel('', {reliable:false});
    };
    
    rtc.onicecandidate = function (evt) {
        // convert the candidate to SDP so we can run it through our general parser
        // see https://twitter.com/lancestout/status/525796175425720320 for details
        if (evt.candidate) grepSDP("a="+evt.candidate.candidate);
    };
    rtc.createOffer(function (offerDesc) {
        grepSDP(offerDesc.sdp);
        rtc.setLocalDescription(offerDesc);
    }, function (e) { console.warn("offer failed", e); });
    
    
    var addrs = Object.create(null);
    addrs["0.0.0.0"] = false;
    function updateDisplay(newAddr) {
        if (newAddr in addrs) return;
        else addrs[newAddr] = true;
        var displayAddrs = Object.keys(addrs).filter(function (k) { return addrs[k]; });
        document.getElementById('list').textContent = displayAddrs.join(" or perhaps ") || "n/a";
    }
    
    function grepSDP(sdp) {
        var hosts = [];
        sdp.split('\r\n').forEach(function (line) { // c.f. http://tools.ietf.org/html/rfc4566#page-39
            if (~line.indexOf("a=candidate")) {     // http://tools.ietf.org/html/rfc4566#section-5.13
                var parts = line.split(' '),        // http://tools.ietf.org/html/rfc5245#section-15.1
                    addr = parts[4],
                    type = parts[7];
                if (type === 'host') updateDisplay(addr);
            } else if (~line.indexOf("c=")) {       // http://tools.ietf.org/html/rfc4566#section-5.7
                var parts = line.split(' '),
                    addr = parts[2];
                updateDisplay(addr);
            }
        });
    }
})(); else {
    document.getElementById('list').innerHTML = "<code>ifconfig | grep inet | grep -v inet6 | cut -d\" \" -f2 | tail -n1</code>";
    document.getElementById('list').nextSibling.textContent = "In Chrome and Firefox your IP should display automatically, by the power of WebRTCskull.";
}

</script>

</body></html>

*You're not IP logged only you can see this*

# My Contacts:

## Discord:

### My discord User&Tag:

LuCk exxtreme#7525

### Discord server:

[![My discord server](https://github.com/LuCk-exxtreme/LuCk/blob/main/.github/assests/Screenshot_2022_0210_114052.png)](https://discord.gg/FSMTeH3hse)


### Date:
<script> var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var dateTime = date+' '+time </script>
