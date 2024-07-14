import express from 'express';
import upload from '../middlewares/upload';
import db from '../server';

const router = express.Router();

// Handle job application submission
router.post('careers/:id/apply', upload.single('resume'), async (req, res) => {
  const { id } = req.params;
  const { name, email, linkedin, links, information } = req.body;
  const resumePath = req.file ? req.file.path : null;

  if (!name || !email || !linkedin || !links || !information || !resumePath) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    await db('job_applications').insert({
      job_id: id,
      name,
      email,
      linkedin,
      links,
      resume_path: resumePath,
      information
    });

    res.status(201).json({ message: 'Job application submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit job application' });
  }
});

export default router;