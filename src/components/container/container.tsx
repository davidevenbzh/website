import Introduction from '../introduction';
import Skills from '../skills';

const Container = (): JSX.Element => {
  return (
    <div>
      <div>
        <div className='container py-4 mx-auto px-4'>
          <Introduction />
        </div>
      </div>
      <div className='bg-gray-200'>
        <div className='container py-4 mx-auto px-4'>
          <Skills />
        </div>
      </div>
    </div>
  );
};
export default Container;
