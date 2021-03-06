const express = require('express');
const tourController = require('../controllers/tourController');

// Router setup
const router = express.Router();

// ID validation check (via param middleware)
// router.param('id', tourController.checkID);

// Alias route
// prefill query object with middleware tourController.aliasTopTours()
// route => 127.0.0.1:3000/api/v1/tours/top-5-cheap
router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
