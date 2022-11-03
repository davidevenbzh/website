import { getAge } from '../../utils';

const Introduction = (): JSX.Element => {
  return (
    <article className='max-w-full prose prose-p:text-sm'>
      <h2>Présentation</h2>
      <section>
        <p>
          Depuis mon plus jeune âge je suis passionné par l&apos;informatique. Après mon bac en
          poche, j&apos;ai voulu en faire mon métier et je suis partie à l&apos;école EPITECH de
          Rennes. Cette école m&apos;a enseigné une notion très importante pour moi aujourd&apos;hui
          qui est: <b>apprendre à apprendre</b>. Cette notion m&apos;a permis de faire évoluer ma
          curiosité et m&apos;aide beaucoup lors de ma veille technique et mon auto-formation.
        </p>
        <p>
          Lors de mes études j&apos;ai effectué différents stages en entreprises de différents types
          (agence web, start-up, grande entreprise, ESN), l&apos;idée de ces stages de 4 à 6 mois
          était de testé différents environnements/méthodologie de travail et acquérir de
          l&apos;expérience pour être prêt pour le monde professionel. Autre élément qui m&apos;a
          fait grandir durant ces études ce fut mon année à l&apos;étranger (4ème année
          d&apos;EPITECH). Cette année d&apos;étude à Keimyung university de Daegu en Corée du sud
          m&apos;a aidé à perfectionner mon anglais, et aussi découvrir une culture et des gens
          exceptionnelles ce fût extrêmement enrichissant.
        </p>
        <p>
          Après mes études et mon diplôme en poche j&apos;ai rejoins Extia à Nantes. Dans cette ESN
          j&apos;ai pu effectué des missions pour différentes entreprises (Sncf.connect, Hermès, la
          poste, la BNP, ...) d&apos;environ un an en moyenne. Ces expériences m&apos;ont permis de
          perfectionner mes compétences dans le développement d&apos;application web et mobile.
          Toujours au sein de cette entreprise je suis lead de Comet&apos;, un regroupement de
          salarié d&apos;extia qui essaie de partager sur des sujets articleers sous forme de
          meetup/atelier. Ces évènements m&apos;ont permis de perfectionner mes compétences
          pédagogiques et de vulgarisations.
        </p>
        <p>
          Aujourd&apos;hui j&apos;ai {getAge()} ans, j&apos;habite à Nantes, et j&apos;ai développé
          ce site principalement pour rassembler l&apos;ensemble de mon savoir faire.
        </p>
      </section>
    </article>
  );
};

export default Introduction;
