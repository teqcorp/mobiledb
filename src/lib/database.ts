import { parse } from "yaml";

const url =
  "https://raw.githubusercontent.com/teqcorp/mobiledb_database/main/devices.yml";
const response = await fetch(url);
const data = parse(await response.text());

export async function getData() {
  return data;
}

export async function getDeviceData(
  oem: string | undefined,
  codename: string | undefined
) {
  const url = `https://github.com/teqcorp/mobiledb_database/raw/main/devices/${oem}/${codename}.yml`;

  const response = await fetch(url);
  const device_data = parse(await response.text());

  return device_data;
}
