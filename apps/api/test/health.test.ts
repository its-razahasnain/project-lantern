import test from "node:test";
import assert from "node:assert/strict";
import { HealthService } from "../src/health/health.service";

test("health status returns stable service identity and ISO timestamp", () => {
  const service = new HealthService();
  const result = service.getStatus(new Date("2026-11-04T12:00:00.000Z"));

  assert.deepEqual(result, {
    status: "ok",
    service: "lantern-api",
    timestamp: "2026-11-04T12:00:00.000Z",
  });
});
