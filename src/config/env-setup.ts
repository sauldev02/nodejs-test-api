import { env } from "./validate-env";

export function configureEnvironment() {
  if (env.NODE_ENV === "production") {
    require("./module-alias").registerModuleAliases();
  }
}

export { env };
