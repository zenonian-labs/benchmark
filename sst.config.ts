import type { SSTConfig } from 'sst';

import { API } from './stacks/api';

export default {
	config() {
		return {
			name: 'zenonian-benchmark',
			region: 'ap-south-1',
		};
	},
	stacks(app) {
		app.stack(API);
	},
} satisfies SSTConfig;
