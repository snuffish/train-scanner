## Usage
_________
### Run the CLI Tool
```bash
# Load configuration from '.env'
npm run scan

# Override your env variables
DELAY=5 LOCATION=SK,N npm run scan
```
### Output

```json
[
    {
        "Success": false,
        "LocationCode": "SK",
        "ScanForDelayedMinutes": 20,
        "hits": []
    },
    {
        "Success": true,
        "LocationCode": "N",
        "ScanForDelayedMinutes": 20,
        "hits": [
            {
                "TrainNumber": 7637,
                "Departure": "N",
                "Destination": "HD",
                "DelayedConnections": [
                    {
                        "LocationCode": "OM",
                        "MinutesDelayed": 15,
                        "DepartureTime": "15:33",
                        "DepartureRealTime": "15:48",
                        "ArrivalTime": "",
                        "ArrivalRealTime": ""
                    }
                ],
                "image": "base64..."
            }
        ]
    }
]
```

## Linux (RaspberryPi)
```bash
# Install Chromium browser
sudo apt install chromium-browser
```

Add to your `.bashrc` file
```bash
# Puppetter
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
export PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
export CHROME_DEVEL_SANDBOX=/usr/local/sbin/chrome-devel-sandbox
```