import { getTasksApi } from '@/api/tasks';
import { useInfiniteScroll, useSessionStorageState } from 'ahooks';
import { BasicTarget } from 'ahooks/lib/utils/domTarget';
import { useEffect } from 'react';

type Params = {
  target?: BasicTarget<Element | Document>;
  pageSize?: number;
};

export const useTasks = (params?: Params) => {
  const { target = document, pageSize = 100 } = params || {};

  const {
    data,
    loading: tasksLoading,
    loadingMore: tasksLoadingMore,
    reloadAsync: reloadTasks,
  } = useInfiniteScroll<API.TaskListRes>(
    currentData => {
      let page = 1;

      if (currentData) {
        page = +currentData.page + 1;
      }

      return getTasksApi({ page, pageSize });
    },
    {
      target,
      isNoMore: currentData => (currentData ? currentData.total <= +currentData.page * +currentData.page_size : true),
    }
  );

  const [tasks, setTasks] = useSessionStorageState<API.TaskItem[]>('tasks', {
    defaultValue: data?.list,
  });

  useEffect(() => {
    if (!data) return;
    setTasks(data.list);
  }, [data, setTasks]);

  return { tasks, tasksLoading, reloadTasks, tasksLoadingMore };
};
