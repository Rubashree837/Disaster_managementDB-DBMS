// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const authRouter = require('./routes/auth');
const disasterTypesRouter = require('./routes/disasterTypes');
const locationsRouter = require('./routes/locations');
const disastersRouter = require('./routes/disasters');
const victimsRouter = require('./routes/victims');
const resourcesRouter = require('./routes/resources');
const volunteersRouter = require('./routes/volunteers');
const donationsRouter = require('./routes/donations');
const agenciesRouter = require('./routes/agencies');
const emergencyContactsRouter = require('./routes/emergencyContacts');
const damageAssessmentsRouter = require('./routes/damageAssessments');
const sheltersRouter = require('./routes/shelters');
const transportRouter = require('./routes/transportation');
const medicalAidRouter = require('./routes/medicalAid');
const recoveryProjectsRouter = require('./routes/recoveryProjects');
const reliefCentersRouter = require('./routes/reliefCenters');

const { verifyToken } = require('./middleware/authMiddleware');

const app = express(); // ✅ this must come before using app

app.use(cors());
app.use(bodyParser.json());

// ✅ Serve static frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// Public: auth
app.use('/api/auth', authRouter);

// ✅ If you don’t want login protection, remove verifyToken below:
app.use('/api/disaster_types', disasterTypesRouter);
app.use('/api/locations', locationsRouter);
app.use('/api/disasters', disastersRouter);
app.use('/api/victims', victimsRouter);
app.use('/api/resources', resourcesRouter);
app.use('/api/volunteers', volunteersRouter);
app.use('/api/donations', donationsRouter);
app.use('/api/agencies', agenciesRouter);
app.use('/api/emergency_contacts', emergencyContactsRouter);
app.use('/api/damage_assessments', damageAssessmentsRouter);
app.use('/api/shelters', sheltersRouter);
app.use('/api/transportation', transportRouter);
app.use('/api/medical_aid', medicalAidRouter);
app.use('/api/recovery_projects', recoveryProjectsRouter);
app.use('/api/relief_centers', reliefCentersRouter);

// ✅ Serve index.html for main route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
