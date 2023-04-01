import getConfigs from "./config.common";

// backend 서버 URL
const baseUrl = "http://10.10.10.109:8080";

const mode = "dev";

const configDev = getConfigs({
  baseUrl,
  mode,
});

export default configDev;
