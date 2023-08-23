//http://apiip.net/api/check?ip=67.250.186.196&accessKey=API_KEY
//ip:5.208.12.250
//key:9064de49-cf40-4189-b344-644c1b945966
//http://apiip.net/api/check?ip=5.208.12.250&accessKey=9064de49-cf40-4189-b344-644c1b945966

const ip_input = document.getElementById("ip-input");
const submit_key = document.getElementById("submit");
const result_country = document.getElementById("result");

async function getIpInfo() {
  try {
    submit_key.addEventListener("click", async function (event) {
      // Set endpoint and your access key
      const ip = ip_input.value;
      const accessKey = "9064de49-cf40-4189-b344-644c1b945966";
      const url =
        "http://apiip.net/api/check?ip=" + ip + "&accessKey=" + accessKey;

      // Make a request and store the response
      const response = await fetch(url);

      // Decode JSON response:
      const result = await response.json();

      // Display the country name
      result_country.innerHTML = result.countryName;
      console.log(result)
      console.log(result.countryName);
      ip_input.value = "";
    });
  } catch (error) {
    console.log(error.message);
  }
}
getIpInfo();
