import { addAliases } from "module-alias";
import path from "path";

export function registerModuleAliases() {
  addAliases({
    "@generated": path.join(__dirname, "..", "generated"),
    "@infra": path.join(__dirname, "..", "infrastructure"),
    "@app": path.join(__dirname, "..", "application"),
    "@domain": path.join(__dirname, "..", "domain"),
    "@controllers": path.join(__dirname, "..", "presentation/controllers"),
    "@routes": path.join(__dirname, "..", "presentation/routes"),
    "@services": path.join(__dirname, "..", "presentation/services"),
    "@utils": path.join(__dirname, "..", "presentation/utils"),
    "@middlewares": path.join(__dirname, "..", "presentation/middlewares"),
    "@validations": path.join(__dirname, "..", "presentation/validations"),
    "@shared": path.join(__dirname, "..", "shared"),
  });
}
