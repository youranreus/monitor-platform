import axios from 'axios';

export interface PAParam {
  url: string;
  errorDetect: boolean;
  optReport: boolean;
  timeout: number;
  user: number;
}

export interface PATask {
  id: string;
  created: string;
  user: number;
  url: string;
  status: 0 | 1 | 2;
}

export function createAnalyzeTask(data: PAParam) {
  return axios.post('/pa', data);
}

export function getAnalyzeTaskList() {
  return axios.get<PATask[]>('/pa');
}