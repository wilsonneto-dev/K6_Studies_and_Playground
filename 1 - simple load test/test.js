import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('[some URL]');
  sleep(0.3);
}
