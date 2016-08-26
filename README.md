# Infomirror

This was a Startup Weekend idea for a Smart Mirror with Python script versions of different modules and JavaScript equivalents for all but calendar. 

## Setup

Create a the following file for Google API and openWeatherMap API keys:

### client_secret.json

```
{
    "installed":{
        "client_id":"","project_id":"","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://accounts.google.com/o/oauth2/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"","redirect_uris":["urn:ietf:wg:oauth:2.0:oob","http://localhost"]
    },
    "openWeatherMap":""
}
```

## Python

### Install

```
    make install
```

### Run

To run all the modules:
```
    make run
```

or individually:
```
    make calendar
```
```
    make weather
```
```
    make news
```

## Web-App Version

### Install

```
    npm install
    jspm install -y
```

### Run

```
    gulp build && electron index.js
```
