import asyncio
from bleak import BleakScanner

async def main():
    while True:
      devices = await BleakScanner.discover()
      print("Devices count:", len(devices))

asyncio.run(main())
