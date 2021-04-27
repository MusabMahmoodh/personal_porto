const BatteryStatus = async () => {
  let isBatterySupported = "getBattery" in navigator;
  let batteryIsCharging = false;

  if (!isBatterySupported) {
    return false;
  } else {
    // let batteryPromise = await navigator.getBattery();
    navigator.getBattery().then(function (battery) {
      batteryIsCharging = battery.charging;
      console.log(battery.level * 100);
      battery.addEventListener("chargingchange", function () {
        batteryIsCharging = battery.charging;
      });
      console.log(batteryIsCharging);
    });
    // console.log(batteryPromise.level);
    // console.log(
    //   "device is ",
    //   batteryPromise.charging ? "charging" : "discharging"
    // );
  }
  // return (

  // )
};

export default BatteryStatus;
