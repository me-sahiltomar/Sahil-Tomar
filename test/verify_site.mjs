import { spawn } from "node:child_process";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import assert from "node:assert";

console.log("==================================================");
console.log("SAHIL TOMAR EXECUTIVE PORTFOLIO VERIFICATION SUITE");
console.log("==================================================\n");

const PORT = Number(process.env.WEBSITE_TEST_PORT ?? 3008);

function fetchUrl(pathname) {
  return new Promise((resolve, reject) => {
    http.get(`http://127.0.0.1:${PORT}${pathname}`, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          body: data,
        });
      });
    }).on("error", reject);
  });
}

async function waitForServer(retries = 60) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetchUrl("/");
      if (res.status === 200) return true;
    } catch {
      await new Promise((r) => setTimeout(r, 500));
    }
  }
  throw new Error("Server failed to start in time on port " + PORT);
}

console.log("--- 1. Static Asset & Resume Verification ---");

const resumePath = "./public/Sahil_Tomar_Resume.pdf";
assert.ok(fs.existsSync(resumePath), "public/Sahil_Tomar_Resume.pdf exists");
const stats = fs.statSync(resumePath);
assert.ok(stats.size > 10000, `Resume PDF is too small (${stats.size} bytes)`);
console.log(`[PASS] Verified primary resume PDF exists: ${resumePath} (${stats.size} bytes)`);

console.log("\n--- 2. Live HTTP Route & Component Verification ---");

async function runHttpTests() {
  console.log(`Starting Next.js production server on port ${PORT}...`);
  const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "-p", String(PORT)], {
    stdio: "inherit",
  });

  try {
    await waitForServer();
    console.log(`[PASS] Server online on port ${PORT}. Testing homepage and content...\n`);

    const res = await fetchUrl("/");
    assert.strictEqual(res.status, 200, `/ returned status ${res.status}`);

    const expectedTokens = [
      "Sahil Tomar",
      "OPERATOR &amp; BUILDER",
      "Decoding startup bottlenecks and engineering practical AI systems.",
      "AVAILABLE IMMEDIATELY · FULL-TIME",
      "Software Built via CevonX Product Studio",
      "LedgerLens",
      "ProductScout",
      "PrioX",
      "Vyra (H²OS)",
      "0-to-1 Venture Forensics &amp; Cross-Border Sprints",
      "FinStation — 0-to-1 Venture &amp; Regulatory Forensics",
      "Pepagora B2B Marketplace",
      "ProjectUp — 9-Department Organizational Adoption",
      "Multi-Stakeholder Digital Strategy",
      "AI Connect 2026",
      "Experience &amp; Execution Timeline",
      "The AI-Augmented Generalist Stack",
      "Ready to eliminate bottlenecks and ship high-leverage systems?",
      "sahiltomar2430@gmail.com",
      "https://cal.com/me-sahiltomar",
      "https://github.com/me-sahiltomar/LedgerLens",
      "Sahil_Tomar_Resume.pdf",
    ];

    for (const token of expectedTokens) {
      assert.ok(
        res.body.includes(token),
        `Expected homepage to contain token: "${token}"`
      );
      console.log(`[PASS] Found required token: "${token}"`);
    }

    console.log("\n==================================================");
    console.log("ALL EXECUTIVE PORTFOLIO VERIFICATIONS PASSED!");
    console.log("==================================================\n");
  } finally {
    console.log("Stopping test server...");
    if (process.platform === "win32") {
      spawn("taskkill", ["/pid", String(server.pid), "/f", "/t"]);
    } else {
      server.kill("SIGTERM");
    }
  }
}

runHttpTests().catch((err) => {
  console.error("\n[FATAL] Test failed:", err);
  process.exit(1);
});
