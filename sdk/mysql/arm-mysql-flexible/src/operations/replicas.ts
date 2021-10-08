/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/replicasMappers";
import * as Parameters from "../models/parameters";
import { MySQLManagementClientContext } from "../mySQLManagementClientContext";

/** Class representing a Replicas. */
export class Replicas {
  private readonly client: MySQLManagementClientContext;

  /**
   * Create a Replicas.
   * @param {MySQLManagementClientContext} client Reference to the service client.
   */
  constructor(client: MySQLManagementClientContext) {
    this.client = client;
  }

  /**
   * List all the replicas for a given server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicasListByServerResponse>
   */
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicasListByServerResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.ServerListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServerListResult>): void;
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServerListResult>, callback?: msRest.ServiceCallback<Models.ServerListResult>): Promise<Models.ReplicasListByServerResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      listByServerOperationSpec,
      callback) as Promise<Models.ReplicasListByServerResponse>;
  }

  /**
   * List all the replicas for a given server.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicasListByServerNextResponse>
   */
  listByServerNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicasListByServerNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ServerListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServerListResult>): void;
  listByServerNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServerListResult>, callback?: msRest.ServiceCallback<Models.ServerListResult>): Promise<Models.ReplicasListByServerNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServerNextOperationSpec,
      callback) as Promise<Models.ReplicasListByServerNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByServerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/flexibleServers/{serverName}/replicas",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServerListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByServerNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServerListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
