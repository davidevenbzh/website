const Header = (): JSX.Element => {
  return (
    <header>
      <div className='prose p-4 mb-32 mx-4 text-center text-white bg-black/25 rounded border-white/30 border-solid border-2 shadow-lg backdrop-blur-sm'>
        <i>Bonjour, je m&apos;appelle David EVEN et je suis </i>
        <h1 className='text-white font-["NotoSansMono"]'>Développeur</h1>
        <i>Bienvenue sur mon site</i>
      </div>
    </header>
  );
};

export default Header;
