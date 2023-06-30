import * as compiler from "vue-template-compiler";
import fs from "fs";

export default filePath => {

  if(/\.vue$/.test(filePath)) {
    const { script, setupScript } = compiler.parseComponent(fs.readFileSync(filePath, {encoding: "utf8"}));

    let s = script
    if (setupScript && !script) {
      s = setupScript
    }
    return s && !!s.lang && s.lang.toLowerCase() === "ts";
  }

  return false;

};
