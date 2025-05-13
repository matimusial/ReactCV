import ReactFullpage from '@fullpage/react-fullpage';
import Home from './sections/home/Home';
import Experience from './sections/experience/Experience';
import Projects from './sections/projects/Projects';
import Stack from './sections/stack/Stack';
import Contact from './sections/contact/Contact';

const FullPageWrapper = () => (
  <ReactFullpage
    anchors={['home', 'experience', 'projects', 'stack', 'contact']}
    showActiveTooltip
    scrollingSpeed={1000}
    credits={{ enabled: false }}
    render={() => (
      <div>
        <div className="section">
          <Home />
        </div>
        <div className="section">
          <Experience />
        </div>
        <div className="section">
          <Projects />
        </div>
        <div className="section">
          <Stack />
        </div>
        <div className="section">
          <Contact />
        </div>
      </div>
    )}
  />
);

export default FullPageWrapper;
