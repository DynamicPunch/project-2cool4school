import { html } from 'lit';
import '../src/project-2cool4school.js';

export default {
  title: 'Project2cool4school',
  component: 'project-2cool4school',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <project-2cool4school
      style="--project-2cool4school-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </project-2cool4school>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
