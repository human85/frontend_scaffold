import { request } from '@/lib';
import twa from '@twa-dev/sdk';

const id = twa.initDataUnsafe.user?.id;

export const getTasksApi = (params?: { page: number; pageSize: number }) => {
  const { page, pageSize } = params || { page: 1, pageSize: 100 };

  return request.get<unknown, API.TaskListRes>(`/task/list?tg_uid=${id}`, {
    params: {
      page,
      page_size: pageSize,
    },
  });
};

export const checkTaskApi = (taskId: number) => {
  return request.post('/task/check', {
    task_id: taskId,
  });
};
