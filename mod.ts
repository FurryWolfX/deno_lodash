import _lodash from "https://cdn.skypack.dev/lodash-es@4.17.21";
import LoDashStatic from "./lodash.d.ts";

const lodash = (_lodash as unknown as LoDashStatic);

export { lodash };
