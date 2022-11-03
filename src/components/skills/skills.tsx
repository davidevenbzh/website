import * as React from 'react';
import { FaLaptopCode, FaHandshake } from 'react-icons/fa';
import { useIsInViewport } from '../../utils/intersection.hook';

const Skills = (): JSX.Element => {
  const devSectionRef = React.useRef<HTMLTableSectionElement>(null);
  const softSectionRef = React.useRef<HTMLTableSectionElement>(null);
  const devIsInView = useIsInViewport(devSectionRef);
  React.useEffect(() => {
    if (devIsInView) {
      devSectionRef.current?.classList.add('scale-in-center');
    }
  }, [devIsInView]);
  const softIsInView = useIsInViewport(softSectionRef);
  React.useEffect(() => {
    if (softIsInView) {
      softSectionRef.current?.classList.add('scale-in-center');
    }
  }, [softIsInView]);

  return (
    <article className='max-w-full prose prose-p:text-sm'>
      <h2>Compétences</h2>
      <div className='flex justify-center flex-col'>
        <section
          ref={devSectionRef}
          className='shadow-2xl border-white border-2 rounded p-4 bg-white'
        >
          <div className='flex flex-col items-center'>
            <FaLaptopCode className='fill-blue-700 stroke-2' size='8rem' />
            <h3>Développement</h3>
          </div>
          <h4>Langages</h4>
          <p>Typescript, Javascript, Java, HTML, CSS, PHP, Python</p>

          <h4>Librairies et Frameworks</h4>
          <p>
            React, React-Native, Ionic/React, Angular, NestJS, Redux, Redux-toolkit, RxJS, NgRx,
            Jest, Testing Library, Spring, SpringBoot, Junit, Mockito, Symphony
          </p>
          <h4>Outils</h4>
          <p>
            Vscode, IntelliJ, Git, Gitlab, Gitlab-ci, Npm, Maven, Gradle, Docker, Docker Swarm,
            Dbeaver, PgAdmin, Storybook, Gatling
          </p>
        </section>
        <section
          ref={softSectionRef}
          className='mt-8 shadow-2xl border-white border-2 rounded p-4 bg-white'
        >
          <div className='flex flex-col items-center'>
            <FaHandshake className='fill-orange-700 stroke-2' size='8rem' />
            <h3>Soft Skills</h3>
          </div>

          <h4>Projet</h4>
          <p>Force de proposition, Organisation d&apos;atelier, Documentation technique</p>

          <h4>Monter en compétences</h4>
          <p>
            Organisation de pair/mob programming, Partage de veille technologique, Organisation de
            Rex/Post-mortem
          </p>
          <h4>Agilité</h4>
          <p>
            Participation active aux cérémonies, Organisation ou assistance sur la réalisation des
            rituels
          </p>
        </section>
      </div>
    </article>
  );
};

export default Skills;
