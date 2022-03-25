import Image from "./components/Image/Image";
import Paragraph from "./components/Paragraph/Paragraph";

import oceanImage from "./assets/ocean.jpg";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Image url={oceanImage} width="150px" height="100px" />
<img src={oceanImage}  width="150px" height="100px" />
      <Paragraph size="16px" color="#000000">This is a sample paragraph</Paragraph>
      <Paragraph size=".5rem" color="red">this is a sample paragraph</Paragraph>

</div>
  );
}

export default App;
