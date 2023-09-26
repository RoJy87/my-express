import { Aplication } from './framework/Aplication.js';
import { userRouter } from './src/user-router.js';
import { parseJson } from './framework/parseJson.js';
import { parseUrl } from './framework/parseUrl.js';

const PORT = process.env.PORT || 3000;
const app = new Aplication();

app.use(parseJson);
app.use(parseUrl('http://localhost:3000'));
app.addRouter(userRouter);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
