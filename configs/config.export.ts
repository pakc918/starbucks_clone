import configDev from "./config.dev";
import configLocal from "./config.local";

// 클라이언트에서는 이 함수를 사용하여 config 값을 참조합니다.
const Config = () => {
  switch (process.env.NEXT_PUBLIC_RUN_MODE) {
    case "local":
      return configLocal;
    case "dev":
      return configDev;
    default:
      return configLocal;
  }
};

export default Config;
