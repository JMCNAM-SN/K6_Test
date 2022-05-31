import { sleep } from 'k6'
import http from 'k6/http'

export const options = {
  ext: {
    loadimpact: {
      distribution: { 'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 } },
      apm: [],
    },
  },
  thresholds: {},
//   scenarios: {
//     Scenario_1: {
//       executor: 'ramping-vus',
//       gracefulStop: '30s',
//       stages: [
//         { target: 2, duration: '10s' },
//         { target: 2, duration: '10s' },
//         { target: 0, duration: '10s' },
//       ],
//       startVUs: 1,
//       gracefulRampDown: '5s',
//       exec: 'scenario_1',
//     },
//   },
}

export default function () {
  let response

  // Test
  response = http.get('https://test.k6.io/')
  sleep(1)

  // News
  response = http.get('https://test.k6.io/news.php')
}
//TESTING