import express from 'express';
import { watsonController } from '../controllers/index.js';

const router = express.Router();

router.route('/')
    .post(async (req, res, next) => {
        try {
            const { type, genre, mood, country, release, rating, runtime } = req.body;
            const body = await watsonController.parsePrediction(type, genre, country, mood, release, rating, runtime);
            return res.status(200).json(body.data);
            
        } catch (error) {
            return next(error);
        }
    });

router.route('/nlu')
    .post(async (req, res, next) => {
        try {
            const { textDesc } = req.body;
            console.log(textDesc);
            const nlu = await watsonController.watsonNLU(textDesc);
            return res.status(200).json({
                'desc': nlu,
            });
        } catch(error) {
            return res.status(201).json({
                'desc': 1,
            });
        }
    });

export default router;