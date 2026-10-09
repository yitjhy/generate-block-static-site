import type { Catalog } from '@ant-design/x-card';
import { registerCatalog } from '@ant-design/x-card';

export const X_CARD_CATALOG_ID = 'local://a2ui-x-card-demo.json';

export const X_CARD_CATALOG: Catalog = {
  catalogId: X_CARD_CATALOG_ID,
  components: {
    Card: {
      type: 'object',
      properties: { accessibility: {}, children: {} }
    },
    Column: {
      type: 'object',
      properties: { accessibility: {}, children: {} }
    },
    Row: {
      type: 'object',
      properties: { accessibility: {}, children: {}, justify: {} }
    },
    List: {
      type: 'object',
      properties: { accessibility: {}, align: {}, children: {}, direction: {} }
    },
    Text: {
      type: 'object',
      properties: { accessibility: {}, text: {}, variant: {} },
      required: ['text']
    },
    Icon: {
      type: 'object',
      properties: { accessibility: {}, name: {} },
      required: ['name']
    },
    Image: {
      type: 'object',
      properties: { accessibility: {}, description: {}, fit: {}, url: {} },
      required: ['url']
    },
    Video: {
      type: 'object',
      properties: { accessibility: {}, url: {} },
      required: ['url']
    },
    AudioPlayer: {
      type: 'object',
      properties: { accessibility: {}, description: {}, url: {} },
      required: ['url']
    },
    Divider: {
      type: 'object',
      properties: { accessibility: {}, axis: {} }
    },
    TextField: {
      type: 'object',
      properties: {
        accessibility: {},
        checks: {},
        fieldPath: {},
        label: {},
        placeholder: {},
        value: {},
        variant: {}
      },
      required: ['label']
    },
    CheckBox: {
      type: 'object',
      properties: { accessibility: {}, fieldPath: {}, label: {}, value: {} },
      required: ['label']
    },
    ChoicePicker: {
      type: 'object',
      properties: {
        accessibility: {},
        checks: {},
        direction: {},
        fieldPath: {},
        label: {},
        options: {},
        value: {},
        variant: {}
      }
    },
    Select: {
      type: 'object',
      properties: {
        accessibility: {},
        fieldPath: {},
        label: {},
        multiple: {},
        options: {},
        placeholder: {},
        value: {}
      }
    },
    CountrySelect: {
      type: 'object',
      properties: {
        accessibility: {},
        checks: {},
        fieldPath: {},
        label: {},
        multiple: {},
        placeholder: {},
        value: {}
      },
      required: ['fieldPath']
    },
    LanguageSelect: {
      type: 'object',
      properties: {
        accessibility: {},
        checks: {},
        fieldPath: {},
        label: {},
        multiple: {},
        options: {},
        placeholder: {},
        value: {}
      },
      required: ['fieldPath']
    },
    SwitchField: {
      type: 'object',
      properties: { accessibility: {}, fieldPath: {}, label: {}, value: {} },
      required: ['label']
    },
    Slider: {
      type: 'object',
      properties: {
        accessibility: {},
        checks: {},
        fieldPath: {},
        label: {},
        max: {},
        min: {},
        value: {}
      }
    },
    DateTimeInput: {
      type: 'object',
      properties: {
        accessibility: {},
        checks: {},
        enableDate: {},
        enableTime: {},
        fieldPath: {},
        label: {},
        value: {}
      }
    },
    Button: {
      type: 'object',
      properties: { accessibility: {}, action: {}, checks: {}, text: {}, variant: {} },
      required: ['text', 'action']
    },
    Tabs: {
      type: 'object',
      properties: { accessibility: {}, children: {}, titles: {} }
    },
    Modal: {
      type: 'object',
      properties: { accessibility: {}, children: {} }
    }
  }
};

registerCatalog(X_CARD_CATALOG);
