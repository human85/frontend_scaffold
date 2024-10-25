declare module API {
  type TaskItem = {
    id: number;
    name: string;
    desc: string;
    logo: string;
    type: number;
    subtype: number;
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
