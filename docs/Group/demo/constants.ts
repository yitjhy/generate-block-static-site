export const STATUS_OPTIONS = [
  { label: '工单状态处于新建（未分配）', value: 'new' },
  { label: '工单状态处于已开启', value: 'open' },
  { label: '工单状态处于待回应', value: 'waitReply' },
  { label: '工单状态处于已解决', value: 'resolved' },
  { label: '工单状态处于已关闭归档', value: 'closed' },
];

export const DURATION_UNIT_OPTIONS = [
  { label: '分钟', value: 1 },
  { label: '天', value: 2 },
];

export const ACTION_OPTIONS = [
  { label: '调用Flow Bot', value: 'bot' },
];

export const STATUS_OPTIONS_1 = [
  { label: '已解决', value: 'resolved' },
  { label: '已结束归档', value: 'closed' },
];

export const STATUS_ALL_OPTIONS_1 = [
  { label: '新建(未分配)', value: 'new' },
  { label: '已开启', value: 'open' },
  { label: '待回应', value: 'waitReply' },
  { label: '待回访', value: 'waitReturn' },
  { label: '已解决', value: 'resolved' },
  { label: '已关闭', value: 'closed' },
];
