let config_temp = {};

for (let key in process.env) {
  const conf = process.env[key];
  if (key.startsWith("VUE_APP_")) {
    key = key.substr("VUE_APP_".length);
  }

  config_temp[key] = conf;
}

const config = Object.assign(config_temp, {
  features: {
    example: parse(process.env.VUE_APP_FEATURE_EXAMPLE, false)
  }
});

function feature(name) {
  return config.features[name];
}
function parse(value, fallback) {
  if (typeof value === "undefined") {
    return fallback;
  }
  switch (typeof fallback) {
    case "boolean":
      return !!JSON.parse(value);
    case "number":
      return JSON.parse(value);
    default:
      return value;
  }
}

const env = { ...config, feature };

export default env;
