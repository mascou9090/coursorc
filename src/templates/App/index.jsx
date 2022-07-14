import { Posts } from '../../components/Posts';
import { PostsProvider} from '../../contexts/PostsProvider';


function App() {
  return (
    <PostsProvider>
      <div>
        <Posts />
      </div>
    </PostsProvider>
  )
}

export default App;