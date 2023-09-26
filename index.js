import { Aplication } from './framework/Aplication.js';
import { userRouter } from './src/user-router.js';
import { parseJson } from './framework/parseJson.js';
import { parseUrl } from './framework/parseUrl.js';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 3000;
const app = new Aplication();

app.use(parseJson);
app.use(parseUrl('http://localhost:3000'));
app.addRouter(userRouter);

const start = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://simdanila:my-express@my-express.rigs7li.mongodb.net/?retryWrites=true&w=majority',
    );
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
