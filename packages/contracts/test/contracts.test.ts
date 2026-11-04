import test from "node:test";
import assert from "node:assert/strict";
import { isContentKind } from "../src/index.js";

test("accepts supported content kinds", () => {
  assert.equal(isContentKind("movie"), true);
  assert.equal(isContentKind("series"), true);
  assert.equal(isContentKind("episode"), true);
});

test("rejects unsupported content kinds", () => {
  assert.equal(isContentKind("film"), false);
  assert.equal(isContentKind(null), false);
  assert.equal(isContentKind(42), false);
});
