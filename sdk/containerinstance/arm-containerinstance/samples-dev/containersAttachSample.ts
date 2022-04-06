/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ContainerInstanceManagementClient } from "@azure/arm-containerinstance";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Attach to the output stream of a specific container instance in a specified resource group and container group.
 *
 * @summary Attach to the output stream of a specific container instance in a specified resource group and container group.
 * x-ms-original-file: specification/containerinstance/resource-manager/Microsoft.ContainerInstance/stable/2021-10-01/examples/ContainerAttach.json
 */
async function containerAttach() {
  const subscriptionId = "subid";
  const resourceGroupName = "demo";
  const containerGroupName = "demo1";
  const containerName = "container1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerInstanceManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.containers.attach(
    resourceGroupName,
    containerGroupName,
    containerName
  );
  console.log(result);
}

containerAttach().catch(console.error);
