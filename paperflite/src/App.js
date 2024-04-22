import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import ContentTab from './components/conversations/ContentHeader';
import CollectionHeader from './components/collectionSeekTab/CollectionHeader';
import MwebMenuBar from './components/MwebMenuBar';

function App() {
  return (
    <div className='sm:flex font-sans'>
      <div className='hidden md:block'>
        <Sidebar />
      </div>
      <ContentTab />
      <CollectionHeader />
      <div className="block md:hidden">
        <MwebMenuBar />
      </div>

    </div>
  );
}

export default App;
