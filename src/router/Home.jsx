import Statistics from "../components/Statistics";

const Home = () => {
  return (
    <div className='flex gap-5 w-full'>
      <div className='bg-secondary h-full rounded-3xl w-[70%]'>
        <Statistics />
      </div>
      <div className='bg-secondary h-full rounded-3xl w-[26%]'>Two</div>
    </div>
  );
};
export default Home;
