/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { VideoAnalyzerOperationResults } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { VideoAnalyzerContext } from "../videoAnalyzerContext";
import {
  VideoAnalyzerOperationResultsGetOptionalParams,
  VideoAnalyzerOperationResultsGetResponse
} from "../models";

/** Class containing VideoAnalyzerOperationResults operations. */
export class VideoAnalyzerOperationResultsImpl
  implements VideoAnalyzerOperationResults {
  private readonly client: VideoAnalyzerContext;

  /**
   * Initialize a new instance of the class VideoAnalyzerOperationResults class.
   * @param client Reference to the service client
   */
  constructor(client: VideoAnalyzerContext) {
    this.client = client;
  }

  /**
   * Get video analyzer operation result.
   * @param locationName Location name.
   * @param operationId Operation Id.
   * @param options The options parameters.
   */
  get(
    locationName: string,
    operationId: string,
    options?: VideoAnalyzerOperationResultsGetOptionalParams
  ): Promise<VideoAnalyzerOperationResultsGetResponse> {
    return this.client.sendOperationRequest(
      { locationName, operationId, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Media/locations/{locationName}/videoAnalyzerOperationResults/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VideoAnalyzer
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.operationId,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
