import { execSync } from "child_process";

execSync("git diff --cached --name-only", { stdio: "inherit" });
execSync("prettier --write $(git diff --cached --name-only)", {
  stdio: "inherit"
});
