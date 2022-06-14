#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkpipelinetsStack } from '../lib/cdkpipelinets-stack';

const app = new cdk.App();
new CdkpipelinetsStack(app, 'CdkpipelinetsStack');
