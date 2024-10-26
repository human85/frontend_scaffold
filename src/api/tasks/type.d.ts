type TaskSubType = typeof import('@/lib').TaskSubType;
type TaskType = typeof import('@/lib').TaskType;

declare module API {
  type TaskItem = {
    id: number;
    name: string;
    desc: string;
    logo: string;
    type: typeof TaskType;
    subtype: typeof TaskSubType;
    reward: number;
    related_badge_id?: number;
    link: null | string;
    api_provider: null | string;
    expiration: null | string;
    createtime: string;
    updatetime: null | string;
  };

  type TaskListRes = {
    list: TaskItem[];
    total: number;
    page: number | string;
    page_size: number | string;
  };
}
