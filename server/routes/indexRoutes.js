import express from 'express';
import UserRoutes from './userRoutes';
import propertyRoutes from './propertyRoutes';

const app = express();

app.use('/api/v1', UserRoutes);
app.use('/api/v1', propertyRoutes);

export default app;
