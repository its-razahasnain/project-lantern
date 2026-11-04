import { Injectable } from "@nestjs/common";
import type { HealthResponse } from "@lantern/contracts";

@Injectable()
export class HealthService {
  getStatus(now: Date = new Date()): HealthResponse {
    return {
      status: "ok",
      service: "lantern-api",
      timestamp: now.toISOString(),
    };
  }
}
