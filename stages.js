import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { target: 10, duration: '30s' },
    { target: 50, duration: '1m' },
    { target: 10, duration: '30s' },
  ],
};

export default function () {
  const res = http.get('https://quickpizza.grafana.com/');
  sleep(1);
}
