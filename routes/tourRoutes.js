const express = require('express');
const tourController = require('../controllers/tourController');
const { protect, restrictTo } = require('../controllers/authController');
const reviewRouter = require('./../routes/reviewRoutes');

const router = express.Router();

router.use('/:tourId/reviews', reviewRouter);

// router.param('id', checkId);
router
  .route('/top-5-cheap')
  .get(tourController.aliasTopCheap, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStatus);

router
  .route('/monthly-plan/:year')
  .get(
    protect,
    restrictTo('lead-guide', 'admin', 'guide'),
    tourController.getMonthlyPlan
  );

router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(tourController.getToursWithin);

router
  .route('/distances/:latlng/unit/:unit')
  .get(tourController.getToursDistance);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(protect, restrictTo('lead-guide', 'admin'), tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(
    protect,
    restrictTo('lead-guide', 'admin'),
    tourController.uploadTourImages,
    tourController.resizeTourImages,
    tourController.updateTour
  )
  .delete(
    protect,
    restrictTo('lead-guide', 'admin'),
    tourController.deleteTour
  );

module.exports = router;
