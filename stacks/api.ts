import type { StackContext } from 'sst/constructs';
import { Api, Function } from 'sst/constructs';

export function API({ stack }: StackContext) {
	const defaultAPI = new Function(stack, 'default', {
		handler: 'golambda',
		runtime: 'go',
		architecture: 'arm_64',
		environment: {},
	});

	const api = new Api(stack, 'api', {
		cors: {
			allowOrigins: ['*'],
			allowHeaders: ['Content-Type', 'Authorization'],
			allowMethods: ['GET', 'POST'],
		},
		routes: {
			'GET /': {
				function: defaultAPI,
			},
		},
		customDomain: {
			hostedZone: 'zenonian.com',
			domainName: 'benchmark.zenonian.com',
		},
	});

	stack.addOutputs({
		CustomDomain: api.customDomainUrl,
		ApiEndpoint: api.url,
	});
}
