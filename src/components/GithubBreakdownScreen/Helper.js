export async function getData(username, password) {
  const requestOptions = {
    Authorization: "Basic " + btoa(username + ":" + password),
    Accept: "application/json",
    "Content-Type": "application/json"
  };

  return await sendHTTPRequest("GET", `/user/repos`, requestOptions);
}

async function sendHTTPRequest(method, path, option) {
  const response = await fetch("https://api.github.com" + path, {
    method: method,
    headers: option
  });

  if (!response.ok) {
    const errObj = new Error("Failed To Retrieve Data!");
    errObj.message = await response.json();
    throw errObj;
  }

  return response.json();
}

export function getColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return "rgb(" + r + "," + g + "," + b + ")";
}

export function getGraphProperties(xLabel, labels, data, backgroundColor) {
  return {
    labels,
    datasets: [
      {
        label: xLabel,
        data,
        backgroundColor
      }
    ]
  };
}
