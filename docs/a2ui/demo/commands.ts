import type { XAgentCommand_v0_9 } from '@ant-design/x-card';

import { X_CARD_CATALOG_ID } from './catalog';

const SURFACE_PROFILE = 'profile';
const SURFACE_SUMMARY = 'summary';
const SURFACE_ORDER = 'order';
const SURFACE_SHOWCASE = 'showcase';
const VERSION = 'v0.9';

const cityOptions = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广州', value: 'guangzhou' },
  { label: '深圳', value: 'shenzhen' }
];

const contactOptions = [
  { label: '邮件', value: 'email' },
  { label: '电话', value: 'phone' },
  { label: '短信', value: 'sms' }
];

const notifyOptions = [
  { label: '订单更新', value: 'order' },
  { label: '促销活动', value: 'promo' },
  { label: '系统通知', value: 'system' }
];

const categoryOptions = [
  { label: '数码', value: 'digital' },
  { label: '家电', value: 'appliance' },
  { label: '服饰', value: 'clothing' },
  { label: '食品', value: 'food' }
];

const genderOptions = [
  { label: '男', value: 'male' },
  { label: '女', value: 'female' },
  { label: '其他', value: 'other' }
];

const confirmOptions = [
  { label: '确认通过', value: 'approved' },
  { label: '确认驳回', value: 'rejected' },
  { label: '其他（需补充说明）', value: 'other' }
];

interface OrderInfo {
  amount: number;
  createdAt: string;
  customer: string;
  status: string;
}

const MOCK_ORDERS: Record<string, OrderInfo> = {
  A12345: { customer: '张三', status: '已发货', amount: 1299, createdAt: '2026-09-01' },
  B67890: { customer: '李四', status: '待付款', amount: 59.9, createdAt: '2026-09-05' },
  C00001: { customer: '王五', status: '已完成', amount: 2026.5, createdAt: '2026-08-20' }
};

const RECENT_ORDERS = [
  { name: 'A12345 · 张三', status: '已发货' },
  { name: 'B67890 · 李四', status: '待付款' },
  { name: 'C00001 · 王五', status: '已完成' }
];

const profileComponents = () => [
  { id: 'root', component: 'Card', child: 'profile-col' },
  {
    id: 'profile-col',
    component: 'Column',
    children: [
      'profile-title',
      'profile-name',
      'profile-city',
      'profile-subscribe',
      'profile-submit'
    ]
  },
  { id: 'profile-title', component: 'Text', text: '用户信息登记', variant: 'h3' },
  {
    id: 'profile-name',
    component: 'TextField',
    fieldPath: 'form/name',
    label: '姓名',
    placeholder: '请输入姓名',
    value: { path: '/form/name' }
  },
  {
    id: 'profile-city',
    component: 'Select',
    fieldPath: 'form/city',
    label: '城市',
    placeholder: '请选择城市',
    options: cityOptions,
    value: { path: '/form/city' }
  },
  {
    id: 'profile-subscribe',
    component: 'SwitchField',
    fieldPath: 'form/subscribe',
    label: '订阅通知',
    value: { path: '/form/subscribe' }
  },
  {
    id: 'profile-submit',
    component: 'Button',
    text: '提交',
    variant: 'primary',
    action: {
      event: {
        name: 'submit',
        context: {
          name: { path: '/form/name', label: '姓名' },
          city: { path: '/form/city', label: '城市' },
          subscribe: { path: '/form/subscribe', label: '订阅' }
        }
      }
    }
  }
];

const summaryComponents = () => [
  { id: 'root', component: 'Card', child: 'summary-col' },
  {
    id: 'summary-col',
    component: 'Column',
    children: ['summary-title', 'summary-message', 'summary-detail', 'summary-progress']
  },
  { id: 'summary-title', component: 'Text', text: '提交结果', variant: 'h3' },
  { id: 'summary-message', component: 'Text', text: { path: '/summary/message' }, variant: 'body' },
  {
    id: 'summary-detail',
    component: 'Text',
    text: { path: '/summary/detail' },
    variant: 'caption'
  },
  {
    id: 'summary-progress',
    component: 'Text',
    text: { path: '/summary/progress' },
    variant: 'caption'
  }
];

const orderComponents = () => [
  { id: 'root', component: 'Card', child: 'order-col' },
  {
    id: 'order-col',
    component: 'Column',
    children: ['order-title', 'order-input-row', 'order-result']
  },
  { id: 'order-title', component: 'Text', text: '完整流程：查询订单', variant: 'h3' },
  { id: 'order-input-row', component: 'Row', children: ['order-input', 'query-btn'] },
  {
    id: 'order-input',
    component: 'TextField',
    fieldPath: 'orderNumber',
    label: '订单号',
    placeholder: '如 A12345',
    value: { path: '/orderNumber' }
  },
  {
    id: 'query-btn',
    component: 'Button',
    text: '查询订单',
    variant: 'primary',
    action: { event: { name: 'query_order', context: { orderNumber: { path: '/orderNumber' } } } }
  },
  { id: 'order-result', component: 'Column', children: [] }
];

const showcaseComponents = () => [
  { id: 'root', component: 'Card', child: 'showcase-col' },
  {
    id: 'showcase-col',
    component: 'Column',
    children: [
      'showcase-title',
      'display-card',
      'layout-card',
      'input-card',
      'validate-card',
      'conditional-card',
      'confirm-card',
      'container-card'
    ]
  },
  {
    id: 'showcase-title',
    component: 'Text',
    text: '组件目录（标准 basic catalog）',
    variant: 'h3'
  },

  { id: 'display-card', component: 'Card', child: 'display-col' },
  {
    id: 'display-col',
    component: 'Column',
    children: ['display-title', 'markdown-demo', 'icon-row', 'divider']
  },
  {
    id: 'display-title',
    component: 'Text',
    text: '展示类：Text（Markdown）/ Icon / Divider',
    variant: 'caption'
  },
  {
    id: 'markdown-demo',
    component: 'Text',
    text: '**加粗**、*斜体*、~~删除线~~、`行内代码`\n\n- 无序列表项 A\n- 无序列表项 B\n\n> 引用块\n\n## 二级标题\n\n[链接](https://a.com) 会降级为纯文本',
    variant: 'body'
  },
  {
    id: 'icon-row',
    component: 'Row',
    children: ['icon-mail', 'icon-check', 'icon-person', 'icon-tip']
  },
  { id: 'icon-mail', component: 'Icon', name: 'mail' },
  { id: 'icon-check', component: 'Icon', name: 'check' },
  { id: 'icon-person', component: 'Icon', name: 'person' },
  { id: 'icon-tip', component: 'Text', text: '（Icon 组件）' },
  { id: 'divider', component: 'Divider' },

  { id: 'layout-card', component: 'Card', child: 'layout-col' },
  {
    id: 'layout-col',
    component: 'Column',
    children: ['layout-title', 'list-title', 'order-list']
  },
  {
    id: 'layout-title',
    component: 'Text',
    text: '布局类：Row / Column / List（模板迭代降级为预生成行 + 绝对路径）',
    variant: 'caption'
  },
  { id: 'list-title', component: 'Text', text: '最近订单', variant: 'h4' },
  {
    id: 'order-list',
    component: 'List',
    direction: 'vertical',
    children: ['recent-0', 'recent-1', 'recent-2']
  },
  {
    id: 'recent-0',
    component: 'Row',
    justify: 'spaceBetween',
    children: ['recent-0-name', 'recent-0-status']
  },
  { id: 'recent-0-name', component: 'Text', text: { path: '/recentOrders/0/name' } },
  {
    id: 'recent-0-status',
    component: 'Text',
    text: { path: '/recentOrders/0/status' },
    variant: 'caption'
  },
  {
    id: 'recent-1',
    component: 'Row',
    justify: 'spaceBetween',
    children: ['recent-1-name', 'recent-1-status']
  },
  { id: 'recent-1-name', component: 'Text', text: { path: '/recentOrders/1/name' } },
  {
    id: 'recent-1-status',
    component: 'Text',
    text: { path: '/recentOrders/1/status' },
    variant: 'caption'
  },
  {
    id: 'recent-2',
    component: 'Row',
    justify: 'spaceBetween',
    children: ['recent-2-name', 'recent-2-status']
  },
  { id: 'recent-2-name', component: 'Text', text: { path: '/recentOrders/2/name' } },
  {
    id: 'recent-2-status',
    component: 'Text',
    text: { path: '/recentOrders/2/status' },
    variant: 'caption'
  },

  { id: 'input-card', component: 'Card', child: 'input-col' },
  {
    id: 'input-col',
    component: 'Column',
    children: [
      'input-title',
      'textfield',
      'checkbox',
      'choice',
      'choice-multi',
      'select',
      'select-multi',
      'country',
      'language',
      'slider',
      'datetime',
      'open-btn'
    ]
  },
  {
    id: 'input-title',
    component: 'Text',
    text: '交互类：TextField / CheckBox / ChoicePicker / Select / Slider / DateTimeInput / Button',
    variant: 'caption'
  },
  {
    id: 'textfield',
    component: 'TextField',
    fieldPath: 'name',
    label: '姓名',
    value: { path: '/name' },
    checks: [
      {
        condition: { call: 'required', args: { value: { path: '/name' } } },
        message: '姓名不能为空'
      }
    ]
  },
  {
    id: 'checkbox',
    component: 'CheckBox',
    fieldPath: 'subscribe',
    label: '订阅通知',
    value: { path: '/subscribe' }
  },
  {
    id: 'choice',
    component: 'ChoicePicker',
    fieldPath: 'preference',
    label: '偏好联系方式（单选）',
    options: contactOptions,
    value: { path: '/preference' },
    variant: 'mutuallyExclusive',
    checks: [
      {
        condition: { call: 'required', args: { value: { path: '/preference' } } },
        message: '请选择偏好联系方式'
      }
    ]
  },
  {
    id: 'choice-multi',
    component: 'ChoicePicker',
    fieldPath: 'notifyTypes',
    label: '接收的通知类型（多选）',
    options: notifyOptions,
    value: { path: '/notifyTypes' },
    variant: 'multipleSelection'
  },
  {
    id: 'select',
    component: 'Select',
    fieldPath: 'city',
    label: '所在城市（下拉框）',
    options: cityOptions,
    placeholder: '请选择城市',
    value: { path: '/city' }
  },
  {
    id: 'select-multi',
    component: 'Select',
    fieldPath: 'categories',
    label: '关注的商品类目（下拉多选）',
    multiple: true,
    options: categoryOptions,
    placeholder: '请选择类目',
    value: { path: '/categories' }
  },
  {
    id: 'country',
    component: 'CountrySelect',
    fieldPath: 'country',
    label: '国家/地区（内置国家列表）',
    placeholder: '请选择国家/地区',
    value: { path: '/country' }
  },
  {
    id: 'language',
    component: 'LanguageSelect',
    fieldPath: 'language',
    label: '语言（来自接口）',
    placeholder: '请选择语言',
    value: { path: '/language' }
  },
  {
    id: 'slider',
    component: 'Slider',
    fieldPath: 'rating',
    label: '评分',
    min: 0,
    max: 5,
    value: { path: '/rating' }
  },
  {
    id: 'datetime',
    component: 'DateTimeInput',
    enableDate: true,
    fieldPath: 'date',
    label: '预约日期',
    value: { path: '/date' }
  },
  {
    id: 'open-btn',
    component: 'Button',
    text: '打开 A2UI 文档（functionCall → openUrl）',
    action: { functionCall: { call: 'openUrl', args: { url: 'https://a2ui.org/' } } }
  },

  { id: 'validate-card', component: 'Card', child: 'validate-col' },
  {
    id: 'validate-col',
    component: 'Column',
    children: ['validate-title', 'email-field', 'username-field', 'phone-field', 'age-field']
  },
  {
    id: 'validate-title',
    component: 'Text',
    text: '校验类：email / length / regex / numeric（改动输入体验实时校验）',
    variant: 'caption'
  },
  {
    id: 'email-field',
    component: 'TextField',
    fieldPath: 'email',
    label: '邮箱（email）',
    value: { path: '/email' },
    checks: [
      {
        condition: { call: 'email', args: { value: { path: '/email' } } },
        message: '请输入有效的邮箱地址'
      }
    ]
  },
  {
    id: 'username-field',
    component: 'TextField',
    fieldPath: 'username',
    label: '用户名（length 4-12 位）',
    value: { path: '/username' },
    checks: [
      {
        condition: { call: 'length', args: { value: { path: '/username' }, min: 4, max: 12 } },
        message: '用户名长度需在 4-12 位之间'
      }
    ]
  },
  {
    id: 'phone-field',
    component: 'TextField',
    fieldPath: 'phone',
    label: '手机号（regex，1 开头 11 位）',
    value: { path: '/phone' },
    checks: [
      {
        condition: { call: 'regex', args: { value: { path: '/phone' }, pattern: '^1[0-9]{10}$' } },
        message: '请输入 11 位手机号'
      }
    ]
  },
  {
    id: 'age-field',
    component: 'TextField',
    fieldPath: 'age',
    label: '年龄（numeric 18-60）',
    value: { path: '/age' },
    checks: [
      {
        condition: { call: 'numeric', args: { value: { path: '/age' }, min: 18, max: 60 } },
        message: '年龄需在 18-60 之间'
      }
    ]
  },

  { id: 'conditional-card', component: 'Card', child: 'conditional-col' },
  {
    id: 'conditional-col',
    component: 'Column',
    children: ['conditional-title', 'gender-picker', 'other-note-field', 'rating-tip']
  },
  {
    id: 'conditional-title',
    component: 'Text',
    text: '条件显示：选中「其他」才显示补充说明（accessibility.hidden 组件内守卫生效）',
    variant: 'caption'
  },
  {
    id: 'gender-picker',
    component: 'ChoicePicker',
    fieldPath: 'gender',
    label: '性别（单选）',
    options: genderOptions,
    value: { path: '/gender' },
    variant: 'mutuallyExclusive'
  },
  {
    id: 'other-note-field',
    component: 'TextField',
    fieldPath: 'otherNote',
    label: '补充说明（仅选「其他」时显示）',
    value: { path: '/otherNote' },
    accessibility: {
      hidden: {
        call: 'not',
        args: {
          value: { call: 'contains', args: { value: { path: '/gender' }, item: 'other' } }
        }
      }
    }
  },
  {
    id: 'rating-tip',
    component: 'Text',
    text: '感谢满分评价！（评分拉到 5 才显示，hidden = not(eq(rating,5))）',
    accessibility: {
      hidden: {
        call: 'not',
        args: { value: { call: 'eq', args: { value: { path: '/rating' }, equals: 5 } } }
      }
    }
  },

  { id: 'confirm-card', component: 'Card', child: 'confirm-col' },
  {
    id: 'confirm-col',
    component: 'Column',
    children: ['confirm-title', 'confirm-choice', 'confirm-input']
  },
  {
    id: 'confirm-title',
    component: 'Text',
    text: '确认卡片：三个选项纵向排列，选「其他」才显示输入框',
    variant: 'caption'
  },
  {
    id: 'confirm-choice',
    component: 'ChoicePicker',
    direction: 'vertical',
    fieldPath: 'confirmChoice',
    label: '',
    options: confirmOptions,
    value: { path: '/confirmChoice' },
    variant: 'mutuallyExclusive'
  },
  {
    id: 'confirm-input',
    component: 'TextField',
    fieldPath: 'confirmNote',
    label: '请补充说明',
    value: { path: '/confirmNote' },
    accessibility: {
      hidden: {
        call: 'not',
        args: {
          value: { call: 'contains', args: { value: { path: '/confirmChoice' }, item: 'other' } }
        }
      }
    }
  },

  { id: 'container-card', component: 'Card', child: 'container-col' },
  {
    id: 'container-col',
    component: 'Column',
    children: ['container-title', 'tabs', 'modal']
  },
  {
    id: 'container-title',
    component: 'Text',
    text: '容器类：Tabs / Modal（child 引用降级为 children 顺序约定）',
    variant: 'caption'
  },
  {
    id: 'tabs',
    component: 'Tabs',
    titles: ['详情', '设置'],
    children: ['tab-detail', 'tab-settings']
  },
  { id: 'tab-detail', component: 'Text', text: '这是「详情」Tab 的内容' },
  { id: 'tab-settings', component: 'Text', text: '这是「设置」Tab 的内容' },
  { id: 'modal', component: 'Modal', children: ['modal-trigger-text', 'modal-content-col'] },
  {
    id: 'modal-trigger-text',
    component: 'Text',
    text: '点击打开 Modal（children[0]=trigger，children[1]=content）'
  },
  {
    id: 'modal-content-col',
    component: 'Column',
    children: ['modal-content-title', 'modal-content-body']
  },
  { id: 'modal-content-title', component: 'Text', text: 'Modal 内容', variant: 'h4' },
  {
    id: 'modal-content-body',
    component: 'Text',
    text: '这是 Modal 的 content 组件，由 trigger 打开。'
  }
];

const SHOWCASE_DATA: Record<string, unknown> = {
  name: '张三',
  subscribe: true,
  preference: ['email'],
  notifyTypes: ['order', 'system'],
  city: ['shanghai'],
  categories: ['digital', 'food'],
  country: ['China'],
  language: [],
  rating: 3,
  date: '2026-09-08',
  email: 'zhangsan@example.com',
  username: 'abc',
  phone: '',
  age: '16',
  gender: ['male'],
  otherNote: '',
  confirmChoice: ['approved'],
  confirmNote: '',
  recentOrders: RECENT_ORDERS
};

const showcaseDataCommands = (): XAgentCommand_v0_9[] =>
  Object.entries(SHOWCASE_DATA).map(([key, value]) => ({
    version: VERSION,
    updateDataModel: { surfaceId: SURFACE_SHOWCASE, path: `/${key}`, value }
  }));

const readValue = (input: unknown): string => {
  if (input != null && typeof input === 'object' && 'value' in input) {
    const raw = (input as { value?: unknown }).value;
    return raw == null ? '' : String(raw);
  }
  return input == null ? '' : String(input);
};

export const buildInitialCommands = (): XAgentCommand_v0_9[] => [
  { version: VERSION, createSurface: { surfaceId: SURFACE_ORDER, catalogId: X_CARD_CATALOG_ID } },
  {
    version: VERSION,
    updateComponents: { surfaceId: SURFACE_ORDER, components: orderComponents() }
  },
  {
    version: VERSION,
    updateDataModel: { surfaceId: SURFACE_ORDER, path: '/orderNumber', value: '' }
  },
  {
    version: VERSION,
    createSurface: { surfaceId: SURFACE_SHOWCASE, catalogId: X_CARD_CATALOG_ID }
  },
  {
    version: VERSION,
    updateComponents: { surfaceId: SURFACE_SHOWCASE, components: showcaseComponents() }
  },
  ...showcaseDataCommands(),
  { version: VERSION, createSurface: { surfaceId: SURFACE_SUMMARY, catalogId: X_CARD_CATALOG_ID } },
  {
    version: VERSION,
    updateComponents: { surfaceId: SURFACE_SUMMARY, components: summaryComponents() }
  },
  {
    version: VERSION,
    updateDataModel: {
      surfaceId: SURFACE_SUMMARY,
      path: '/summary',
      value: { message: '尚未提交', detail: '-', progress: 0 }
    }
  }
];

export const buildSummaryCommands = (context: Record<string, unknown>): XAgentCommand_v0_9[] => {
  const name = readValue(context.name);
  const city = readValue(context.city);

  if (!name) {
    return [
      {
        version: VERSION,
        updateDataModel: {
          surfaceId: SURFACE_SUMMARY,
          path: '/summary/message',
          value: '请先填写姓名'
        }
      }
    ];
  }

  return [
    {
      version: VERSION,
      updateDataModel: {
        surfaceId: SURFACE_SUMMARY,
        path: '/summary/message',
        value: `已提交：${name}`
      }
    },
    {
      version: VERSION,
      updateDataModel: {
        surfaceId: SURFACE_SUMMARY,
        path: '/summary/detail',
        value: `城市：${city}`
      }
    },
    {
      version: VERSION,
      updateDataModel: { surfaceId: SURFACE_SUMMARY, path: '/summary/progress', value: 100 }
    }
  ];
};

export const buildProgressCommand = (value: number): XAgentCommand_v0_9 => ({
  version: VERSION,
  updateDataModel: { surfaceId: SURFACE_SUMMARY, path: '/summary/progress', value }
});

export const buildOrderCommands = (context: Record<string, unknown>): XAgentCommand_v0_9[] => {
  const orderNo = readValue(context.orderNumber).trim();
  const order = MOCK_ORDERS[orderNo];

  if (!order) {
    return [
      {
        version: VERSION,
        updateDataModel: { surfaceId: SURFACE_ORDER, path: '/queryState', value: 'not_found' }
      },
      {
        version: VERSION,
        updateComponents: {
          surfaceId: SURFACE_ORDER,
          components: [
            { id: 'order-result', component: 'Column', children: ['order-result-card'] },
            { id: 'order-result-card', component: 'Card', child: 'order-msg' },
            {
              id: 'order-msg',
              component: 'Text',
              text: `未找到订单号「${orderNo}」对应的订单，请检查后重试。`
            }
          ]
        }
      }
    ];
  }

  return [
    {
      version: VERSION,
      updateDataModel: {
        surfaceId: SURFACE_ORDER,
        path: '/order',
        value: {
          customer: order.customer,
          status: order.status,
          amount: order.amount,
          createdAt: order.createdAt
        }
      }
    },
    {
      version: VERSION,
      updateComponents: {
        surfaceId: SURFACE_ORDER,
        components: [
          { id: 'order-result', component: 'Column', children: ['order-result-card'] },
          { id: 'order-result-card', component: 'Card', child: 'order-result-col' },
          {
            id: 'order-result-col',
            component: 'Column',
            children: ['row-customer', 'row-status', 'row-amount', 'row-created']
          },
          {
            id: 'row-customer',
            component: 'Row',
            justify: 'spaceBetween',
            children: ['label-customer', 'value-customer']
          },
          { id: 'label-customer', component: 'Text', text: '客户：', variant: 'caption' },
          { id: 'value-customer', component: 'Text', text: { path: '/order/customer' } },
          {
            id: 'row-status',
            component: 'Row',
            justify: 'spaceBetween',
            children: ['label-status', 'value-status']
          },
          { id: 'label-status', component: 'Text', text: '状态：', variant: 'caption' },
          { id: 'value-status', component: 'Text', text: { path: '/order/status' } },
          {
            id: 'row-amount',
            component: 'Row',
            justify: 'spaceBetween',
            children: ['label-amount', 'value-amount']
          },
          { id: 'label-amount', component: 'Text', text: '金额：', variant: 'caption' },
          { id: 'value-amount', component: 'Text', text: { path: '/order/amount' } },
          {
            id: 'row-created',
            component: 'Row',
            justify: 'spaceBetween',
            children: ['label-created', 'value-created']
          },
          { id: 'label-created', component: 'Text', text: '下单时间：', variant: 'caption' },
          { id: 'value-created', component: 'Text', text: { path: '/order/createdAt' } }
        ]
      }
    }
  ];
};
