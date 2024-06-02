# Benchmark

API gateways account throttle (This throttling limit applies to the account and is shared by all APIs in this region.)

- Burst limit: 5000
- Rate limit: 10000

### golambda

- Minimal dependencies: only AWS Events interface
- Package size: 2.7MB
- Runtime: Amazon Linux 2, arm64
- No layers

#### ab -c 1000 -n 1000 https://benchmark.zenonian.com/golambda

Document Path: /golambda
Document Length: 11 bytes

Concurrency Level: 1000
Time taken for tests: 9.887 seconds
Complete requests: 1000
Failed requests: 156
(Connect: 0, Receive: 0, Length: 156, Exceptions: 0)
Non-2xx responses: 156
Total transferred: 179084 bytes
HTML transferred: 14432 bytes
Requests per second: 101.14 [#/sec] (mean)
Time per request: 9886.955 [ms] (mean)
Time per request: 9.887 [ms] (mean, across all concurrent requests)
Transfer rate: 17.69 [Kbytes/sec] received

#### ab -c 10 -n 1000 https://benchmark.zenonian.com/golambda

Document Path: /golambda
Document Length: 11 bytes

Concurrency Level: 10
Time taken for tests: 39.526 seconds
Complete requests: 1000
Failed requests: 0
Total transferred: 173000 bytes
HTML transferred: 11000 bytes
Requests per second: 25.30 [#/sec] (mean)
Time per request: 395.257 [ms] (mean)
Time per request: 39.526 [ms] (mean, across all concurrent requests)
Transfer rate: 4.27 [Kbytes/sec] received

#### ab -c 1 -n 100 https://benchmark.zenonian.com/golambda

Document Path: /golambda
Document Length: 11 bytes

Concurrency Level: 1
Time taken for tests: 39.582 seconds
Complete requests: 100
Failed requests: 0
Total transferred: 17300 bytes
HTML transferred: 1100 bytes
Requests per second: 2.53 [#/sec] (mean)
Time per request: 395.819 [ms] (mean)
Time per request: 395.819 [ms] (mean, across all concurrent requests)
Transfer rate: 0.43 [Kbytes/sec] received

#### -> response time decreases if using a small n.o concurrent requests

- AWS API gateways throttle?
- AWS Lambda concurrent runtime throttle?
