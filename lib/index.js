/* eslint no-new: "off" */

import * as cdk from '@aws-cdk/core'
import * as apig from '@aws-cdk/aws-apigatewayv2'
import * as apigIntegrations from '@aws-cdk/aws-apigatewayv2-integrations'

import * as sst from '@serverless-stack/resources'

export default function main (app) {
  new PeasyLiveDevStack(app, 'supersimpletesttemp')
}

class PeasyLiveDevStack extends sst.Stack {
  constructor (scope, id, props) {
    super(scope, id, props)

    // Create a Lambda function triggered by an HTTP API
    const lambda = new sst.Function(this, 'Lambda', {
      handler: 'src/lambda.handler'
    })

    // Create the HTTP API
    const api = new apig.HttpApi(this, 'Api')
    api.addRoutes({
      path: '/',
      integration: new apigIntegrations.LambdaProxyIntegration({
        handler: lambda
      })
    })

    // Show API endpoint in output
    new cdk.CfnOutput(this, 'ApiEndpoint', {
      value: api.apiEndpoint
    })
  }
}
