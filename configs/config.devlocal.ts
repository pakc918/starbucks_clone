import getConfigs from "./config.common";

// backend 서버 URL
const baseUrl = "http://10.10.10.205:8080";
// 굳이 필요 없음.

const mode = "devlocal";

const configDev = getConfigs({
  baseUrl,
  mode,
});

export default configDev;
