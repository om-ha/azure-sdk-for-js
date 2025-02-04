/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert } from "chai";
import { Context } from "mocha";
import { StorageMoverClient } from "../src/storageMoverClient";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "azure_subscription_id"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("storageMover test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: StorageMoverClient;
  let location: string;
  let resourceGroup: string;
  let storageMoverName: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new StorageMoverClient(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "eastus";
    resourceGroup = "myjstest";
    storageMoverName = "storageMoverName";
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("storageMovers create test", async function () {
    const res = await client.storageMovers.createOrUpdate(
      resourceGroup,
      storageMoverName,
      {
        description: "Example Storage Mover Description",
        location,
        tags: { key1: "value1", key2: "value2" }
      });
    assert.equal(res.name, storageMoverName);
  });

  it("storageMovers get test", async function () {
    const res = await client.storageMovers.get(resourceGroup, storageMoverName);
    assert.equal(res.name, storageMoverName);
  });

  it("storageMovers list test", async function () {
    const resArray = new Array();
    for await (let item of client.storageMovers.listBySubscription()) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("storageMovers delete test", async function () {
    const resArray = new Array();
    const res = await client.storageMovers.beginDeleteAndWait(resourceGroup, storageMoverName)
    for await (let item of client.storageMovers.listBySubscription()) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
})
