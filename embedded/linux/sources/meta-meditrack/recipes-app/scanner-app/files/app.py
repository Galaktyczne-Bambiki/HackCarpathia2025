import asyncio
import requests
from bleak import BleakScanner

async def main():
  while True:
    devices = await BleakScanner.discover()
    devices_count = len(devices)
    print("Devices count:", devices_count)

    requests.post(
      "https://hackcarpathia-hackcarpathia-web-api-external-ingress.tempel-yo.ts.net/v1/medical-center/traffic",
      headers={
        "X-API-KEY": "super-klucz",
        "Content-Type": "application/json"
      },
      json={
        "medicalCenterId": 1,
        "currentVisitors": devices_count
      },
    )

asyncio.run(main())
