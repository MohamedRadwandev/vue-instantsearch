import { previewWrapper } from './utils';
import { storiesOf } from '@storybook/vue';

storiesOf('CurrentRefinements', module)
  .addDecorator(previewWrapper)
  .add('default', () => ({
    template: `<div>
      <ais-current-refinements></ais-current-refinements>
      <ais-menu attribute="materials"></ais-menu>
    </div>`,
  }));
