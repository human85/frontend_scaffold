export enum TaskType {
  daily,
  onetime,
  partner,
  badge,
}

export enum TaskSubType {
  none,
  social, // twitter website youtube etc.
  tg_channel,
  tg_mini_app,
  api_check,
  time_limit, // 暂时不支持此类型
}
